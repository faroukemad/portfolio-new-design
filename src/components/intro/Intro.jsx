import React, { useContext } from "react";
import './intro.scss'
import { AnimatePresence, motion } from "framer-motion";
import transition from "../../transition";
import { AppContext } from "../context/AppContext";
import IntroInfo from "./IntroInfo";

function Intro() {

  const { backOpen} = useContext(AppContext);

  const navAnimation = {
    show: {
      transition: {
        staggerChildren: .4,
        delayChildren: 2.8,
        ease: "easeInOut"
      }
    }
  }

  const imageSource = backOpen
    ? "assests/test10.svg"
    : "assests/test11.svg";

  return (

    <div className={"intro"} id="intro">
      <AnimatePresence mode="wait" initial={true}>

        <motion.div className="wrapper" variants={navAnimation}
          initial="hidden"
          animate='show'>

          <IntroInfo/>

        </motion.div>

        <img className="intro-photo" src={imageSource} alt="" />

      </AnimatePresence>
    </div>
  )
}

export default transition(Intro);