import React, { useState } from "react";

// state와 event핸들링 이용해서 사용자가 입력한 값을 콘솔에 찍어보기
// Form 의 submit 이벤트가 발생되면 부모 컴포넌트로 그 데이터 전달하기

//onInsert라는 이벤트 핸들링 함수를 props로 전달 받음
const InsertForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit =(event)=> {
    event.preventDefault();

    if(typeof onInsert === 'function') {
      onInsert(inputValue); 
    }

    setInputValue('');  //inputValue초기화로 비워줌

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button>등록</button>
    </form>
  );
};

export default InsertForm;