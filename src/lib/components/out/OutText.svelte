<script lang="ts">
	import { colorFormat, colors } from '$lib/stores/colorsStore';

	import { customRule, outputFormat } from '$lib/stores/outStore';
	import { colorsToOutput } from '$lib/utils/colorsToOutput';
	import { copyToClipboard } from '$lib/utils/copyToClipboard';
	import { onMount } from 'svelte';

	// The dumbest way to subscribe a value to multiple stores...
	$: lines = $outputFormat && $colorFormat && $colors && $customRule ? colorsToOutput() : [];
</script>

<div
	class="relative p-5 bg-black min-w-[500px] min-h-[200px] max-h-[500px] overflow-y-scroll rounded-lg font-mono"
>
	{#each lines as ln, i}
		<div class="relative pl-12">
			{ln}

			<div class="absolute left-0 top-0 opacity-20 w-4 text-right select-none">
				{i + 1}
			</div>
		</div>
	{/each}

	<button
		class="absolute top-3 right-3 px-[11px] py-2 rounded-md bg-gray-800 transition-colors hover:bg-gray-700"
		on:click={() => copyToClipboard(lines.join('\n'))}
	>
		Copy
	</button>
</div>
