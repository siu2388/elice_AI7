import React, {useEffect, useState} from 'react';


//useToggle
//토글 되었을 때 (활성화) -> 버튼 내 텍스트를 Toggled
//비활성화 -> 버튼 내 텍스트를 Click!


// hook이란? 어떤 함수? 상태값 생성, 관리, 사용 함수 .. 자주 쓸 것 같아서 빼논 함수 

const useToggle = () => {

}


export default funtcion useToggle() {
  const [toggle, setToggle] =useState(false);


  const handelClick =()=> {
    setToggle((toggle)=> {!toggle})
  }

  return (
    <div className="App">
  <button>{toggle ? "Toggled" : "Click" }</button>
  </div>)
}