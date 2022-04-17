<script lang="ts">
	import { COLOR_FORMATS } from '$lib/types';

	import ColorFormatPill from './ColorFormatPill.svelte';
</script>

<div class="flex flex-wrap items-center gap-2 w-full">
	<span class="font-semibold"> Color format: </span>
	{#each COLOR_FORMATS as format}
		<ColorFormatPill {format} />
	{/each}
</div>
