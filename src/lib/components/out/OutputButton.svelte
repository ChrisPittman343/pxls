<script lang="ts">
	import { faFileExport } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import Tooltip from '../Tooltip.svelte';
</script>

<Tooltip tip={'Export'}>
	<button
		class="px-3 pl-4 py-3 rounded-md bg-gray-800 transition-colors hover:bg-gray-700 font-mono"
		on:click
	>
		<Fa icon={faFileExport} size="lg" />
	</button>
</Tooltip>
