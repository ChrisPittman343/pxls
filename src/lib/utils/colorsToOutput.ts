import { colorFormat, colors, colorToTargetString } from '$lib/stores/colorsStore';
import { customRule, outputFormat } from '$lib/stores/outStore';
import type { OutputFormat } from '$lib/types';
import { hex } from 'color-convert';
import { get } from 'svelte/store';

export const colorsToOutput = (outFormat?: OutputFormat): string[] => {
	const cs = get(colors);
	if (!outFormat) outFormat = get(outputFormat);

	switch (outFormat) {
		case 'CSS':
			return colorsToCSS(cs);
		case 'CSV':
			return colorsToCSV(cs);
		case 'Custom':
			return colorsToCustom(cs, get(customRule));
		case 'PNG':
			return colorsToPNG(cs);
	}
};

/**
 * Converts an array of colors into css code for copy and pasting purposes.
 *
 * @param colors array of colors in hex format
 * @returns a list of lines of css, each containing a --var + the color type of your choice (First + last are brackets)
 */
const colorsToCSS = (colors: string[]): string[] => {
	const out: string[] = [];
	for (let i = 0; i < colors.length; i++) {
		out.push(`--c${i}: ${colorToTargetString(colors[i])};`);
	}
	return out;
};

/**
 *
 * @param colors array of colors in hex form
 * @param rule
 */
const colorsToCustom = (colors: string[], rule: string): string[] => {
	const out: string[] = [];
	for (let i = 0; i < colors.length; i++) {
		let ln = rule.replace('{c}', colorToTargetString(colors[i])).replace('{i}', i.toString());

		// Component support so you can do {0} {1} {2}
		if (get(colorFormat) !== 'hex') {
			const components = hex[get(colorFormat).toLowerCase()](colors[i]);
			ln = ln
				.replace('{0}', components[0])
				.replace('{1}', components[1])
				.replace('{2}', components[2]);
		}
		out.push(ln);
	}
	return out;
};

/**
 * Converts an array of colors into csv format.
 *
 * @param colors array of colors in hex format
 * @returns a list of lines of csv formatted colors (color format of your choice)
 */
const colorsToCSV = (colors: string[]): string[] => {
	const out: string[] = [];
	for (let i = 0; i < colors.length; i++) {
		out.push(`${colorToTargetString(colors[i])},`);
	}
	return out;
};

const colorsToPNG = (colors: string[]): string[] => {
	return colorsToCSS(colors);
};
