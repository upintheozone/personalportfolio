import '@/styles/globals.css'
// import Layout from '../components/layout'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return(
    <>
      <NavigationBar />
      <main className={'content'}>
        <AnimatePresence mode="wait"  >
        {/* initial={false} */}
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
        <Footer />
      </main>
      {/* <Script src="luxy.js" strategy="beforeInteractive" /> */}
      <Script src="random.js" />
    </>
  )
}
