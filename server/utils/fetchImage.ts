import axios from 'axios';

export async function fetchImage(url: string): Promise<void> {
	try {
		// const res = await axios(url);
		// console.log(res);
		// const img = res.data.blob();
		// console.log(img);
		axios.get(url).then((res) => {
			const buffer = Buffer.from(res.data);
			const uint = Uint8Array.from(buffer).buffer;
			return console.log(uint);
		});
	} catch (err) {
		console.log('ERROR:', err);
	}
}
