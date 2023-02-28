import Head from 'next/head'
import styles from '@/styles/FourOhFour.module.css'
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>404 / Jia Rong</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles['four-content']}>
          <div className={styles['four-center']}>
            <h1>404 :(</h1>
              <h2>
                Looks like there's nothing here...<br />
                Click <Link href="/">here</Link> to go back home.
              </h2>
          </div>
        </div>
      </main>
    </>
  )
}