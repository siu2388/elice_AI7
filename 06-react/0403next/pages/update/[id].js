import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Update() {
  const router = useRouter();
  // const [topic, setTopic] = useState({ title: "", body: "" });
  //title, body로 state변경
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  console.log("router", router.query.id); //id값 가져오기
  //useEffect(파라미터 함수,언제실행될까)
  //fetch
  useEffect(() => {
    if (router.query.id !== undefined) {
      fetch("http://localhost:9999/topics/" + router.query.id)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setBody(data.body);
          console.log("data", data);
        });
    }
  }, [router.query.id]);

  const handler = (event) => {
    event.preventDefault();
    console.log(event.target.title.value);
    const title = event.target.title.value;
    const body = event.target.body.value;
    //title, body 값을 json으로 바꾼뒤  localhost:9999/topics로 post메소드로 서버로 전송해야함
    const data = {
      title: title,
      body: body,
    };

    fetch("http://localhost:9999/topics/" + router.query.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        //쓴 글 확인하기
        const last_id = result.id;
        // /read/last_id로 이동시키면(redirect) 쓴 글을 읽을 수 있음
        router.push("/read/" + last_id);
      });
  };
  return (
    <>
      <form onSubmit={handler}>
        <h2>Update</h2>
        <p>
          <input
            type="text"
            name="title"
            placeholder="제목"
            value={title}
            onChange={(e) => {
              console.log(e.target.value);
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="본문"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Update" />
        </p>
      </form>
    </>
  );
}
