import express from 'express';
import cors from 'cors';
import { env } from 'process';
import { json } from 'body-parser';
import { fetchImage } from './utils/fetchImage';
import { generatePalette } from './utils/generatePalette';

const app = express();
const port = 8080;

app.use(
	cors({
		origin: env.NODE_ENV ? 'https://actualurl.com' : 'http://localhost:3000',
		methods: 'POST',
		optionsSuccessStatus: 200
	})
);

app.use(json());

app.post('/palette', (req, res) => {
	const { url } = req.body;
	if (!url) {
		res.statusCode = 400;
		res.send('Must include an image URL with the request.');
	}

	const img = fetchImage(req.body.url);
	const palette = generatePalette(img);
	// Make png file from color palette
	// Generate color ramp as a matrix or some shit
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}.`);
});
