import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/common.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Transform</title>
        <meta name="description" content="Transform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Transform</span>
        </h1>

        <p className={styles.description}>Data visualization for transform.</p>

        <div className={styles.grid}>
          <a href="/transform" className={styles.card}>
            <h2>Playground &rarr;</h2>
            <p>Play it.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>For Developer.</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
