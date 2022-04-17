<script lang="ts">
	import { colorFormat } from '$lib/stores/colorsStore';
	import type { ColorFormat } from '$lib/types';

	export let format: ColorFormat;
	$: active = format === $colorFormat;
</script>

<button
	class:active
	class="px-5 py-1 rounded-full transition-colors hover:bg-slate-100 font-mono text-sm tracking-wider"
	on:click={() => colorFormat.set(format)}
>
	{format.toUpperCase()}
</button>

<style lang="postcss">
	.active {
		@apply !bg-slate-200;
	}
</style>
