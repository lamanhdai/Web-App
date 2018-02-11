import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Nav = () => {
  return(
    <nav>
      <div className="container">
        <div className="nav-inner">
          <div className="logo-small"> <a className="logo" title="Magento Commerce" href="index.html"><img alt="Magento Commerce" src="images/logo.png"/></a> </div>
          <MobileNav />
          <DesktopNav />
        </div>
      </div>
    </nav>
  )
}

export default Nav