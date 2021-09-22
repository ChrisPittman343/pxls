/**
 * Converts an array of colors into csv format for copy and pasting purposes.
 *
 * @param colors array of colors in hex format
 * @param format representation of color (hex, rgb, etc.)
 * @returns a list of lines of csv formatted colors (color format of your choice)
 */
export const colorsToCSS = (
	colors: string[],
	format: 'hex' | 'hsv' | 'rgb' | 'rgba' = 'hex'
): string[] => {
	const out: string[] = [':root {'];
	for (let i = 0; i < colors.length; i++) {
		out.push(`\t--color-${i}: ${colors[i]};`);
	}
	out.push('}');
	return out;
};
