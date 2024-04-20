import React, { useRef } from 'react';
import './topbar.scss'
import { VscColorMode } from "react-icons/vsc";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Topbar({ backOpen, setBackOpen, menuOpen, setMenuOpen }) {

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
      y: '-130px',
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      }
    }
  }


    const checkboxRef = useRef(null);

    const handleLinkClick = () => {
      if (checkboxRef.current) {
        checkboxRef.current.checked = false; // Set the checkbox to true when the link is clicked
      }
    };
  return (

    <div className={"topbar "} id='topbar' >
      <motion.div className="wrapper" variants={navAnimation}
        initial="hidden"
        animate='show'
      >
        <div className="left">
          <Link to='/' className='topbar-a'>
            <motion.div variants={navText} className={"leftComp " + (backOpen && "active")}>
              Portofolio
            </motion.div>
          </Link>
        </div>

        <div className="right">

          <div className="rightComp">
            <Link to='/projects' className='topbar-a'>
              <motion.div variants={navText} className={"element " + (backOpen && "active")}>
                <motion.div className='element'>Case Studies</motion.div>
                <div className="topbar-background"></div>
              </motion.div>
            </Link>
            <Link to='/about' className='topbar-a'>
              <motion.div variants={navText} className={"element " + (backOpen && "active")}>About</motion.div>
            </Link>
            {/* <motion.div className={"topbar-border element2 " + (backOpen && "active")} variants={navText} onClick={() => setMenuOpen(!menuOpen)}>Get Started</motion.div> */}
            <div className="color ">
              <motion.div variants={navText}>
                <VscColorMode className={"elementDiv " + (backOpen && "active2")} onClick={() => setBackOpen(!backOpen)} />
              </motion.div>
            </div>
          </div>

        </div>

        {/* <div className="topbar-svg"></div> */}

        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" ref={checkboxRef}/>
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">


          <Link to='/' className='topbar-a'  onClick={handleLinkClick}>
                <label className={"leftComp menu-label " + (backOpen && "active")} htmlFor="menu__toggle">Portofolio</label>
            </Link>

            <div className="greymenuline"></div>

            <Link to='/projects' className='topbar-a'  onClick={handleLinkClick}>
                <label className={"leftComp menu-label " + (backOpen && "active")} htmlFor="menu__toggle">Case Studies</label>
            </Link>

            <div className="greymenuline"></div>
            <Link to='/about' className='topbar-a' onClick={handleLinkClick}>
              <label className={"leftComp menu-label " + (backOpen && "active")} htmlFor="menu__toggle"> About</label>
            </Link>

          
            <div className="greymenuline"></div>

            <div className="color element ">
              <motion.div variants={navText} onClick={() => { setBackOpen(!backOpen);  }}>
                <label htmlFor="menu__toggle">
                  <VscColorMode className={"elementDiv2 " + (backOpen && "active2")} /></label>
              </motion.div>
            </div>

          </ul>
        </div>

      </motion.div>

    </div>


  )
}

export default Topbar;