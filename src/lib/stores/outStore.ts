import type { OutputFormat } from '$lib/types';
import { writable } from 'svelte/store';

export const outputFormat = writable<OutputFormat>('CSS');
export const customRule = writable<string>('{i}. {c} = rgb({0}, {1}, {2}) if RGB');
