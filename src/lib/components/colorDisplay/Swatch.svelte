<script lang="ts">
	import { colorFormat, colorToTargetString } from '$lib/stores/colorsStore';
	import { copyToClipboard } from '$lib/utils/copyToClipboard';
	import colorConvert from 'color-convert';
	const { hex } = colorConvert;

	export let color: string;
	$: text = colorToTargetString(color, $colorFormat);
	$: textColor = hex.hsl(color)[2] >= 80 ? 'black' : 'white';

	const onClick = () => {
		copyToClipboard(text);
	};
</script>

<div
	on:click={onClick}
	class="grid place-items-center h-12 lg:h-14 w-1/2 sm:w-1/3 lg:w-1/5 cursor-pointer min-w-[100px]"
	style={`background-color: ${color};`}
>
	<div class="text-shadow text-xs lg:text-sm font-mono" style={`color: ${textColor};`}>
		{text}
	</div>
</div>
