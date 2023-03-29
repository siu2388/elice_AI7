import React, { useState } from "react";
import "./App.css";
import counterStyle from "./Counter.module.css";
console.log("counterStyle", counterStyle);

function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  console.log("Counter", count);
  function up() {
    setCount(count + 1);
    console.log("up", count);
    // setCount((oldCount) => {
    //   console.log("oldCount", oldCount);
    //   return oldCount + 1;
    // });
  }
  // //react css 입히는 법 div={design} 사용
  const design = {
    border: "5px solid red",
    backgroundColor: "lightgray",
  };
  return (
    <div style={design}>
      <h1 className="title">{title}</h1>
      <button onClick={up} className={counterStyle.rightSpace}>
        +
      </button>{" "}
      {count}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter title="카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;
