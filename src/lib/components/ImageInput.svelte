<script lang="ts">
	import { imgSrc } from '$lib/stores/imageStore';
	import { onMount } from 'svelte';

	onMount(() => {
		return imgSrc.subscribe(async (src) => {
			const res = await fetch(src);
		});
	});

	const onSelect = (e) => {};
</script>

<label for="image url" class="w-full">
	<span>Image URL / Add img from files:</span>
	<input
		name="image url"
		bind:value={$imgSrc}
		class="p-2 w-full bg-gray-800 text-center rounded-lg"
		on:focus={(e) => {
			e.currentTarget.selectionStart = 0;
			e.currentTarget.selectionEnd = $imgSrc.length;
		}}
	/>
</label>
