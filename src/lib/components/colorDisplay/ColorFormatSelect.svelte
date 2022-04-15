<script lang="ts">
	import { COLOR_FORMATS, type ColorFormat } from '$lib/types';

	import ColorFormatPill from './ColorFormatPill.svelte';

	const formats: ColorFormat[] = COLOR_FORMATS;
</script>

<div class="flex flex-wrap items-center gap-2 w-full">
	{#each formats as format}
		<ColorFormatPill {format} />
	{/each}
</div>
