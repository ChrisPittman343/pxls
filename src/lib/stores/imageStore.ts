import { writable, derived } from 'svelte/store';

// export const worker = writable<Worker>();
// export const canvas = writable<HTMLCanvasElement>(document.createElement('canvas'));

// const i = document.createElement('img');
// i.crossOrigin = 'Anonymous';

// export const img = writable<HTMLImageElement>(i);

export const imgSrc = writable<string>(
	'https://pbs.twimg.com/media/E_ptnm9XEAQ8huT?format=png&name=orig'
);

export const validSrc = derived(
	imgSrc,
	(url, setValid) => {
		setValid(false);
		fetch(url)
			.then((res) => res.blob())
			.then((data) => {
				setValid(data.type === 'image/png');
			})
			.catch(() => {
				return;
			});
	},
	false
);
