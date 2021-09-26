const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				min: 'min-content'
			}
		}
	},
	plugins: []
};

module.exports = config;
