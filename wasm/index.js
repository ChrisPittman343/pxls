/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const loader = require('@assemblyscript/loader');

const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + '/build/optimized.wasm'), {
	utils: {
		log(message) {
			console.log(message);
		}
	}
});

module.exports = wasmModule.exports;
