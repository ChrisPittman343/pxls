import type { Notification } from '$lib/types';
import { writable } from 'svelte/store';

export const notifications = writable<Notification[]>([]);

export const removeNotification = (notification: Notification): void => {
	notifications.update((val) => {
		return val.filter((n) => n.time !== notification.time);
	});
};
