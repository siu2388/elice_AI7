import React, { useState } from "react";

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
  //react css 입히는 법 
  const design={
    border:'5px solid red',
    backgroundColor:'lightgray'
  }
  return (
    <div style={design}>
      <h1>{title}</h1>
      <button onClick={up}>+</button> {count}
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
