import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import Sticky from '../Utils/Sticky';

const Nav = () => {
  return(
    <Sticky className="sticky-menu">
      <div className="container">
        <div className="nav-inner">
          <div className="logo-small"> <a className="logo" title="Magento Commerce" href="index.html"><img alt="Magento Commerce" src="images/logo.png"/></a> </div>
          <MobileNav />
          <DesktopNav />
        </div>
      </div>
    </Sticky>
  )
}

export default Nav