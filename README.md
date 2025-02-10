# Node.js Server Unexpectedly Closes

This repository demonstrates a bug where a Node.js HTTP server unexpectedly closes after handling a certain number of requests. The issue is likely due to resource exhaustion, unhandled exceptions, or improper event handling.

## Bug Description
The server starts and responds correctly to several initial requests. However, after a certain load, the server abruptly terminates without any clear error messages in the console.  This makes debugging challenging.

## How to reproduce
1. Clone the repository.
2. Run `node server.js`.
3. Send multiple requests to the server (e.g., using a load testing tool like k6 or even multiple browser tabs).
4. Observe that the server closes unexpectedly after a certain number of requests.

## Solution
The `server-fixed.js` file provides a solution that addresses the server's unexpected termination.  The fix may involve improving resource management, proper exception handling, or meticulous event listener cleanup.