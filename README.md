# express-pug-example
node express server with pug templates hosted on tiramisu.cloud

```bash
npm init -y
```

Install express
```bash
npm install express --save
```

Create app.js file
```bash
touch app.js
```

Add the following code in app.js
```js
// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send('Hello, World!');
});

module.exports = app
```

Add a file server.js

```bash
touch server.js
```

Add the following code to server.js

```javascript
const app = require('./app.js')

const port = 3000

app.listen(port, () => {
	console.log(`express running on http://localhost:${port}`);
});
```

Add the following a start script to package.json
```json
  ...
  "scripts": {
    "start": "node server.js"
  },
  ...
```

You can run the server at with
```bash
npm start
```

You can stop the server running in the terminal by pressing:
Ctrl+C on Windows
CMD+C on macOS

Install Pug
```bash
npm install pug --save
```

Create folder views
```bash
mkdir views
```

Add a file index.pug inside of /views
```bash
cd views
touch views.js
```

Add the following code to /views/index.pug
```pug
doctype=html
html
	head
		title Express.js + Pug
	body
		h1 Welcome to Express.js + Pug
```

Change app.js to the following code to use pug views:
```javascript
const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

module.exports = app
```

Install serverless-express
```bash
npm install @vendia/serverless-express --save
```

add file handler.js at the root of the project
```bash
touch handler.js
```

with the following content
```js
// handler.js
const serverlessExpress = require('@vendia/serverless-express')
const app = require('./app.js')

module.exports = {
  default: serverlessExpress({
    app,
  })
}
```
