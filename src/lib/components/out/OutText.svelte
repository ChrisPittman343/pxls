<script lang="ts">
	import { colorFormat, colors } from '$lib/stores/colorsStore';

	import { customRule, outputFormat } from '$lib/stores/outStore';
	import { colorsToOutput } from '$lib/utils/colorsToOutput';
	import { copyToClipboard } from '$lib/utils/copyToClipboard';
	import { faClipboard } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa/src/fa.svelte';

	// The dumbest way to subscribe a value to multiple stores...
	$: lines = $outputFormat && $colorFormat && $colors && $customRule ? colorsToOutput() : [];
</script>

<div
	class="relative p-5 bg-black min-w-[500px] min-h-[200px] max-h-[500px] overflow-y-scroll rounded-lg font-mono"
>
	{#each lines as ln}
		<div>{ln}</div>
	{/each}

	<button
		class="absolute top-3 right-3 px-[11px] py-2 rounded-md bg-gray-800 transition-colors hover:bg-gray-700"
		on:click={() => copyToClipboard(lines.join('\n'))}
	>
		<Fa icon={faClipboard} />
	</button>
</div>
