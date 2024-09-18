import React from 'react'
import './footer.scss'
import FooterSocial from './FooterSocial';
import FooterLogo from './FooterLogo';
import FooterCopy from './FooterCopy';
export default function Footer() {

  return (
    <div className='footer' id="footer">

      <div className="wrapper">

        <FooterLogo />

        <FooterSocial />

        <FooterCopy />
        
      </div>

    </div>
  )
}
