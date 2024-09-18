import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './about.scss';
import transition from "../../transition";
import { AppContext } from "../context/AppContext";
import AboutInfo from "./AboutInfo";


function About() {

  const { backOpen } = useContext(AppContext);
  
  const navText3 = {
    hidden: {
      opacity: 0,
      x: '-130px',
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
  return (
    <div className='about' id='about'>
      <AnimatePresence mode="wait" initial={true}>
        <div className={"wrapper2 " + (backOpen && "about-background")}>

        </div>

        <AboutInfo/>

        <motion.img variants={navText3} className="about-img" src="assests/blob.svg" alt="" initial="hidden"
          animate='show' />
        <div className="intro-svg"></div>

      </AnimatePresence>
    </div>
  )
}
export default transition(About);