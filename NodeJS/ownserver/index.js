const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello form the home side");
  } else if (req.url == "/about") {
    res.end("hello from the about");
  } else {
    // res.writeHead(404);
    // it makees the document type html not the document format
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("Page not found babua 404");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listing form the port number 8000");
});
