import express from 'express';
import cors from 'cors';
import { env } from 'process';
import { json } from 'body-parser';

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
	res.send(req.body.url);
	// Fetch initial image
	// Create color palette from img
	// Make png file from color palette
	// Generate color ramp as a matrix or some shit
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}.`);
});
