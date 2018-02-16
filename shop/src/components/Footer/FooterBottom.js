import React from 'react'

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
      <div className="row">
        <div className="col-sm-5 col-xs-12 coppyright"> &copy; 2015. All Rights Reserved. Designed by <a href="#">magikcommerce.com</a> </div>
        <div className="col-sm-7 col-xs-12 company-links">
          <ul className="links">
            <li><a href="#" title="Magento Themes">Magento Themes</a></li>
            <li><a href="#" title="Premium Themes">Premium Themes</a></li>
            <li><a href="#" title="Responsive Themes">Responsive Themes</a></li>
            <li className="last"><a href="#" title="Magento Extensions">Magento Extensions</a></li>
          </ul>
        </div></div>
      </div>
    </div>
  )
}

export default FooterBottom