// server.js
// Import required modules
const http = require("http");
const fs = require("fs");
const path = require("path");
const routes = require("./routes");

// Define port
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Extract the route handler from routes.js
  const handler = routes[req.url] || routes["/404"];
  handler(req, res);
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
