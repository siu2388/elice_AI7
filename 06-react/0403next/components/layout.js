export default function Home(props) {
  console.log('props', props)
  return (
    <>
      <h1>
        <a href="/">WEB</a>
      </h1>
      <ol>
        <li>
          <a href="/read/1">HTML</a>{" "}
        </li>
        <li>
          <a href="/read/2">CSS</a>
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
          <a href="/create">Create</a>
        </li>
        <li>
          <a href="/update">Update</a>
        </li>
        <li>
          <a href="/delete">Delete</a>
        </li>
      </ul>
    </>
  );
}
