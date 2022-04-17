<script lang="ts">
	import { colorFormat, colorToTargetString } from '$lib/stores/colorsStore';

	import { canvasElement, imgHoverLocation, screenHoverLocation } from '$lib/stores/imageStore';
	import { copyToClipboard } from '$lib/utils/copyToClipboard';
	import { onMount } from 'svelte';
	import Portal from './popup/Portal.svelte';

	$: showing = !!$imgHoverLocation || !!$screenHoverLocation;

	$: color =
		$canvasElement && $imgHoverLocation
			? colorToTargetString(
					rgbToHex(
						$canvasElement
							.getContext('2d')
							.getImageData($imgHoverLocation[0], $imgHoverLocation[1], 1, 1)
							.data.slice(0, 4)
					),
					$colorFormat
			  )
			: '#fff';

	const rgbToHex = (rgba: ArrayLike<number>) =>
		'#' + componentToHex(rgba[0]) + componentToHex(rgba[1]) + componentToHex(rgba[2]);

	const componentToHex = (component: number) => {
		const hex = component.toString(16);
		return hex.length == 1 ? '0' + hex : hex;
	};

	onMount(() => {
		document.onclick = () => {
			if (!showing) return;
			copyToClipboard(color);
		};
	});
</script>

<Portal>
	{#if showing}
		<div
			class="p-2 rounded flex items-center shadow absolute z-50 bg-white"
			style={`left: ${$screenHoverLocation[0] + 3}px; top: ${$screenHoverLocation[1] - 97}px;`}
		>
			<div class="w-6 h-6 rounded" style={`background-color: ${color};`} />
			<span class="pl-2 font-mono text-sm">{color}</span>
		</div>
	{/if}
</Portal>

<!-- 
	Esentially, the size of the canvas is the ACTUAAL size of the image.
	However, the image is not necessarily that same size. There is a shrink factor.


 -->
<style lang="postcss">
</style>
