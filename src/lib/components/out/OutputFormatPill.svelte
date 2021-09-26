<script lang="ts">
	import { outputFormat } from '$lib/stores/outStore';
	import type { OutputFormat } from '$lib/types';

	export let format: OutputFormat;
	$: active = format === $outputFormat;
</script>

<button
	class:active
	class="px-5 py-1 rounded-full bg-gray-800 transition-colors hover:bg-gray-700 font-mono text-sm tracking-wider"
	on:click={() => outputFormat.set(format)}
>
	{format.toUpperCase()}
</button>

<style lang="postcss">
	.active {
		@apply !bg-white text-black;
	}
</style>
