import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { VscColorMode } from "react-icons/vsc";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TopbarContent() {

    const { backOpen, setBackOpen } = useContext(AppContext);
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
        <>
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

                    <div className="color ">
                        <motion.div variants={navText}>
                            <VscColorMode className={"elementDiv " + (backOpen && "active2")} onClick={() => setBackOpen(!backOpen)} />
                        </motion.div>
                    </div>
                </div>

            </div>
        </>
    )
}
