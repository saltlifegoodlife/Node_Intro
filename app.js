const http = require("http");
const PORT = 5000;

http
  .createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/html" });
    response.write("hello this request worked");
    response.end();
  })
  .listen(PORT, () => {
    console.log(`server is listening at local host ${PORT} port`);
  });
