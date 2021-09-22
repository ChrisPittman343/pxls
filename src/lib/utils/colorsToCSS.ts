/**
 * Converts an array of colors into css code for copy and pasting purposes.
 *
 * @param colors array of colors in hex format
 * @param format representation of color (hex, rgb, etc.)
 * @returns a list of lines of css, each containing a --var + the color type of your choice (First + last are brackets)
 */
export const colorsToCSS = (
	colors: string[],
	format: 'hex' | 'hsv' | 'rgb' | 'rgba' = 'hex'
): string[] => {
	const out: string[] = [':root {'];
	for (let i = 0; i < colors.length; i++) {
		out.push(`--color-${i}: ${colors[i]};`);
	}
	out.push('}');
	return out;
};
