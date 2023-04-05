import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { useEffect, useState } from "react";

export default function Read() {
  const router = useRouter();
  const [topic, setTopic] = useState({ title: "", body: "" });
  console.log("router", router.query.id); //id값 가져오기
  //useEffect(파라미터 함수,언제실행될까)
  //fetch
  useEffect(() => {
    if (router.query.id !== undefined) {
      fetch("http://localhost:9999/topics/" + router.query.id)
        .then((res) => res.json())
        .then((data) => {
          setTopic(data);
          console.log("data", data);
        });
    }
  }, [router.query.id]);
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
