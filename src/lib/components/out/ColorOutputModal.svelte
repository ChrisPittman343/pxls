<script lang="ts">
	import { outputFormat } from '$lib/stores/outStore';
	import ColorFormatSelect from '../colorDisplay/ColorFormatSelect.svelte';
	import CustomRuleInput from './CustomRuleInput.svelte';
	import OutputFormatSelect from './OutputFormatSelect.svelte';
	import OutText from './OutText.svelte';
	import { Icon } from 'svelte-awesome';
	import close from 'svelte-awesome/icons/close';

	export let exit: () => void;
</script>

<div
	class="relative p-10 flex flex-col items-center gap-y-6 bg-white rounded shadow-lg max-w-2xl max-h-[90%] w-full"
>
	<ColorFormatSelect />
	<OutputFormatSelect />
	{#if $outputFormat === 'Custom'}
		<CustomRuleInput />
	{/if}
	<OutText />
	<button
		class="absolute top-3 right-3 transition-opacity opacity-50 hover:opacity-100"
		on:click={exit}
	>
		<Icon data={close} />
	</button>
</div>
