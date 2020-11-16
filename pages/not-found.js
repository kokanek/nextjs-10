
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function TestImage({data}) {
  console.log('props passed :', data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Testing code redirection!
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  let notFound = false;

  // perform some business logic here.
  // Got to know that the page need not show up
  notFound = true;

  return {
    notFound: notFound
  }
}