<script lang="ts">
	import { colors as cols } from '$lib/stores/colorsStore';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let cursor = 0;
	$: ctx = canvas && canvas.getContext('2d');
	const pixelSize = 8;

	onMount(() => {
		return cols.subscribe((colors) => {
			if (!colors.length) return;
			canvas.width = colors.length * pixelSize;
			canvas.height = pixelSize;
			ctx.lineWidth = pixelSize;
			colors.forEach(drawColor);
		});
	});

	// Paint one pixel of color on the canvas, incrementing the cursor afterwards
	const drawColor = (color: string) => {
		ctx.fillStyle = color;
		ctx.fillRect(cursor, 0, pixelSize, pixelSize);
		cursor += pixelSize;
	};
</script>

<div class="sr-only">
	<a download="Canvas.png" href="/">{' '}</a>
	<canvas bind:this={canvas} />
</div>

<style lang="postcss">
	canvas {
		image-rendering: pixelated;
		image-rendering: crisp-edges;
	}
</style>
