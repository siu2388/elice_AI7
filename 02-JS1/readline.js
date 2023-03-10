//콘솔에서 값 입 출력
//1.readline module
//자바스크립트에 내장된 모듈 , 콘솔 창에서 한 줄씩 입출력 처리 할수 있다.

//2. 모듈 불러오기
//'readline'모듈을 require를 통해 불러와서 readline이라는 변수에 저장
const readline = require('readline');


//3. readline interface 객체 만들기
// by. createInterface()메서드 이용해 객체 만들고, rl변수에 저장해준다. 
//readline interface객체를 이용해 콘솔에서 표준 입출력 처리 가능
const rl = readline.createInterface(
  {input: process.stdin,
  output: process.stdout}
);

//4. on메서드 
//생성한 rl객체로 입출력 관련 여러 이벤트를 처리할 수 있다. 
//(생성자가 콘솔에 입력을 넣는것)
//on메서드를 이용하면 이벤트가 발생할 때 실행할 동작을 지정할 수 있다. 

//5.line 이벤트 
//사용자가 콘솔에 입력할 때 line 이벤트가 발생 
//입력 이벤트는 입력 스트림에 줄바꿈을 나타내는 \n, \r, \r\n 제어문자가 나타나거나,
//사용자가 엔터 또는 리턴 을 누를 떄 발생

//사용자가 입력 이벤트를 발생시키면, x변수를 통해 입력내용이 저장되고, 콘솔에 출력된다.

rl.on('line', function(x) {
  console.log(x)
});

//6. close이벤트
//'close'이벤트는 readable 스트림 종료를 제어하는 이벤트이며, line이벤트와 비슷한 형태로 작성
// 더이상 입력받을 것이 없을 때 rl.close(); 호출하여 발생.
.on('close', function() {});

//따라서, line이벤트와 함께 사용된다. 

rl.on('line', function(x) {
  console.log(x);
  rl.close();  //입력종료
}).on('close', function(){
  process.exit();
  //입력 종료 후 동작할 코드
})

// //es6의 화살표 함수를 사용하면 아래처럼 변형할 수도 있다. 

// const readline = require('readline');

// const rl = readline.createInterface(
//   {
//     input: process.stdin,
//     output: process.stdout
//   }
// );

// rl.on('line', (x) => {
//   console.log(x);
//   rl.close;
// }).on('close', () => {
//   process.exit();
// });

