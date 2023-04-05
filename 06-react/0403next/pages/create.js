import { useRouter } from "next/router";
import Layout from "../components/layout";

export default function Create() {
  const router = useRouter();
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

    fetch("http://localhost:9999/topics", {
      method: "POST",
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
        <h2>Create</h2>
        <p>
          <input type="text" name="title" placeholder="제목" />
        </p>
        <p>
          <textarea name="body" placeholder="본문"></textarea>
        </p>
        <p>
          <input type="submit" value="Create" />
        </p>
      </form>
    </>
  );
}
