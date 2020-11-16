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
          Hey There! <code className={styles.codelarge}>I'm {data.name}</code>
        </h1>
        <h1 className={styles.title}>
          I'm a <code className={styles.codelarge}>{data.age}</code> years old {data.job}.
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
  // Get external data from the file system, API, DB, etc.
  const data = {
    name: 'John',
    age: 28,
    job: 'singer'
  }

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {data}
  }
}