<script lang="ts">
	import { onMount } from 'svelte';

	let portalChildren: HTMLDivElement;

	onMount(() => {
		// Already in app.html, guaranteed to exist
		const portal = document.getElementById('portal');

		// Don't care about wrapper elements, everything in portals is absolute anyway
		portal.appendChild(portalChildren);
	});
</script>

<div bind:this={portalChildren}>
	<slot />
</div>
