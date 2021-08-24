const express = require("express");
const bodyParser = require("body-Parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send("안녕");
});

app.listen(port, () => console.log(`${port} 포트로 작동 중입니다. `));
