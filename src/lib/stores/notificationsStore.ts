import type { Notification } from '$lib/types';
import { writable } from 'svelte/store';

export const notifications = writable<Notification[]>([]);
