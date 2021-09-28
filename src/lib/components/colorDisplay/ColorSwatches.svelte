<script lang="ts">
	import { colors } from '$lib/stores/colorsStore';
	import { onMount } from 'svelte';
	import Swatch from '../colorDisplay/Swatch.svelte';
	import OutputButton from '../out/OutputButton.svelte';
	import ColorFormatSelect from './ColorFormatSelect.svelte';

	export let setOutputting: (val: boolean) => void;
	let element: HTMLElement;

	onMount(() =>
		colors.subscribe((cs) => {
			if (element && cs.length > 0) element.scrollIntoView({ behavior: 'smooth' });
		})
	);
</script>

<div class="flex flex-col justify-center items-center w-full gap-y-4 pt-3" bind:this={element}>
	<div class="w-full flex justify-between">
		<ColorFormatSelect />
		<OutputButton on:click={() => setOutputting(true)} />
	</div>
	<div class="w-full h-full flex flex-wrap justify-center">
		{#each $colors as color}
			<Swatch {color} />
		{/each}
	</div>
</div>
