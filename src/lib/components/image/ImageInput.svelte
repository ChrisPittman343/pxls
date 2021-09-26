<script lang="ts">
	import { imgSrc } from '$lib/stores/imageStore';

	const onSelect = (e) => {};
</script>

<label for="image url" class="w-full">
	<span>Image URL / Add img from files:</span>
	<input
		name="image url"
		spellcheck="false"
		bind:value={$imgSrc}
		class="p-2 w-full bg-gray-800 transition-colors outline-none focus:bg-gray-700 text-center rounded-lg"
		on:focus={(e) => {
			e.currentTarget.selectionStart = 0;
			e.currentTarget.selectionEnd = $imgSrc.length;
		}}
	/>
</label>
