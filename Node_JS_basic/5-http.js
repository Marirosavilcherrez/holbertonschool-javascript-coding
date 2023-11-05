/*  Create a more complex HTTP server using Node's HTTP module */

const http = require('http');
const { countStudents } = require('./3-read_file_async.js');

const port = 1245;

const app = http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead = (200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const data = countStudents(process.argv[2]);
    res.writeHead = (200, {'Content-Type': 'text/plain'});
    res.end(`This is the list of our students: ${data}`);
  } else {
    res.writeHead = (400, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});
app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
});

module.exports = app;
