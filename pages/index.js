import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Peace Clinic!</a>
        </h1>

        <div className={styles.grid}>
          <a href="/api/v1/doctors" className={styles.card}>
            <h3>Doctors &rarr;</h3>
            <p>Search doctors !</p>
          </a>

          <a href="/api/v1/clinics" className={styles.card}>
            <h3>Clinics &rarr;</h3>
            <p>Search clinics !</p>
          </a>

          <a
            href="/api/v1/specializations"
            className={styles.card}
          >
            <h3>Specializations &rarr;</h3>
            <p>Find consultants !</p>
          </a>

          <a
            target="_blank"
            href="https://www.facebook.com/Democracy-Clinic-342009636965974"
            className={styles.card}
          >
            <h3>Follow Us &rarr;</h3>
            <p>
              Checkout latest updates !
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}
