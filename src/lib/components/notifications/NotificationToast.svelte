<script lang="ts">
	import type { Notification } from '$lib/types';

	import { fly, fade } from 'svelte/transition';
	import { removeNotification } from '$lib/stores/notificationsStore';
	import { onMount } from 'svelte';

	export let notification: Notification;

	// const icon = {
	// 	success: faCheck,
	// 	warning: faExclamationTriangle,
	// 	error: faBomb
	// };

	onMount(() => {
		return setTimeout(() => {
			removeNotification(notification);
		}, 3 * 1000);
	});

	const close = () => {
		removeNotification(notification);
	};
</script>

<div
	in:fly={{ duration: 350, y: 500 }}
	out:fade={{ duration: 350 }}
	class="relative flex items-center px-6 py-4 pr-8 rounded-md border-2 pointer-events-auto"
	class:success={notification.type === 'success'}
	class:warning={notification.type === 'warning'}
	class:error={notification.type === 'error'}
>
	<h1 class="font-bold tracking-wide">{notification.name}</h1>
	<button
		class="absolute top-1 right-1 transition-opacity opacity-50 hover:opacity-100"
		on:click={close}
	>
		x
	</button>
</div>

<style lang="postcss">
	.success {
		@apply bg-green-100 border-green-300 text-green-600;
	}

	.warning {
		@apply bg-yellow-100 border-yellow-300 text-yellow-600;
	}

	.error {
		@apply bg-red-100 border-red-300 text-red-600;
	}
</style>
