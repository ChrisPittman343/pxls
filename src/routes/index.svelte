<script lang="ts">
	import { colors } from '$lib/stores/colorsStore';
	import { canvasElement, imgElement, imgSrc, worker } from '$lib/stores/imageStore';
	import { onMount } from 'svelte';
	import { notifications } from '$lib/stores/notificationsStore';
	import ImageSection from '$lib/components/ImageSection.svelte';
	import OutputSection from '$lib/components/OutputSection.svelte';
	import Hero from '$lib/components/Hero.svelte';

	onMount(() => {
		// Set up service worker to update colors and notifications after finished generating
		worker.set(new Worker('/paletteGenerator.worker.js'));
		$worker.onmessage = (e) => {
			if (e.data.error) notifications.set([e.data.error, ...$notifications]);
			colors.set(e.data.colors);
		};

		// Create HTML Elements to draw input image
		canvasElement.set(document.createElement('canvas'));
		imgElement.set(document.createElement('img'));
		$imgElement.crossOrigin = 'Anonymous';

		// Whenever the image's src should change, update it and find the palette for it
		// Uses the canvas to get the image data from the new image src
		const srcUnsub = imgSrc.subscribe(async (val) => {
			if (!$imgSrc || !$canvasElement || !$imgElement) {
				colors.set([]);
				return;
			}
			$imgElement.src = val;
			await new Promise((res) => ($imgElement.onload = res));
			$canvasElement.width = $imgElement.width;
			$canvasElement.height = $imgElement.height;

			const ctx = $canvasElement.getContext('2d');
			ctx.drawImage($imgElement, 0, 0, $imgElement.width, $imgElement.height);
			const pixels = ctx.getImageData(0, 0, $canvasElement.width, $canvasElement.height).data;
			$worker.postMessage({ pixels });
		});

		return () => {
			srcUnsub();
			$worker.terminate();
		};
	});
</script>

<Hero />
<ImageSection />
<OutputSection />
