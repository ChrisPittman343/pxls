<script lang="ts">
	import Portal from './Portal.svelte';
	import { fade } from 'svelte/transition';

	export let shown: boolean;
	export let exit: () => void;
</script>

<Portal>
	{#if shown}
		<div
			transition:fade={{ duration: 300 }}
			class="absolute top-0 left-0 w-full h-full grid place-items-center bg-slate-800/30 z-20 pointer-events-auto"
			on:click|self={exit}
		>
			<slot />
		</div>
	{/if}
</Portal>
