<script lang="ts">
	import { colorFormat } from '$lib/stores/colorsStore';
	import type { FormatOption } from '$lib/types';

	export let format: FormatOption;
	$: active = format === $colorFormat;
</script>

<button
	class:active
	class="px-5 py-1 rounded-full bg-gray-800 transition-colors hover:bg-gray-700 font-mono text-sm tracking-wider"
	on:click={() => colorFormat.set(format)}
>
	{format.toUpperCase()}
</button>

<style lang="postcss">
	.active {
		@apply !bg-white text-black;
	}
</style>
