<script lang="ts">
	import { notifications } from '$lib/stores/notificationsStore';
	import Portal from '$lib/components/popup/Portal.svelte';
	import NotificationToast from './NotificationToast.svelte';
</script>

<Portal>
	<div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-col gap-y-2">
		{#each $notifications.slice(0, 3) as notification (notification.time)}
			<NotificationToast {notification} />
		{/each}
	</div>
</Portal>
