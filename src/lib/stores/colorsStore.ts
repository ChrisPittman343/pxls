import { writable, get } from 'svelte/store';
import colorConvert from 'color-convert';
import type { ColorFormat } from '$lib/types';

const { hex } = colorConvert;

const format = (s: string, vals: any[]): string => {
	for (let i = 0; i < vals.length; i++) s = s.replace(`{${i}}`, vals[i]);
	return s;
};

export const colorToTargetString = (c: string, targetFormat?: ColorFormat): string => {
	if (!targetFormat) targetFormat = get(colorFormat);

	switch (targetFormat) {
		case 'hex':
			return c;
		case 'rgb':
			return format('rgb({0}, {1}, {2})', hex.rgb(c));
		case 'hsv':
			return format('hsv({0}, {1}%, {2}%)', hex.hsv(c));
		case 'hsl':
			return format('hsl({0}, {1}%, {2}%)', hex.hsl(c));
		default:
			return c;
	}
};

/**
 * Array of colors in hex form (really easy to convert to all other formats)
 */
export const colors = writable<string[]>([]);
colors.subscribe((cols) => {
	cols.sort((a, b) => {
		return hex.hsv(b)[0] - hex.hsv(a)[0];
	});
});
export const colorFormat = writable<ColorFormat>('hex');
