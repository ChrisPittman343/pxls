<script lang="ts">
	import { colors } from '$lib/stores/colorsStore';
	import { canvasElement, imgElement, imgSrc, worker } from '$lib/stores/imageStore';
	import { onMount } from 'svelte';
	import { notifications } from '$lib/stores/notificationsStore';
	import ImageSection from '$lib/components/ImageSection.svelte';
	import OutputSection from '$lib/components/OutputSection.svelte';

	onMount(() => {
		worker.set(new Worker('/paletteGenerator.worker.js'));
		$worker.onmessage = (e) => {
			if (e.data.error) notifications.set([e.data.error, ...$notifications]);
			colors.set(e.data.colors);
		};

		canvasElement.set(document.createElement('canvas'));
		imgElement.set(document.createElement('img'));
		$imgElement.crossOrigin = 'Anonymous';

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

<ImageSection />
<OutputSection />
