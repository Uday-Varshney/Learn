const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  // it only loads the page one time not repeatly
  const data = fs.readFileSync("./userapi/userapi.json", "utf-8");
  const objData = JSON.parse(data);
  // console.log(`this is the ${objData}`);

  if (req.url == "/") {
    res.end("Hello form the home side");
  } else if (req.url == "/about") {
    res.end("hello from the about");
  } else if (req.url == "/userapi") {
    res.writeHead("200", { "content-type": "application/json" });
    res.end(objData[0].name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("Page not found babua 404");
    // res.write("Page not found babua 404 sab apne baap ki bapauti h be");
  }
});

// the main use of the ip is not writing local host on the url.
server.listen(8000, "127.0.0.1", () => {
  console.log("listing form the port number 8000");
});
