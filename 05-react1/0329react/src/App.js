import React from "react";
import "./App.css";
import { Counter } from "./Counter";
// import useToggle from "./useToggle";

import InsertForm from "./InsertForm";

function App() {
  return (
    <div className="App">
      <Counter title="카운터" initValue={0}></Counter>
      {/* <useToggle /> */}

      <InsertForm
        onInsert={(todo) => {
          console.log("todo 👀 ", todo);
        }}
      />
    </div>
  );
}

export default App;
