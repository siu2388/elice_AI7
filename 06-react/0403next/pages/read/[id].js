import { useRouter } from "next/router";
import Layout from "../../components/layout";

export default function Read() {
  const router = useRouter();
  console.log("router", router.query.id); //id값 가져오기
  return (
    <>
      <h2>Read</h2>
      Hello, Read{router.query.id}
    </>
  );
}
