<script lang="ts">
	import { colors } from '$lib/stores/colorsStore';

	import { onMount } from 'svelte';
	import ColorSwatches from './colorDisplay/ColorSwatches.svelte';
	import ColorOutputModal from './out/ColorOutputModal.svelte';
	import ScreenFade from './popup/ScreenFade.svelte';

	let section: HTMLElement;
	let outputting = false;

	onMount(() =>
		colors.subscribe(async (cols) => {
			if (!cols.length) return;

			await new Promise((res) => {
				setTimeout(res, 150);
			});
			section.scrollIntoView({ behavior: 'smooth' });
		})
	);

	const exit = () => {
		outputting = false;
	};
	const setOutputting = (val: boolean) => (outputting = val);
</script>

<section id="palette-output" bind:this={section} class="m-4 mt-16 py-8">
	{#if $colors.length}
		<div class="text-2xl opacity-50">{$colors.length} color palette</div>
		<ColorSwatches {setOutputting} />
		<ScreenFade {exit} shown={outputting}>
			<ColorOutputModal {exit} />
		</ScreenFade>
	{:else}
		<span class="text-2xl opacity-50">Once you select an image, the palette will appear here.</span>
	{/if}
</section>
