<script lang="ts">
	import GenerateButton from '$lib/components/GenerateButton.svelte';
	import ImageDisplay from '$lib/components/image/ImageDisplay.svelte';
	import ImageInput from '$lib/components/image/ImageInput.svelte';
	import { colors } from '$lib/stores/colorsStore';
	import { imgSrc } from '$lib/stores/imageStore';
	import { onMount } from 'svelte';
	import ColorSwatches from '$lib/components/colorDisplay/ColorSwatches.svelte';
	import ColorFormatSelect from '$lib/components/colorDisplay/ColorFormatSelect.svelte';
	import OutputButton from '$lib/components/out/OutputButton.svelte';
	import ScreenFade from '$lib/components/ScreenFade.svelte';
	import ColorOutputModal from '$lib/components/out/ColorOutputModal.svelte';

	let worker: Worker;
	let canvas: HTMLCanvasElement;
	let img: HTMLImageElement;
	let outputting = false;
	let val: HTMLDivElement;

	onMount(() => {
		const srcUnsub = imgSrc.subscribe((val) => {
			if (img) img.src = val;
		});

		worker = new Worker('/paletteGenerator.worker.js');
		worker.onmessage = (e) => colors.set(e.data.colors);

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
		canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
		const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
		worker.postMessage({ pixels });
	};

	colors.subscribe(() => {
		if (val) setTimeout(() => val.scrollIntoView({ behavior: 'smooth' }), 500);
	});

	const exit = () => {
		outputting = false;
	};
</script>

<main class="flex flex-col items-center max-w-7xl w-full">
	<div class="flex flex-col items-center gap-y-4 min-h-screen">
		<div class="flex w-full items-end gap-x-4">
			<ImageInput />
			<GenerateButton on:click={onClick} />
		</div>
		<ImageDisplay />
	</div>
	<div class="flex flex-col justify-center items-center w-full gap-y-4" bind:this={val}>
		{#if $colors.length}
			<div class="w-full flex justify-between">
				<ColorFormatSelect />
				<OutputButton on:click={() => (outputting = true)} />
			</div>
			<ColorSwatches />
			<ScreenFade {exit} shown={outputting}>
				<ColorOutputModal {exit} />
			</ScreenFade>
		{/if}
	</div>
</main>
