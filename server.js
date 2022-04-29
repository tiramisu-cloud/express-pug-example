const app = require('./app.js')

const port = 3000

app.listen(port, () => {
	console.log(`express running on http://localhost:${port}`);
});