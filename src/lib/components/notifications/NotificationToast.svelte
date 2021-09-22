<script lang="ts">
	import type { Notification } from '$lib/types';
	import Fa from 'svelte-fa/src/fa.svelte';
	import {
		faBomb,
		faExclamationTriangle,
		faCheck,
		faTimes
	} from '@fortawesome/free-solid-svg-icons';
	import { fly } from 'svelte/transition';
	import { notifications } from '$lib/stores/notificationsStore';

	export let notification: Notification;
	let className = notification.type;

	const icon = {
		success: faCheck,
		warning: faExclamationTriangle,
		error: faBomb
	};

	const close = () => {
		notifications.update((val) => {
			return val.filter((n) => n.time === notification.time);
		});
	};
</script>

<div
	in:fly={{ duration: 250, y: 300 }}
	class="relative flex items-center px-6 py-4 rounded-md border-2 z-50"
	class:success={notification.type === 'success'}
	class:warning={notification.type === 'warning'}
	class:error={notification.type === 'error'}
>
	<Fa class="pr-4 text-xl" icon={icon[notification.type]} />
	<h1 class="font-bold tracking-wide">{notification.name}</h1>
	<button
		class="absolute top-1 right-1 transition-opacity opacity-50 hover:opacity-100"
		on:click={close}
	>
		<Fa icon={faTimes} />
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
