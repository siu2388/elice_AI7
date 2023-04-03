import Link from 'next/link';
export default function Home(props) {
  console.log('props', props)
  return (
    <>
      <h1>
        <Link href="/">WEB</Link>
      </h1>
      <ol>
        <li>
          <Link href="/read/1">HTML</Link>{" "}
        </li>
        <li>
          <Link href="/read/2">CSS</Link>
        </li>
        <li>
          <a href="/read/3">JavaScript</a>
        </li>
      </ol>
      <article>
        {props.children}
      </article>
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
