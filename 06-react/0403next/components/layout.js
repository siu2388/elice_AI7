import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
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

  return (
    <>
      <h1>
        <Link href="/">WEB</Link>
      </h1>
      <ol>{lis}</ol>
      <article>{children}</article>
      <ul>
        <li>
          <Link href="/create">Create</Link>
        </li>
        <li>
          <Link href="/update">Update</Link>
        </li>
        <li>
          <Link href="/delete">Delete</Link>
        </li>
      </ul>
    </>
  );
}
