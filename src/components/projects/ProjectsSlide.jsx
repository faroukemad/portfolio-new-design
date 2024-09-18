import React, { useState } from 'react'
import { GoLink } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
export default function ProjectsSlide({ imageSrc, title, link, githubLink }) {

    const [objectPosition, setObjectPosition] = useState('0% center');

    return (
        <div className="project-swiper-cont">
            <img src={imageSrc} className="project-swiper-img" style={{ objectPosition, transition: 'all 1s ease-in-out' }} alt="" width={'100%'} height={'100%'} />
            <h1 className="project-swiper-h1 w-100">{title} </h1>
            <p className="project-swiper-p2"><a className="project-href" href={link} target="_blank" rel="noreferrer" ><GoLink className="project-link" /> </a> 
            {githubLink && (<a href={githubLink} target="_blank" rel="noreferrer">  <FaGithub className="project-hub" /></a>)}</p>
        </div>
    )
}
