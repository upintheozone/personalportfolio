import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion"

import styles from './Footer.module.css'

const pageVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  }
};

const Footer = () => {
  return (
    <>
      <div className={'blank-filler'}></div>
      <hr />
      <div className={styles['footer-grid']}>
        <div className={styles['footer-title']}>
          <h2>Jia Rong Hu</h2>
          <p>He/Him | BCIS Class of 2025</p>
          <p>© 2023</p>
        </div>

        <div className={styles['footer-area'] + " " + styles['footer-social']}>
          <ul>
            <li><a href="mailto:jia@jrhu.me">Say Hi → jia@jrhu.me</a></li>
            <li><a href="https://x.com/upintheozone" target="_blank" rel="noreferrer">What's Happening? → X</a></li>
            <li><a href="https://read.cv/jia" target="_blank" rel="noreferrer">Some Projects → Read.cv</a></li>
            <li><a href="https://bento.me/jia" target="_blank" rel="noreferrer">Link in Bio → Bento</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};
  
export default Footer;