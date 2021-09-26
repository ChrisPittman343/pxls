<script lang="ts">
	import { imgSrc } from '$lib/stores/imageStore';
</script>

<!-- Possible to make color hovered in image light up on color display? -->
<div class="">
	<img class="max-h-[600px] max-w-full w-auto h-auto rounded-xl" src={$imgSrc} alt="" />
</div>
