import "@/styles/globals.css";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  console.log("_app");
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
