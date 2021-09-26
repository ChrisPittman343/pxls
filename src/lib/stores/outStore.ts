import type { OutputFormat } from '$lib/types';
import { writable } from 'svelte/store';

export const outputFormat = writable<OutputFormat>('CSS');

/**
 * `"{i}"` = iterator value (starting at 0),
 * `"{c}"` = color (current color format)
 */
export const customRule = writable<string>('{i}. {c} = rgb({0}, {1}, {2}) if RGB');
