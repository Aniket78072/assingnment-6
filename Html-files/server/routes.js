// routes.js
// Handles routing logic and serving HTML files

const fs = require("fs");
const path = require("path");

// Helper function to serve HTML files
function serveFile(res, filename, statusCode = 200) {
  fs.readFile(path.join(__dirname, filename), (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>500 - Internal Server Error</h1>");
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

module.exports = {
  "/": (req, res) => serveFile(res, "home.html"),
  "/home": (req, res) => serveFile(res, "home.html"),
  "/about": (req, res) => serveFile(res, "about.html"),
  "/contact": (req, res) => serveFile(res, "contact.html"),
  "/404": (req, res) => serveFile(res, "404.html", 404),
};
