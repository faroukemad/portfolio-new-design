import React from 'react'

export default function FooterLogo() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div className="imgCont" onClick={scrollToTop}>


            <img src="assests/f-logo.png" alt="footer-logo" ></img>


        </div>
    )
}
