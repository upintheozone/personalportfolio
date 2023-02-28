import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/About.module.css'
import { motion } from "framer-motion"
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function About() {
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

  const aboutContent = {
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
        <title>About / Jia Rong</title>
        <meta name="description" content="About Jia Rong Hu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <motion.main animate={"show"} variants={container}>
        <div className={styles['about-content']} id="about-content">
          <div className={styles['about-content-grid']}>
            <div className={styles['about-content-text']}>
              <motion.h2 initial={"hidden"} animate={"show"} variants={headingText}>About Me</motion.h2>
              <motion.p initial={"hidden"} animate={"show"} variants={bodyText}>He/Him · 15 · BCIS '25 · Electronics Enthusiast · Hobbyist Designer</motion.p>
            </div>
            <motion.div className={styles['about-content-description']} initial={"hidden"} animate={"show"} variants={aboutContent}>
              <p>Hi there! My name is Jia Rong Hu (Chinese: 胡家榕). I'm currently international school student living and studying in Beijing, China as a high school sophomore.</p>

              <p>I have a strong passion for design and electronics. I love tinkering with what I own, and using skills that I learn to summarize and create interesting products. I enjoy brainstorming how something can be improved and finding ways to bring those solutions to life.</p>

              <p>I'm highly motivated and always interested to learn new skills, technologies, and knowledge that can help me develop my ideas and projects. I'm always on the lookout for ways to challenge myself and expand my knowledge.</p>

              <p>I take the initiative to lead and support projects and activities that I believe can change the world and inspire the future.</p>

              <p>I'm excited to explore opportunities that will allow me to continue learning, growing, and making an impact.</p>
            </motion.div>
          </div>
        </div>
      </motion.main> 
    </>
  )
}