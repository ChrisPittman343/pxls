<script lang="ts">
	import { colorFormat, colorToTargetString } from '$lib/stores/colorsStore';
	import type { ColorFormat } from '$lib/types';
	import { copyToClipboard } from '$lib/utils/copyToClipboard';

	export let color: string;
	$: text = colorToTargetString(color, $colorFormat);

	const onClick = () => {
		copyToClipboard(text);
	};
</script>

<div class="relative h-10 w-1/2 lg:w-1/3 cursor-pointer group" on:click={onClick}>
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center h-10 w-full
				transition-transform duration-75 group-hover:scale-125 group-hover:z-10"
		style={`background-color: ${color};`}
	>
		<div class="text-white text-shadow text-[13px] font-mono">
			{text}
		</div>
	</div>
</div>
