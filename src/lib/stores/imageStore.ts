import { writable } from 'svelte/store';

export const worker = writable<Worker>();

export const canvasElement = writable<HTMLCanvasElement>();

/**
 * The hidden image that gets loaded into the canvas. Is NOT the displayed image users can hover (See ImageSection.svelte).
 */
export const imgElement = writable<HTMLImageElement>();
export const imgSrc = writable<string>();
// 'https://pbs.twimg.com/media/FQeLCDbWQAcs_91?format=png&name=medium'

export const screenHoverLocation = writable<[number, number]>();
export const imgHoverLocation = writable<[number, number]>();

// export const validSrc = derived(
// 	imgSrc,
// 	(url, setValid) => {
// 		setValid(false);
// 		fetch(url)
// 			.then((res) => res.blob())
// 			.then((data) => setValid(data.type === 'image/png' || data.type === 'image/jpeg'))
// 			.catch();
// 	},
// 	false
// );
