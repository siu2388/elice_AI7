import React from "react";
import "./App.css";
import { Counter } from "./Counter";
function App() {
  return (
    <div className="App">
      <Counter title="카운터" initValue={0}></Counter>
    </div>
  );
}

export default App;
