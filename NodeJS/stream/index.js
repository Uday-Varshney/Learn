const fs = require("fs");
const http = require("http");

const server = http.createServer();

// its read the file this is not streaming.
// server.on("request", (req, res) => {
//   fs.readFile("input.txt", (err, data) => {
//     if (err) return console.log(err);
//     res.end(data.toString());
//   });
// });

// live stream
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");
  // rstream.on("data", (chunkdata) => {
  //   res.write(chunkdata);
  // });
  // rstream.on("end", () => {
  //   res.end();
  // });
  // rstream.on("error", (err) => {
  //   console.log(err);
  //   res.end("page not found");
  // });
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
