<script lang="ts">
	import type { Notification } from '$lib/types';
	import { fly, fade } from 'svelte/transition';
	import { removeNotification } from '$lib/stores/notificationsStore';
	import { onMount } from 'svelte';

	export let notification: Notification;

	onMount(() => {
		return setTimeout(() => {
			removeNotification(notification);
		}, 2 * 1000);
	});
</script>

<div
	in:fly={{ duration: 350, y: 500 }}
	out:fade={{ duration: 350 }}
	class="flex items-center px-6 py-4 rounded-md border-2 shadow-md bg-white pointer-events-auto"
	class:success={notification.type === 'success'}
	class:warning={notification.type === 'warning'}
	class:error={notification.type === 'error'}
>
	<h1 class="font-semibold">{notification.name}</h1>
</div>

<style lang="postcss">
	.success {
		@apply border-green-400;
	}

	.warning {
		@apply border-yellow-400;
	}

	.error {
		@apply border-red-400;
	}
</style>
