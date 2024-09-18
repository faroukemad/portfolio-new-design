import React, { useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProjectsSlide from "./ProjectsSlide";
import slideData from "./SlideData";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';
import { motion } from "framer-motion";


export default function ProjectsSwiper() {
    const [swiperHeight, setSwiperHeight] = useState("auto");
const [slidesPerView, setSlidesPerView] = useState(2);
const [objectPosition, setObjectPosition] = useState('0% center');
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 662) {
                setSlidesPerView(1);
                setSwiperHeight("50vh");
            } else {
                setSlidesPerView(2);
                setSwiperHeight("auto");
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNextButtonClick = () => {
        let x = parseFloat(objectPosition) + 25;
        x = x > 100 ? 100 : x;
        setObjectPosition(`${x}% center`);
    };

    const handlePrevButtonClick = () => {
        let y = parseFloat(objectPosition) - 25;
        y = y < 0 ? 0 : y;
        setObjectPosition(`${y}% center`);
    };
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
    return (
        <Swiper className="swiper-size"
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


                {slideData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <ProjectsSlide imageSrc={slide.imageSrc} title={slide.title} link={slide.link} githubLink={slide.githubLink} />
                    </SwiperSlide>
                ))}



            </motion.div>
            <div className="button-next-side position-absolute  text-white " style={{ top: '45%', right: '2%', zIndex: '99', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#06091880' }} onClick={handleNextButtonClick}>
                <IoIosArrowForward className="swiper-forward" />
            </div>
            <div className="button-prev-side position-absolute  text-white " style={{ top: '45%', left: '2%', zIndex: '99', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#06091880' }} onClick={handlePrevButtonClick}>
                <IoIosArrowBack className="swiper-backward" />
            </div>

        </Swiper>
    )
}
