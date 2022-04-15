import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		prerender: {
			default: true
		},
		// paths: {
		// 	base: '/pxls'
		// },
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		})
	}
};

export default config;
