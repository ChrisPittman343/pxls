import { notifications } from '$lib/stores/notificationsStore';
import type { Notification } from '$lib/types';

export const copyToClipboard = (data: string): void => {
	let notif: Notification;

	navigator.clipboard
		.writeText(data)
		.then(() => {
			notif = {
				name: 'Copied to clipboard!',
				type: 'success',
				time: Date.now()
			};
		})
		.catch(() => {
			notif = {
				name: 'Failed to copy to clipboard!',
				type: 'error',
				time: Date.now()
			};
		})
		.finally(() => {
			// Once the promise resolves or rejects, update the notifications store with the appropriate message
			notifications.update((value) => {
				return [notif, ...value];
			});
		});
};
