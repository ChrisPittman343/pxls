<script lang="ts">
	import { onMount } from 'svelte';

	const src = '/images/blockworld.png';
	let colors = [];
	let worker: Worker;
	let canvas: HTMLCanvasElement;
	let img: HTMLImageElement;

	onMount(() => {
		worker = new Worker('/paletteGenerator.worker.js');
		worker.onmessage = (e) => (colors = e.data);

		canvas = document.createElement('canvas');
		img = document.createElement('img');
		img.crossOrigin = 'Anonymous';
		img.src = src;

		return () => worker.terminate();
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

<img {src} class="max-w-md" alt="Blockworld by Some guy" />
<button on:click={onClick}>Generate palette</button>
<div class="flex flex-wrap">
	{#each colors as color}
		<div class="h-10 min-w-[128px] grid place-items-center" style={`background-color: ${color};`}>
			<div class="contrast-200 text-shadow" style={`color: ${'white'};`}>
				{color}
			</div>
		</div>
	{/each}
</div>
