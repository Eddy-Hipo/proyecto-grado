import Head from "next/head";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import Routes from "@/constants/routes";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! KAISER</a>
        </h1>
        <Button type="primary">Iniciar sesión </Button>
        <a href={Routes.LOGIN} className={styles.card}>
          <p>iniciar sesión</p>
        </a>
        <a href={Routes.ABOUT} className={styles.card}>
          <p>Acerca de</p>
        </a>
        <a href={Routes.PRIVACY} className={styles.card}>
          <p>Privacidad</p>
        </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
