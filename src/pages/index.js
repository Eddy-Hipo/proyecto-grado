import Head from "next/head";
import "antd/dist/antd.css";
import MainHeader from "@/components/MainHeader";
import InfoSection from "@/components/InfoSection";
import Foot from "@/components/Foot";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reportar Acoso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <InfoSection />
      <Foot />
    </div>
  );
}
