import React from 'react';
import './topbar.scss'
import { motion } from 'framer-motion';
import TopbarContent from './TopbarContent';
import TopbarHam from './TopbarHam';
function Topbar() {

  const navAnimation = {
    show: {
      transition: {
        staggerChildren: .4,
        delayChildren: 0.8,
        ease: "easeInOut"
      }
    }
  }

  return (

    <div className={"topbar "} id='topbar' >
      <motion.div className="wrapper" variants={navAnimation}
        initial="hidden"
        animate='show'
      >
        <TopbarContent />

        <TopbarHam />

      </motion.div>

    </div>

  )
}

export default Topbar;