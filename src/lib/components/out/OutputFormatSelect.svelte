<script>
	import { OUTPUT_FORMATS } from '$lib/types';
	import OutputFormatPill from './OutputFormatPill.svelte';
</script>

<div class="flex items-center w-full gap-x-2">
	{#each OUTPUT_FORMATS as format}
		<OutputFormatPill {format} />
	{/each}
</div>
