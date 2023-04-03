import React, { useEffect, useState } from "react";

function Counter({ title }) {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const OPENAI_API_KEY =
      "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";

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `숫자와 가장 가까운 명사를 아래와 같이 알려줘. 

5:손가락
80: http 포트 번호
443 : https 포트 번호
50000000 : 대한민국 인구
${count} : `,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => setMsg(data.choices[0].message.content));
  }, [count]);

  //msg state
  const up = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={up}>+</button>
      {count} {msg}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter title="Counter" />
    </div>
  );
}

export default App;

/*
1.state값에 따라 count가 바뀔 때 서버가 응답하면 msg를 바꾸는 거였고 
2.useEffect를 사용하면 count를 감시하고 있다가 변경될 때마다 msg를 바꿀 수 있게 해준다.

*/
//useEffect  실행되는 체계를 좀 더 정교하게 다룰 필요가 있다. 
