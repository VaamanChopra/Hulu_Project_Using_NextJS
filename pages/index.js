import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>

      </Head>
      <Header />
      <Nav />
    </div>
  );
}
