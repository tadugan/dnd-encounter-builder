const express = require('express');
const { json, urlencoded } = require('body-parser');
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// Route Requires
// TODO: const someRouter = require('./path/to/router');

// PORT
const PORT = process.env.PORT || 5000;

// Listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
