/*  Create a small HTTP server using Node's HTTP module */

const http = require('http');

// create an HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
// Listen on port 1245
app.listen(1245);

module.exports = app;
