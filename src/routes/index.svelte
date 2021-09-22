<script lang="ts">
	import Colors from '$lib/components/Colors.svelte';
	import GenerateButton from '$lib/components/GenerateButton.svelte';
	import ImageDisplay from '$lib/components/ImageDisplay.svelte';
	import ImageInput from '$lib/components/ImageInput.svelte';
	import { colors } from '$lib/stores/colorsStore';
	import { imgSrc } from '$lib/stores/imageStore';
	import { onMount } from 'svelte';

	let worker: Worker;
	let canvas: HTMLCanvasElement;
	let img: HTMLImageElement;

	onMount(() => {
		worker = new Worker('/paletteGenerator.worker.js');
		worker.onmessage = (e) => colors.set(e.data);

		canvas = document.createElement('canvas');
		img = document.createElement('img');
		img.src = $imgSrc;
		img.crossOrigin = 'Anonymous';
		return () => worker.terminate();
	});

	imgSrc.subscribe((val) => {
		if (img) img.src = val;
	});

	const onClick = (e) => {
		if (!worker) return;
		canvas.width = img.width;
		canvas.height = img.height;
		canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
		const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
		worker.postMessage({ pixels });
	};
</script>

<div class="grid grid-cols-2 gap-x-20 max-w-7xl w-full">
	<div class="flex flex-col items-center gap-y-4">
		<div class="flex items-end gap-x-4">
			<ImageInput />
			<GenerateButton on:click={onClick} />
		</div>
		<ImageDisplay />
	</div>
	<Colors />
</div>
