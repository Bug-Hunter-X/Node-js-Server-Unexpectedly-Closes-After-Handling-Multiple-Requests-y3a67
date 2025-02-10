const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

// Handle uncaught exceptions to prevent server crash
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

// Handle unhandled rejections to prevent server crash
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Optional: Add error listeners to the server
server.on('error', (err) => {
  console.error('Server error:', err);
});

//Optional: Add close listener to the server
server.on('close', () => {
  console.log('Server closed');
});