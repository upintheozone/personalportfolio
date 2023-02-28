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
          <a href="mailto:jiaronghu8@gmail.com"><h2>Jia Rong Hu</h2></a>
          <p>Portfolio + Digital Garden.</p>
          <p>© 2023</p>
        </div>
        <div className={styles['footer-area'] + " " + styles['footer-site']}>
          <ul>
            <li><Link href="/">Work</Link></li>
            <li><Link href="/play">Play</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div className={styles['footer-area'] + " " + styles['footer-social']}>
          <ul>
            <li><a href="mailto:jiaronghu8@gmail.com">Email</a></li>
            <li><a href="https://layers.to/jia" target="_blank" rel="noreferrer">Layers.to</a></li>
            <li><a href="https://read.cv/jia" target="_blank" rel="noreferrer">Read.cv</a></li>
            <li><a href="https://bento.me/jia" target="_blank" rel="noreferrer">Bento</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};
  
export default Footer;