const express = require("express");
const bodyParser = require("body-Parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "홍길동",
      birthday: "921207",
      gender: "남자",
      job: "학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "나사랑",
      birthday: "321207",
      gender: "여자",
      job: "학생",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "최민수",
      birthday: "651103",
      gender: "남자",
      job: "배우",
    },
  ]);
});

app.listen(port, () => console.log(`${port} 포트로 작동 중입니다. `));
