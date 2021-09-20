onmessage = ({ data: { pixels } }) => {
	const colors = new Set();
	for (let i = 4; i < pixels.length; i += 4) {
		colors.add(toHex(pixels.slice(i - 4, i)));
	}
	postMessage(Array.from(colors));
};

const toHex = (rgba) =>
	'#' + componentToHex(rgba[0]) + componentToHex(rgba[1]) + componentToHex(rgba[2]);

const componentToHex = (c) => {
	const hex = c.toString(16);
	return hex.length == 1 ? '0' + hex : hex;
};
