<script>
	import { colors } from '$lib/stores/colorsStore';
	import Swatch from '../colorDisplay/Swatch.svelte';
</script>

<div class="max-w-[900px] w-full h-full flex flex-wrap justify-center">
	{#each $colors as color}
		<Swatch {color} />
	{/each}
</div>
