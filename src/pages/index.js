import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { motion } from "framer-motion"
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Home() {
  const container = {
    show: {
        transition: {
            staggerChildren: 5,
            delayChildren: 1,
        },
    },
  }
  
  const headingText = {
    hidden: {
        y: -15, //move out of the site
        opacity: 0,
    },
    show: {
        y: 0, // bring it back to nrmal
        opacity: 1,
        transition: {
          delay:0.3,
          duration: 0.8,
          ease: "easeOut",
      },
    },
  };

  const bodyText = {
    hidden: {
        y: 10, //move out of the site
        opacity: 0,
    },
    show: {
        y: 0, // bring it back to nrmal
        opacity: 1,
        transition: {
          delay:0.5,
          duration: 0.8,
          ease: "easeOut",
      },
    },
  };

  const projectsContent = {
    hidden: {
        y: 10, //move out of the site
        opacity: 0,
    },
    show: {
        y: 0, // bring it back to nrmal
        opacity: 1,
        transition: {
          delay:0.8,
          duration: 0.8,
          ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Jia Rong Hu / HS Student</title>
        <meta name="description" content="Jia Rong Hu is a HS Student currently studying as a sophomore at BCIS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <motion.main animate={"show"} variants={container}>
        <div className={styles['hero-content']} id="hero-content">
          <div className={styles['hero-center']}>
            <motion.h1 initial={"hidden"} animate={"show"} variants={headingText}><span className={styles['hero-line']}>Hi, I'm</span> <span className={styles['hero-line']}><span className={styles['hero-emphasis']}>Jia Rong Hu</span> 👋.</span></motion.h1>
            <motion.div initial={"hidden"} animate={"show"} variants={bodyText}>
              <p>A high school student interested in <span className={styles['hero-emphasis']}>💻 CS</span> and <span className={styles['hero-emphasis']}>✨ design</span>. </p>
              <p>I've worked on a variety of aspiring and innovative <span className={styles['hero-emphasis']}>💡 projects</span> with my peers within and outside the school environment. I focus on projects that I strongly believe will <span className={styles['hero-emphasis']}>⚙️ change the world</span> and inspire a <span className={styles['hero-emphasis']}>🔆 bright future</span> ahead. </p>
              <p>I am constantly motivated to take on <span className={styles['hero-emphasis']}>🚪 new opportunities</span> and to learn and <span className={styles['hero-emphasis']}>🌱 grow</span> from unique experiences. <Link href="/about"><span className={styles['about-link-text']}>Read More</span> <span className={styles['about-link-arrow']}>→</span></Link></p>
            </motion.div>
          </div>
        </div>
        <motion.div initial={"hidden"} animate={"show"} variants={projectsContent}>
          <div className={styles['section-intro']}>
              <h3 className={styles['section-intro-title']}>Work</h3>
              <span className={styles['section-intro-filler']}></span>
              <h3 className={styles['section-intro-title']}>↓</h3>
          </div>
          <div className={styles['project-content']} id="project-content">
            <div className={styles['project-grid']}>
              <div className={styles['project-overview'] + " " + styles['project-large']} id="project-solar-panel">
                <Link target="_blank" href="https://www.bcis.cn/about/news/nnews/data_260.html">
                  <div className={styles['project-overview-image']}><img alt="Solar Panel Project" src="assets/images/cover-solar-panel.webp" /></div>
                  <div className={styles['project-overview-grid']}>
                    <h3 className={styles['project-title']}>BCIS Solar Panel Project</h3>
                    <p className={styles['project-description']}>Proposal for sustainable energy in school greenhouse.</p>
                  </div>
                </Link>
              </div>

              <div className={styles['project-overview']} id="project-stem-kit">
                <Link href="/work/stem-kit">
                  <div className={styles['project-overview-image']}><img alt="STEM Kit Project" src="assets/images/cover-stem-kit.webp" /></div>
                  <div className={styles['project-overview-grid']}>
                      <h3 className={styles['project-title']}>Hydroponics STEM Kit</h3>
                      <p className={styles['project-description']}>DIY STEM Kit for a young audience on Hydroponics.</p>
                  </div>
                </Link>
              </div>

              <div className={styles['project-overview']} id="project-hydroponics">
                <Link target="_blank" href="https://www.bcis.cn/about/news/nnews/data_30.html">
                  <div className={styles['project-overview-image']}><img alt="Hydroponics Project" src="assets/images/cover-hydroponics.webp" /></div>
                  <div className={styles['project-overview-grid']}>
                    <h3 className={styles['project-title']}>Hydroponics System</h3>
                    <p className={styles['project-description']}>Self designed multi layered efficient farming system.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={'blank-filler'}></div>

        <div className={styles['section-intro']}>
            <h3 className={styles['section-intro-title']}>Play</h3>
            <span className={styles['section-intro-filler']}></span>
            <h3 className={styles['section-intro-title']}>↓</h3>
        </div>

        <div className={styles['project-content']} id="project-content">
          <div className={styles['project-grid']}>

            <div className={styles['project-overview']} id="play-1">
              <Link href="/play/1">
                <div className={styles['project-overview-image']}>
                  <img alt="play1" src="assets/images/placeholder-2.jpeg" />
                </div>
                <div className={styles['project-overview-grid']}>
                    <h3 className={styles['project-title']}>Combat Robotics</h3>
                    <p className={styles['project-description']}>Meticulously crafted miniature death machines.</p>
                </div>
              </Link>
            </div>

            <div className={styles['project-overview']} id="play-2">
              <Link href="/play/2">
                <div className={styles['project-overview-image']}>
                  <img alt="play2" src="assets/images/placeholder-2.jpeg" />
                </div>
                <div className={styles['project-overview-grid']}>
                  <h3 className={styles['project-title']}>Random Gadgets</h3>
                  <p className={styles['project-description']}>Improving the small, annoying aspects of life.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </motion.main> 
    </>
  )
}