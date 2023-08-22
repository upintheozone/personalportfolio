import Link from 'next/link';
import { motion } from "framer-motion"

import styles from './NavigationBar.module.css'

const NavigationBar = () => {
  const navBar = {
    hidden: {
        y: -20, //move out of the site
        opacity: 0,
    },
    show: {
        y: 0, // bring it back to nrmal
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut"
      },
    },
  };

  return (
    <>
      <motion.div className={styles['navigation-bar']} initial={"hidden"} animate={"show"} variants={navBar}>
          <div className={styles['nav-bar-flex']}>
              <div className={styles['nav-bar-left']}>
                <Link className={styles['nav-name-button']} href="/">
                  <div className={styles['nav-site-title']}>
                    <img src="/assets/images/pfp.png" />
                  </div>
                  <p className={styles['nav-link']} href="/">Jia</p>
                </Link>
              </div>
              <div className={styles['nav-bar-filler']}></div>
              <div className={styles['nav-bar-right']}>
                  <a className={styles['nav-contact']} href="mailto:jia@jrhu.me">
                    <span className={styles['nav-mail-text-desktop']}>Say Hello</span> <span className={styles['nav-mail-text-mobile']}>Say Hi</span> <span className={styles['nav-mail-arrow']}>↗</span>
                  </a>
              </div>
          </div>
      </motion.div>
    </>
  );
};
  
export default NavigationBar;