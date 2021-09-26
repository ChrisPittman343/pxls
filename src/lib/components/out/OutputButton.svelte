<script lang="ts">
	import { faFileExport } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import Tooltip from '../Tooltip.svelte';
</script>

<Tooltip tip={'Export'}>
	<button
		class="px-2 pl-3 py-2 rounded-md bg-gray-800 transition-colors hover:bg-gray-700 font-mono"
		on:click
	>
		<Fa icon={faFileExport} />
	</button>
</Tooltip>
