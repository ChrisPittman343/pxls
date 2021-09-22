/**
 *
 * @param colors array of colors in hex form
 * @param rule
 */
export const colorsToCustom = (colors: string[], rule: string): string => {
	let out = '';
	for (let i = 0; i < colors.length; i++) {
		const ln = rule.replace('{c}', colors[i]).replace('{i}', i.toString());
		out += ln;
	}
	return out;
};
