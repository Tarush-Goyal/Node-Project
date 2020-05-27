require('newrelic');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<h1>Type something</h1>');
  // res.write('<form method="POST"><input type="text" name="message" placeholder="type here"><button type="submit">Send</button></form>')
  // res.end();
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
