/* Create a small HTTP server using Express */

const express = require('express');

// create an instance of Express
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245, () => {
    console.log('The app works in http://localhost:1245')
});

module.exports = app;
