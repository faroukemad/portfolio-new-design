import React, { useContext } from 'react'
import { FaBehance, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { AppContext } from '../context/AppContext';
import {  motion } from "framer-motion";

export default function IntroInfo() {
    const { backOpen, menuOpen, setMenuOpen } = useContext(AppContext);
    const iconAnimation = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: .4,
            delayChildren: 0.8,
            ease: "easeInOut"
          }
        }
      }
      const typingContainer = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: 3,
            staggerChildren: 0.14,
          }
        }
      }
      const typingText = {
        hidden: { opacity: 0, y: "-20px" },
        show: {
          opacity: 1,
          y: "0",
          transition: {
            ease: 'easeInOut',
          }
        }
      }
      const explainProduct = {
        hidden: { opacity: 0, x: "-50px" },
        show: {
          opacity: 1,
          x: "0",
          transition: {
            delay: 2.5,
            ease: "easeInOut"
          }
        }
      }
      const explainProduct2 = {
        hidden: { opacity: 0, x: "-100px" },
        show: {
          opacity: 1,
          x: "0",
          transition: {
            delay: 3.5,
            ease: "easeInOut",
            duration: 1.5,
          }
        }
      }
    
    
      const explainButton = {
        hidden: { opacity: 0, y: "40px" },
        show: {
          opacity: 1,
          y: "0",
          transition: {
            delay: 5.5,
            ease: "easeInOut"
          }
        }
      }
      const navText = {
        hidden: {
          opacity: 0,
          x: '30px',
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            ease: "easeInOut",
            duration: 0.5,
          }
        }
      }
  return (
    <div className="left">
            <motion.h1 variants={explainProduct} className={"fade1 " + (backOpen && "active")}>Hello, I am</motion.h1>
            <motion.h2 variants={typingContainer}>
              {Array.from("Farouk Emad").map((word, i) => (
                <motion.span className={"fade2 " + (backOpen && "active")} key={i} variants={typingText}>{word}</motion.span>
              ))}
            </motion.h2>
            <motion.p variants={explainProduct2} className={"intro-front " + (backOpen && "active")}><span> Front-end Developer </span>, weaving digital magic with design passion and precision</motion.p>

            <div className="right">
              <motion.div variants={iconAnimation} className="icons">
                <div className="intro-line"></div>
                <motion.a href='https://www.linkedin.com/in/farouk-emad-8231a2164/' variants={navText} className='el' target="_blank" rel="noreferrer">
                  <FaLinkedin className={"icon1 " + (backOpen && "active2")}

                  />
                </motion.a>
                <motion.a href='https://github.com/faroukemad' variants={navText} className='el' target="_blank" rel="noreferrer">
                  <FaGithub className={"icon2 " + (backOpen && "active3")}
                  />
                </motion.a>
                <motion.a href='https://codepen.io/faroukemad' variants={navText} className='el' target="_blank" rel="noreferrer">
                  <FaCodepen className={"icon3 " + (backOpen && "active4")} />
                </motion.a>
                <motion.a href='https://www.behance.net/faroukemad' variants={navText} className='el' target="_blank" rel="noreferrer">
                  <FaBehance className={"icon4 " + (backOpen && "active5")} />
                </motion.a>


              </motion.div>
            </div>
            <div className='btnClass'>
              <motion.div className='btn' variants={explainButton} onClick={() => setMenuOpen(!menuOpen)} > Let's Talk  </motion.div>
            </div>
          </div>
  )
}
