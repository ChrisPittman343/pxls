<script lang="ts">
	import { colorFormat, colors } from '$lib/stores/colorsStore';
	import { customRule, outputFormat } from '$lib/stores/outStore';
	import { colorsToOutput } from '$lib/utils/colorsToOutput';
	import { copyToClipboard } from '$lib/utils/copyToClipboard';
	import { Icon } from 'svelte-awesome';
	import copy from 'svelte-awesome/icons/copy';

	// The dumbest way to subscribe a value to multiple stores...
	$: lines = $outputFormat && $colorFormat && $colors && $customRule ? colorsToOutput() : [];
</script>

<div
	class="relative p-5 bg-slate-50 w-full min-h-[200px] max-h-[500px] overflow-y-scroll rounded-lg font-mono"
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
		class="absolute top-3 right-3 px-3 py-1.5 rounded-md bg-blue-500 transition-colors hover:bg-blue-600 text-white font-semibold"
		on:click={() => copyToClipboard(lines.join('\n'))}
	>
		Copy
		<Icon data={copy} />
	</button>
</div>
