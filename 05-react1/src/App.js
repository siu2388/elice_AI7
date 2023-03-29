import React, { useState } from "react";
// function Counter(props) {
//   console.log("data:", props.title);
//   const title = props.title;
//   const initValue = props.initValue;

function Counter({ title, initValue }) {
  let countState = useState(initValue);
  let count = countState[0];
  let setCount = countState[1];
  console.log("count", count);
  function up() {
    console.log("up");
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={up}>+</button> 😁 {count}
    </div>
  );
}

function Counter2({ title, initValue }) {
  // let countState = useState(10);
  // const count = countState[0];
  // const setCount = countState[1];

  const [count, setCount] = useState(initValue);
  function up() {
    setCount(count + 1);
  }
  function down() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={up}>+</button>🙄 {count}
      <button onClick={down}>-</button>🙄 {count}
    </div>
  );
}

function App() {
  return (
    <div>
      {/* 문자열 제외한 숫자같은 자료는 {}로 묶어서 보내면 된다 */}
      <Counter2 title="멋지다 김시유"></Counter2>

      <Counter title="불면증 카운터" initValue={10}></Counter>
      <Counter title="전역일 카운터" initValue={20}></Counter>
    </div>
  );
}

export default App;
