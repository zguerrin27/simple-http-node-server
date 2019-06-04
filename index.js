const fs  = require('fs');
const http = require('http');
const port = 3000;

// Handle HTTP request
const requestHandler = (req, res) => {
  res.write('Hello from port 3000');
  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if (err) throw err;
    console.log('success');
  });
  res.end();
};

// Create a server and pass in the requestHandler function
const server = http.createServer(requestHandler);

// Start the server listening on port 8000
server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});