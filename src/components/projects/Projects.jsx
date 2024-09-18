import React, { useContext } from "react";
import { motion } from "framer-motion";
import './projects.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import transition from "../../transition";
import { AppContext } from "../context/AppContext";
import ProjectsSwiper from "./ProjectsSwiper";

function Projects() {

  const { backOpen } = useContext(AppContext);

  const imageSource = backOpen
    ? "assests/test10.svg"
    : "assests/test11.svg";

  const navText = {
    hidden: {
      opacity: 0,
      y: '-130px',
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.5,
      }
    }
  }

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
    <div className='projects' id="projects">
      <motion.div className="wrapper" variants={navAnimation}
        initial="hidden"
        animate='show'
      >
        <motion.h1 variants={navText} className={"projects-h1 " + (backOpen && "active")}>Projects</motion.h1>

        <ProjectsSwiper />

        <img className="intro-photo" src={imageSource} alt="" />
      </motion.div>
    </div>
  );
};
export default transition(Projects);
