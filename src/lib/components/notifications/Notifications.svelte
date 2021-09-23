<script lang="ts">
	import { notifications } from '$lib/stores/notificationsStore';
	import Portal from '../Portal.svelte';
	import NotificationToast from './NotificationToast.svelte';
</script>

<Portal>
	<div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-y-2">
		{#each $notifications as notification (notification.time)}
			<NotificationToast {notification} />
		{/each}
	</div>
</Portal>
