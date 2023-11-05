/*  Create a more complex HTTP server using Node's HTTP module */

const http = require('http');
const { countStudents } = require('./3-read_file_async.js');

const port = 1245;

const app = http.createServer((req, res) => {
  if(req.url === '/') {
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const data = countStudents(process.argv[2]);
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain');
    res.end(`This is the list of our students: ${data}\n`);
  } else {
    res.statusCode = 400;
    res.setHeader = ('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
