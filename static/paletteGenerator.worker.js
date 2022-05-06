onmessage = ({ data: { pixels } }) => {
	const colors = new Map();

	// Add all unique colors (rgba) to map. Error out if 300+ found
	for (let i = 4; i < pixels.length; i += 4) {
		const rgba = pixels.slice(i - 4, i);
		if (!colors.has(rgba.join('-')))
			colors.set(rgba.join('-'), [rgba, rgba.reduce((prev, curr) => prev + curr, 0)]);
		if (colors.size >= 300) {
			postMessage({
				colors: Array.from(colors.values()).map(([rgb]) => rgbToHex(rgb)),
				error: {
					name: 'Too many colors in image! (300+)',
					type: 'error',
					time: Date.now()
				}
			});
			return;
		}
	}

	// Combine similar colors (lossy image protection)
	const minDistance = 10;
	const minifiedColors = Array.from(colors.values())
		.sort((a, b) => a[1] - b[1]) // Sort by rgba sum
		// Remove similar colors
		.filter((curr, i, arr) => {
			if (i !== 0) {
				const prev = arr[i - 1];
				if (Math.abs(prev[1] - curr[1]) < minDistance * 3) {
					// If every component in prev is too close to curr, remove curr
					return !prev[0].every((component, k) => Math.abs(component - curr[0][k]) < minDistance);
				}
			}
			return true;
		});

	// Return array of hex colors
	postMessage({ colors: minifiedColors.map(([rgb]) => rgbToHex(rgb)) });
};

const rgbToHex = (rgba) =>
	'#' + componentToHex(rgba[0]) + componentToHex(rgba[1]) + componentToHex(rgba[2]);

const componentToHex = (c) => {
	const hex = c.toString(16);
	return hex.length == 1 ? '0' + hex : hex;
};
