<script lang="ts">
	import { outputFormat } from '$lib/stores/outStore';
	import { faTimes } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';
	import ColorFormatSelect from '../colorDisplay/ColorFormatSelect.svelte';
	import CustomRuleInput from './CustomRuleInput.svelte';
	import OutputFormatSelect from './OutputFormatSelect.svelte';
	import OutText from './OutText.svelte';

	export let exit: () => void;
</script>

<div class="relative p-10 max-h-[80%] flex flex-col items-center gap-y-6 bg-gray-900 rounded-xl">
	<OutputFormatSelect />
	{#if $outputFormat === 'Custom'}
		<CustomRuleInput />
	{/if}
	<ColorFormatSelect />
	<OutText />
	<button
		class="absolute top-3 right-3 transition-opacity opacity-50 hover:opacity-100"
		on:click={exit}
	>
		<Fa icon={faTimes} size="lg" />
	</button>
</div>
