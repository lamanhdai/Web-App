import React from 'react'
import SideMenu from './SideMenu';
import SideBanner from './SideBanner';
import Slider from './Slider';

const FrontPageContent = () => {
  return (
    <div className="magik-slideshow wow bounceInUp animated" id="magik-slideshow">
      <div className="container">
        <div className="row">
          <div className="LHS-nav col-lg-3 col-md-4">
            <SideMenu />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-8">
            <Slider />
          </div>
          <aside className="col-xs-12 col-sm-12 col-md-3">
            <SideBanner />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default FrontPageContent