import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import Container from "@mui/material/Container";

export default function Layout({ children }) {
  const [topics, setTopics] = useState([]);
  const router = useRouter();
  console.log("router", router.asPath);
  useEffect(() => {
    fetch("http://localhost:9999/topics")
      .then((resp) => resp.json())
      .then((result) => {
        console.log("result :", result);
        setTopics(result);
      });
  }, [router.asPath]);
  // console.log("props", props);
  const lis = topics.map((t) => {
    return (
      <li key={t.id}>
        <Link href={"/read/" + t.id}>{t.title}</Link>
      </li>
    );
  });
  let contextUI = null;
  if (router.query.id !== undefined) {
    contextUI = (
      <>
        <li>
          <Link href={`/update/${router.query.id}`}>Update</Link>
        </li>
        <li>
          <button
            onClick={(e) => {
              fetch("http://localhost:9999/topics/" + router.query.id, {
                method: "DELETE",
              })
                .then((response) => response.json())
                .then((result) => {
                  const last_id = result.id;
                  router.push("/");
                  console.log("delete complete");
                });
            }}
          >
            Delete
          </button>
        </li>
      </>
    );
  }

  return (
    <Container maxWidth="md">
      <h1>
        <Link href="/">WEB</Link>
      </h1>
      <ol>{lis}</ol>
      <article>{children}</article>
      <ul>
        <li>
          <Link href="/create">Create</Link>
        </li>
        {contextUI}
      </ul>
    </Container>
  );
}
