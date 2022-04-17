import { colors as cols } from '$lib/stores/colorsStore';
import { get } from 'svelte/store';

/**
 * Downloads the current color palette in PNG format.
 * Each pixel (16px = 1 canvas px) is one color.
 */
export const downloadPalette = (): void => {
	const colors = get(cols);
	const [canvas, ctx, link] = getHTMLElements();

	// Set canvas + brush size
	const pixelSize = 1;
	canvas.width = colors.length * pixelSize;
	canvas.height = pixelSize;
	ctx.lineWidth = pixelSize;

	// Paint colors
	let cursor = 0;
	colors.forEach((color) => {
		ctx.fillStyle = color;
		ctx.fillRect(cursor, 0, pixelSize, pixelSize);
		cursor += pixelSize;
	});

	downloadCanvas(canvas, link);
};

const getHTMLElements = (): [HTMLCanvasElement, CanvasRenderingContext2D, HTMLAnchorElement] => {
	const canvas = document.createElement('canvas');
	const link = document.createElement('a');

	link.download = 'palette.png';
	link.href = '/';

	return [canvas, canvas.getContext('2d'), link];
};

// Not my doing, taken from: https://stackoverflow.com/questions/12796513/html5-canvas-to-png-file
const downloadCanvas = (canvas: HTMLCanvasElement, link: HTMLAnchorElement) => {
	let dt = canvas.toDataURL('image/png');

	/* Change MIME type to trick the browser to downlaod the file instead of displaying it */
	dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');

	/* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
	dt = dt.replace(
		/^data:application\/octet-stream/,
		'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=palette.png'
	);

	link.href = dt;
	link.click();
};
