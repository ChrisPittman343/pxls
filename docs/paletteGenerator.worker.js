onmessage = ({ data: { pixels } }) => {
	const colors = {};
	for (let i = 4; i < pixels.length; i += 4) {
		const hex = rgbToHex(pixels.slice(i - 4, i));
		colors[hex] = colors[hex] ? colors[hex] + 1 : 1;
		if (Object.keys(colors).length > 80) {
			postMessage({
				colors: Object.keys(colors),
				error: {
					name: 'Too many colors in image!',
					type: 'error',
					time: Date.now()
				}
			});
			return;
		}
	}

	const sorted = Object.keys(colors);
	postMessage({ colors: sorted });
};

const rgbToHex = (rgba) =>
	'#' + componentToHex(rgba[0]) + componentToHex(rgba[1]) + componentToHex(rgba[2]);

const componentToHex = (c) => {
	const hex = c.toString(16);
	return hex.length == 1 ? '0' + hex : hex;
};
