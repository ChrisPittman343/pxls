<script>
	import { validSrc } from '$lib/stores/imageStore';
</script>

<button
	disabled={!$validSrc}
	class="px-4 py-2 tracking-wider h-min font-mono transition-colors bg-blue-500 hover:bg-blue-600 rounded-md
	disabled:grayscale disabled:cursor-not-allowed"
	on:click
>
	Generate
</button>
