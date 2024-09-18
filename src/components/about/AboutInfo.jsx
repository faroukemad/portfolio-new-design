import React, { useContext } from 'react'
import Pdf from '../../Farouk Emad Resume.pdf';
import { MdFileDownload } from "react-icons/md";
import { AppContext } from '../context/AppContext';
import { motion } from "framer-motion";

export default function AboutInfo() {
    const { backOpen } = useContext(AppContext);
    const navAnimation = {
        show: {
          transition: {
            staggerChildren: .4,
            delayChildren: 0.8,
            ease: "easeInOut"
          }
        }
      }
      const navText = {
        hidden: {
          opacity: 0,
          x: '130px',
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            ease: "easeInOut",
            duration: 2.5,
          }
        }
      }
      const navText2 = {
        hidden: {
          opacity: 0,
          y: '50px',
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeInOut",
            duration: 2.5,
          }
        }
      }
    return (
        <motion.div variants={navAnimation} className={"wrapper " + (backOpen && "about-background2")} initial="hidden"
            animate='show'>


            <div className="aboutMe">
                <motion.h1 variants={navText} className={"about-h1 " + (backOpen && "active")}>I'm Farouk Emad.</motion.h1>
                <motion.h1 variants={navText} className={"about-h1 " + (backOpen && "active")}>A Front End Developer</motion.h1>
                <motion.h1 variants={navText} className={"about-based " + (backOpen && "active")} >based in Egypt</motion.h1>

                <motion.div variants={navText2} className="cvDiv">

                    <a href={Pdf} target="_blank" className='btnn ' rel="noreferrer"> <span>Download CV</span>
                        <MdFileDownload className="about-download " />
                    </a>
                </motion.div>
            </div>

        </motion.div>
    )
}
