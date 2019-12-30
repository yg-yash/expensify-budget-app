const express = require("express");
const server = express();
const path = require("path");

const publicPath = path.join(__dirname, "..", "public");
const PORT = process.env.PORT || 3000;
server.use(express.static(publicPath));

server.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

server.listen(PORT, () => {
  console.log(`server is up on ${PORT}`);
});
