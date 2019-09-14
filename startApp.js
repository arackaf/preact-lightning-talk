import express from "express";
const app = express();
import path from "path";

app.use("/dist/", express.static(__dirname + "/dist/"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(3000);

export default null;
