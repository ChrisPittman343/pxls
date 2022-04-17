<script lang="ts">
	import { fade } from 'svelte/transition';

	export let tip: string;
	export let disabled = false;
	let hovered: boolean;
</script>

<slot />

<!-- Bug: since the parent div is relative, it will cause issues in flexbox.Remove from doc flow somehow??? -->
<div
	class="relative w-min h-min"
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	{#if hovered && !disabled}
		<div
			in:fade={{ delay: 400, duration: 250 }}
			out:fade={{ delay: 100, duration: 100 }}
			class="px-4 py-2 absolute left-1/2 -top-1 -translate-x-1/2 -translate-y-full
			 	bg-white rounded-md font-mono text-sm w-max z-50 pointer-events-none text-black"
		>
			<div id="tail" />
			{tip}
		</div>
	{/if}
</div>

<style lang="postcss">
	#tail {
		--w: 10px;
		@apply absolute w-2 h-2 bottom-1 left-1/2 -translate-x-1/2 translate-y-full;
		border-left: var(--w) solid transparent;
		border-right: var(--w) solid transparent;
		border-top: var(--w) solid white;
	}
</style>
