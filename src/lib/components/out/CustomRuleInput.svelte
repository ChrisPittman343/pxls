<script lang="ts">
	import { customRule } from '$lib/stores/outStore';
</script>

<div class="w-full">
	<input
		class="p-2 w-full bg-slate-100 transition-colors outline-none focus:bg-slate-50 text-center rounded-lg"
		bind:value={$customRule}
		type="text"
		name="custom rule input"
		spellcheck="false"
	/>
	<div class="text-gray-600 text-sm">
		<span>{'{i}'}</span> = color index (starts at 0)
		<br />
		<span>{'{c}'}</span> = color (currently selected format)
		<br />
		<span>{'{0}'}</span>, <span>{'{1}'}</span>, and <span>{'{2}'}</span> correspond to RGB, HSV, and
		HSL components.
	</div>
</div>

<style lang="postcss">
	span {
		@apply font-semibold font-mono;
	}
</style>
