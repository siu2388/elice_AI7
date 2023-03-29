import React, { useEffect, useState } from "react";
import "./App.css";
import counterStyle from "./Counter.module.css";
// console.log("counterStyle", counterStyle);

function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  console.log("Counter", count);

  //서버에서 데이터 가져오기
  //npx json-server --port 9999 --watch db.json
  //useEffect(첫번째자리함수,[빈배열]) -컴포넌트 렌더링할 때 딱 한번만 실행이된다 -> 빈 배열 // 빈 배열 안주면 렌더링 될때마다 계속 실행된다.
  //서버통신, 파일저장, 언제끝날지 모르는 작업을 useEffect 훅안에 넣어주면 된다.

  useEffect(() => {
    fetch("http://localhost:9999/counter")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setCount(result.value);
      });
  }, []);

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
      <Counter title="카운터" initValue={0}></Counter>
    </div>
  );
}

export default App;
