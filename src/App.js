import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
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
];
class App extends Component {
  render() {
    return (
      <div className="gray-background">
        <div>안녕!</div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
