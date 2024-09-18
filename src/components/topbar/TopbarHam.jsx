import React, { useContext,useRef } from 'react'
import { VscColorMode } from "react-icons/vsc";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function TopbarHam() {

    const { backOpen, setBackOpen } = useContext(AppContext);
    const checkboxRef = useRef(null);

    const handleLinkClick = () => {
        if (checkboxRef.current) {
            checkboxRef.current.checked = false;
        }
    };
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
    
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" ref={checkboxRef} />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">


                <Link to='/' className='topbar-a' onClick={handleLinkClick}>
                    <label className={"leftComp menu-label " + (backOpen && "active")} htmlFor="menu__toggle">Portofolio</label>
                </Link>

                <div className="greymenuline"></div>

                <Link to='/projects' className='topbar-a' onClick={handleLinkClick}>
                    <label className={"leftComp menu-label " + (backOpen && "active")} htmlFor="menu__toggle">Case Studies</label>
                </Link>

                <div className="greymenuline"></div>
                <Link to='/about' className='topbar-a' onClick={handleLinkClick}>
                    <label className={"leftComp menu-label " + (backOpen && "active")} htmlFor="menu__toggle"> About</label>
                </Link>


                <div className="greymenuline"></div>

                <div className="color element ">
                    <motion.div variants={navText} onClick={() => { setBackOpen(!backOpen); }}>
                        <label htmlFor="menu__toggle">
                            <VscColorMode className={"elementDiv2 " + (backOpen && "active2")} /></label>
                    </motion.div>
                </div>

            </ul>
        </div>

    )
}
