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
                <Link className={styles['nav-site-title']} href="/">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit={2}
                  >
                    <path
                      d="M460 426.667C460 411.949 448.798 400 435 400h-50c-13.798 0-25 11.949-25 26.667v106.666C360 548.051 371.202 560 385 560h50c13.798 0 25-11.949 25-26.667V426.667z"
                      transform="matrix(.652 0 0 .61125 -209.722 -235.759)" style={{'fill':'var(--primary-text-color)'}}
                    />
                    <path
                      d="M460 625c0-13.798-11.202-25-25-25h-50c-13.798 0-25 11.202-25 25v50c0 13.798 11.202 25 25 25h50c13.798 0 25-11.202 25-25v-50z"
                      transform="matrix(.652 0 0 .652 -209.722 -265.099)" style={{'fill':'var(--primary-text-color)'}}
                    />
                    <path
                      d="M600 566.667C600 551.949 588.798 540 575 540h-50c-13.798 0-25 11.949-25 26.667v106.666C500 688.051 511.202 700 525 700h50c13.798 0 25-11.949 25-26.667V566.667z"
                      transform="matrix(.652 0 0 .61125 -216.242 -236.574)" style={{'fill':'var(--primary-text-color)'}}
                    />
                    <path
                      d="M600 425c0-13.798-11.202-25-25-25h-50c-13.798 0-25 11.202-25 25v50c0 13.798 11.202 25 25 25h50c13.798 0 25-11.202 25-25v-50z"
                      transform="scale(.652) rotate(-45 -82.484 657.05)" style={{'fill':'var(--primary-text-color)'}}
                    />
                  </svg>
                </Link>
                <Link className={styles['nav-link']} href="/">Work</Link>
                {/* <Link className={styles['nav-link']} href="/play">Play</Link> */}
                {/* <Link className={styles['nav-link']} href="/write">Write</Link> */}
                <Link className={styles['nav-link']} href="/about">About</Link>
                
              </div>
              <div className={styles['nav-bar-filler']}></div>
              <div className={styles['nav-bar-right']}>
                  <a className={styles['nav-contact']} href="mailto:jiaronghu8@gmail.com">
                    <span className={styles['nav-mail-text-desktop']}>Say Hello</span> <span className={styles['nav-mail-text-mobile']}>Say Hi</span> <span className={styles['nav-mail-arrow']}>↗</span>
                  </a>
              </div>
          </div>
      </motion.div>
    </>
  );
};
  
export default NavigationBar;