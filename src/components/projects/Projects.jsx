import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './projects.scss'
import { Navigation, Pagination, Scrollbar, A11y, Parallax } from 'swiper/modules';
import { GoLink } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import transition from "../../transition";


function Projects({ menuOpen, setMenuOpen, backOpen, setBackOpen }) {




  const [objectPosition, setObjectPosition] = useState('0% center');

  const handleNextButtonClick = () => {
    let x = parseFloat(objectPosition) + 25; // Increment X-axis position by 25%
    x = x > 100 ? 100 : x; // Ensure X-axis position does not exceed 100%
    setObjectPosition(`${x}% center`);
  };

  const handlePrevButtonClick = () => {
    let y = parseFloat(objectPosition) - 25; // Increment X-axis position by 25%
    y = y < 0 ? 0 : y; // Ensure X-axis position does not exceed 100%
    setObjectPosition(`${y}% center`);
  };

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
  const navSwiper = {
    hidden: {
      opacity: 0,
      y: '-130px',
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 5,
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
  const [swiperHeight, setSwiperHeight] = useState("auto");
  const [slidesPerView, setSlidesPerView] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      // Adjust slides per view based on window width
      if (window.innerWidth <= 662) {
        setSlidesPerView(1);
        setSwiperHeight("50vh");
      } else {
        setSlidesPerView(2);
        setSwiperHeight("auto"); // Or you can set it to the default height
      }
    };
    handleResize();

    // Listen for window resize event
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // animate={inView ? "visible" : "hidden"}
  //         variants={variants}  exit="hidden" transition={{ duration: 2 }}   ref={ref} 
  return (
    <div className='projects' id="projects">
      <motion.div className="wrapper" variants={navAnimation}
        initial="hidden"
        animate='show'
      >
        <motion.h1 variants={navText} className={"projects-h1 " + (backOpen && "active")}>Projects</motion.h1>

        <Swiper className="swiper-size"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Parallax]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          slidesPerGroup={1}
          navigation={{
            nextEl: ".button-next-side",
            prevEl: ".button-prev-side",
          }}

          style={{ height: swiperHeight }}

        >
          <motion.div variants={navSwiper} initial="hidden"
            animate='show'>

            <SwiperSlide  >
              <div className="project-swiper-cont">
                <img src="assests/short.png" className="project-swiper-img" style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
                {/* <p className="project-swiper-p1">April 2023</p> */}
                <h1 className="project-swiper-h1 w-100">Shortlisted </h1>
                <p className="project-swiper-p2"><a className="project-href" href="https://shopshortlisted.com/" target="_blank" rel="noreferrer" ><GoLink className="project-link" /> </a>  <FaGithub className="project-hub2" /></p>
              </div>
            </SwiperSlide>
            <SwiperSlide  >
              <div className="project-swiper-cont">
                <img src="assests/space.png" className="project-swiper-img" style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
                {/* <p className="project-swiper-p1">April 2023</p> */}
                <h1 className="project-swiper-h1 w-100">Space Adventure </h1>
                <p className="project-swiper-p2"><a className="project-href" href="https://space-adventure-blond.vercel.app/" target="_blank" rel="noreferrer" ><GoLink className="project-link" /> </a> <a href="https://github.com/faroukemad/Space-Adventure" target="_blank" rel="noreferrer"> <FaGithub className="project-hub" /></a></p>
              </div>
            </SwiperSlide>
            <SwiperSlide  >
              <div className="project-swiper-cont">
                <img src="assests/word.jpg" className="project-swiper-img" style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
                {/* <p className="project-swiper-p1">April 2023</p> */}
                <h1 className="project-swiper-h1 w-100">WordPress </h1>
                <p className="project-swiper-p2"><a className="project-href" href="https://word-press-rouge-eight.vercel.app/" target="_blank" rel="noreferrer" ><GoLink className="project-link" /> </a> <a href="https://github.com/faroukemad/wordPress" target="_blank" rel="noreferrer"> <FaGithub className="project-hub" /></a></p>
              </div>
            </SwiperSlide>


            <SwiperSlide  >
              <div className="project-swiper-cont">
                <img src="assests/tavola.jpg" className="project-swiper-img" style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
                {/* <p className="project-swiper-p1">April 2023</p> */}
                <h1 className="project-swiper-h1 w-100">Tavola </h1>
                <p className="project-swiper-p2"><a className="project-href" href="https://tavola-mu.vercel.app/" target="_blank" rel="noreferrer" ><GoLink className="project-link" /> </a> <a href="https://github.com/faroukemad/Tavola" target="_blank" rel="noreferrer"> <FaGithub className="project-hub" /></a></p>
              </div>
            </SwiperSlide>

            <SwiperSlide  >
              <div className="project-swiper-cont">
                <img src="assests/store2.png" className="project-swiper-img" style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
                {/* <p className="project-swiper-p1">April 2023</p> */}
                <h1 className="project-swiper-h1 w-100">Online Store </h1>
                <p className="project-swiper-p2"><a className="project-href" href="https://store-zeta-eight.vercel.app/" target="_blank" rel="noreferrer" ><GoLink className="project-link" /> </a> <a href="https://github.com/faroukemad/Store" target="_blank" rel="noreferrer"> <FaGithub className="project-hub" /></a></p>
              </div>
            </SwiperSlide>

            <SwiperSlide  >
              <div className="project-swiper-cont">
                <img src="assests/coffeetime.png" className="project-swiper-img" style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
                {/* <p className="project-swiper-p1">April 2023</p> */}
                <h1 className="project-swiper-h1 w-100">Coffee Time </h1>
                <p className="project-swiper-p2"><a className="project-href" href="https://coffee-time-drab.vercel.app/" target="_blank" rel="noreferrer" ><GoLink className="project-link" /> </a> <a href="https://github.com/faroukemad/CoffeeTime" target="_blank" rel="noreferrer"> <FaGithub className="project-hub" /></a></p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="project-swiper-cont">
                <img src="assests/portfolio.jpg" className="project-swiper-img" style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
                {/* <p className="project-swiper-p1">March 2023</p> */}
                <h1 className="project-swiper-h1 w-100">Portfolio </h1>
                <p className="project-swiper-p2"><a className="project-href" href="https://portfolio-mu-seven-25.vercel.app/" target="_blank" rel="noreferrer"><GoLink className="project-link" /> </a><a href="https://github.com/faroukemad/Portfolio" target="_blank" rel="noreferrer">  <FaGithub className="project-hub" /></a></p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="project-swiper-cont">
                <img src="assests/CaltaGroup.png" className="project-swiper-img" style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
                {/* <p className="project-swiper-p1">December 2023</p> */}
                <h1 className="project-swiper-h1 w-100">Calta Group </h1>
                <p className="project-swiper-p2"><a className="project-href" href="https://thecaltagroup.com/" target="_blank" rel="noreferrer"><GoLink className="project-link" /> </a>  <FaGithub className="project-hub2" /></p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="project-swiper-cont">
                <img src="assests/Oscar.png" className="project-swiper-img" style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
                {/* <p className="project-swiper-p1">January 2024</p> */}
                <h1 className="project-swiper-h1 w-100">Oscar </h1>
                <p className="project-swiper-p2"><a className="project-href" href="https://oscarstores.com/" target="_blank" rel="noreferrer"><GoLink className="project-link" /> </a>  <FaGithub className="project-hub2" /></p>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="project-swiper-cont">
                <img src="assests/r-write.png" className="project-swiper-img" style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
                {/* <p className="project-swiper-p1">January 2024</p> */}
                <h1 className="project-swiper-h1 w-100">R-write </h1>
                <p className="project-swiper-p2"><a className="project-href" href="https://r-write.com/" target="_blank" rel="noreferrer"><GoLink className="project-link" /> </a>  <FaGithub className="project-hub2" /></p>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide className="me-5">
        <div className="project-swiper-cont">
        <img src="assests/skedda.png"  className="project-swiper-img"  style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
        <p className="project-swiper-p1">March 2024</p>
        <h1 className="project-swiper-h1 w-100">Skedda </h1>
        <p className="project-swiper-p2"><a className="project-href" href="https://www.skedda.com/" target="_blank" rel="noreferrer"><GoLink className="project-link"/> </a> <a href="" target="_blank" rel="noreferrer"> <FaGithub className="project-hub2"/></a></p>
        </div>
        </SwiperSlide>      */}
          </motion.div>
          <div className="button-next-side position-absolute  text-white " style={{ top: '45%', right: '2%', zIndex: '99', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#06091880' }} onClick={handleNextButtonClick}>
            <IoIosArrowForward className="swiper-forward" />
          </div>
          <div className="button-prev-side position-absolute  text-white " style={{ top: '45%', left: '2%', zIndex: '99', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#06091880' }} onClick={handlePrevButtonClick}>
            <IoIosArrowBack className="swiper-backward" />
          </div>

        </Swiper>
        <img className="intro-photo" src={imageSource} alt="" />
      </motion.div>
    </div>
  );
};
export default transition(Projects);
