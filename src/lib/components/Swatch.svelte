<script lang="ts">
	import { copyToClipboard } from '$lib/utils/copyToClipboard';

	export let color: string;
	const onClick = (color) => {
		copyToClipboard(color);
	};
</script>

<div class="relative h-8 w-[96px] cursor-pointer group" on:click={() => onClick(color)}>
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center h-8 w-[96px] transition-transform group-hover:scale-125 group-hover:z-10"
		style={`background-color: ${color};`}
	>
		<div class="text-white text-shadow text-sm font-mono">
			{color}
		</div>
	</div>
</div>
