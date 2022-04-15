<script lang="ts">
	import GenerateButton from '$lib/components/GenerateButton.svelte';
	import ImageDisplay from '$lib/components/image/ImageDisplay.svelte';
	import ImageInput from '$lib/components/image/ImageInput.svelte';
	import { colors } from '$lib/stores/colorsStore';
	import { imgSrc } from '$lib/stores/imageStore';
	import { onMount } from 'svelte';
	import ColorSwatches from '$lib/components/colorDisplay/ColorSwatches.svelte';
	import ScreenFade from '$lib/components/ScreenFade.svelte';
	import ColorOutputModal from '$lib/components/out/ColorOutputModal.svelte';
	import { notifications } from '$lib/stores/notificationsStore';

	let worker: Worker;
	let canvas: HTMLCanvasElement;
	let img: HTMLImageElement;
	let outputting = false;

	onMount(() => {
		const srcUnsub = imgSrc.subscribe((val) => {
			if (img) img.src = val;
		});

		worker = new Worker('/paletteGenerator.worker.js');
		worker.onmessage = (e) => {
			if (e.data.error) notifications.set([e.data.error, ...$notifications]);
			colors.set(e.data.colors);
		};

		canvas = document.createElement('canvas');
		img = document.createElement('img');
		img.src = $imgSrc;
		img.crossOrigin = 'Anonymous';

		return () => {
			srcUnsub();
			worker.terminate();
		};
	});

	const onClick = (e) => {
		if (!worker) return;
		canvas.width = img.width;
		canvas.height = img.height;
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0, img.width, img.height);
		const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
		worker.postMessage({ pixels });
	};

	const exit = () => {
		outputting = false;
	};

	const setOutputting = (val: boolean) => (outputting = val);
</script>

<div class="flex flex-col items-center gap-y-4 min-h-screen w-4/5">
	<div class="flex w-full items-end gap-x-4">
		<ImageInput />
		<GenerateButton on:click={onClick} />
	</div>
	<ImageDisplay />
</div>
{#if $colors.length}
	<ColorSwatches {setOutputting} />
	<ScreenFade {exit} shown={outputting}>
		<ColorOutputModal {exit} />
	</ScreenFade>
{/if}
