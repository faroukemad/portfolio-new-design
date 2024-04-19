import React from 'react'
import './footer.scss'
export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Smooth scrolling animation
        });
    };
  return (
    <div className='footer' id="footer">
        <div className="wrapper">
        
            <div className="imgCont" >
            
            <div className="x" onClick={scrollToTop}>
                    <img src="assests/f-logo.png"alt="footer-logo" ></img>
                   
                </div>
            </div>

            <div className="social">
                <a href='https://www.linkedin.com/in/farouk-emad-8231a2164/'className="linkdin soc" target='_blank' rel='noreferrer' > Linkedin</a>
                <a href='https://www.behance.net/faroukemad' className="behance soc" target='_blank' rel='noreferrer'>Behance</a>
                <a href='https://github.com/faroukemad' className="github soc" target='_blank' rel='noreferrer'>Github</a>
                <a href='https://codepen.io/faroukemad' className="codepen soc" target='_blank' rel='noreferrer'>CodePen</a>
            </div>
   
            <div className="word">
            <span>Copyright &#169; 2023 Farouk Emad</span>
            </div>
        </div>
            
    </div>
  )
}
