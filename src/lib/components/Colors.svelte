<script>
	import { colors } from '$lib/stores/colorsStore';
	import { colorsToCSS } from '$lib/utils/colorsToCSS';
	import { copyToClipboard } from '$lib/utils/copyToClipboard';
	import Swatch from './Swatch.svelte';
</script>

<div>
	<div class="flex flex-wrap content-start">
		{#each $colors as color}
			<Swatch {color} />
		{/each}
	</div>
	<!-- {#if $colors.length > 0}
		<div class="flex flex-col">
			{#each colorsToCSS($colors) as ln}
				<div class="">{ln}</div>
			{/each}
		</div>
	{/if} -->
</div>
