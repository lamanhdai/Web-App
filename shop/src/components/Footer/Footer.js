import React from 'react'
import FooterLogo from './FooterLogo'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <footer className="footer wow bounceInUp animated">
      <FooterLogo />
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  )
}

export default Footer