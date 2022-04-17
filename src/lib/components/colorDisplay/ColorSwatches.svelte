<script lang="ts">
	import { colors } from '$lib/stores/colorsStore';
	import PrimaryButton from '../buttons/PrimaryButton.svelte';
	import Swatch from '../colorDisplay/Swatch.svelte';
	import ColorFormatSelect from './ColorFormatSelect.svelte';
	import Icon from 'svelte-awesome';
	import output from 'svelte-awesome/icons/file-text';
	import download from 'svelte-awesome/icons/download';
	import { downloadPalette } from '$lib/utils/downloadPalette';

	export let setOutputting: (val: boolean) => void;
</script>

<div class="flex flex-col justify-center items-center gap-y-4 pt-3 w-full">
	<div class="w-full flex justify-between pb-4">
		<ColorFormatSelect />
		<PrimaryButton on:click={() => setOutputting(true)}>
			Text Output
			<Icon data={output} />
		</PrimaryButton>

		<div class="w-4" />
		<PrimaryButton on:click={downloadPalette}>
			Download PNG
			<Icon data={download} />
		</PrimaryButton>
	</div>
	<div class="w-full h-full flex flex-wrap">
		{#each $colors as color}
			<Swatch {color} />
		{/each}
	</div>
</div>
