import React from 'react'

const categories = [
  {
    "name": "Women",
    "subCategories": [
      {
        "name": "Styliest Bag",
        "childCategories": [
          {
            "name": "Clutch Handbags"
          },
          {
            "name": "Diaper Bags"
          },
          {
            "name": "Bags"
          },
          {
            "name": "Hobo Handbags"
          },
        ]
      },
      {
        "name": "Material Bag",
        "childCategories": [
          {
            "name": "Beaded Handbags"
          },
          {
            "name": "Fabric Handbags"
          },
          {
            "name": "Handbags"
          },
          {
            "name": "Leather Handbags"
          },
        ]
      },
      {
        "name": "Designer Bag",
        "childCategories": [
          {
            "name": "Flat Shoes"
          },
          {
            "name": "Flat Sandals"
          },
          {
            "name": "Boots"
          },
          {
            "name": "Heels"
          },
        ]
      },
      {
        "name": "Cotton Bag",
        "childCategories": [
          {
            "name": "Bracelets"
          },
          {
            "name": "Necklaces &amp; Pendants"
          },
          {
            "name": "Pendants"
          },
          {
            "name": "Pins &amp; Brooches"
          },
        ]
      },
    ]
        
  },
];

const categoriesBanner = {
  "name": "Custom",
  "subCategories": [
    {
      "name": "Fauxwaii Shirt - Oldss",
      "image": "images/custom-img1.jpg",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue."
    },
    {
      "name": "Fauxwaii Shirt - Oldss",
      "image": "images/custom-img1.jpg",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue."
    },
    {
      "name": "Fauxwaii Shirt - Oldss",
      "image": "images/custom-img1.jpg",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue."
    },
    {
      "name": "Fauxwaii Shirt - Oldss",
      "image": "images/custom-img1.jpg",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue."
    },
  ]
}
const SideMenu = () => {
  return (
    <div id="magik-verticalmenu" className="block magik-verticalmenu">
      <div className="nav-title"> <span>Categories</span> </div>
      <div className="nav-content">
        <div className="navbar navbar-inverse">
          <div id="verticalmenu" className="verticalmenu" role="navigation">
            <div className="navbar">
              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav verticalmenu">
                  <li className="parent dropdown">
                    <a href="grid.html" className="dropdown-toggle" data-toggle="dropdown">
                      <span className="menu-title">Women</span>
                      <b className="round-arrow"></b>
                    </a>
                    <div className="dropdown-menu">
                      <div className="dropdown-menu-inner">
                        <div className="row">
                          <div className="mega-col col-sm-66" data-widgets="wid-5" data-colwidth="6">
                            <div className="mega-col-inner">
                              <div className="ves-widget">
                                <div className="menu-title">Styliest Bag</div>
                                <div className="widget-html">
                                  <div className="widget-inner">
                                    <ul>
                                      <li className="first"> <a href="grid.html"> <span>Clutch Handbags</span> </a> </li>
                                      <li> <a href="grid.html"> <span>Diaper Bags</span> </a> </li>
                                      <li> <a href="grid.html"> <span>Bags</span> </a> </li>
                                      <li className="last"> <a href="grid.html"> <span>Hobo Handbags</span> </a> </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-col col-sm-66" data-colwidth="6" data-widgets="wid-7">
                            <div className="mega-col-inner">
                              <div className="magik-widget">
                                <div className="menu-title">Material Bag</div>
                                <div className="widget-html">
                                  <div className="widget-inner">
                                    <ul>
                                      <li className="first"> <a href="grid.html"> <span>Beaded Handbags</span> </a> </li>
                                      <li> <a href="grid.html"> <span>Fabric Handbags</span> </a> </li>
                                      <li> <a href="grid.html"> <span>Handbags</span> </a> </li>
                                      <li className="last"> <a href="grid.html"> <span>Leather Handbags</span> </a> </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-col col-sm-66" data-colwidth="6" data-widgets="wid-7">
                            <div className="mega-col-inner">
                              <div className="magik-widget">
                                <div className="menu-title">Designer Bag</div>
                                <div className="widget-html">
                                  <div className="widget-inner">
                                    <ul>
                                      <li className="first"> <a href="grid.html"> <span>Flat Shoes</span> </a> </li>
                                      <li> <a href="grid.html"> <span>Flat Sandals</span> </a> </li>
                                      <li> <a href="grid.html"> <span>Boots</span> </a> </li>
                                      <li className="last"> <a href="grid.html"> <span>Heels</span> </a> </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-col col-sm-66 " data-colwidth="6" data-widgets="wid-7">
                            <div className="mega-col-inner">
                              <div className="magik-widget">
                                <div className="menu-title">Cotton Bag</div>
                                <div className="widget-html">
                                  <div className="widget-inner">
                                    <ul>
                                      <li className="first"> <a href="grid.html"> <span>Bracelets</span> </a> </li>
                                      <li> <a href="grid.html"> <span>Necklaces &amp; Pendants</span> </a> </li>
                                      <li> <a href="grid.html"> <span>Pendants</span> </a> </li>
                                      <li className="last"> <a href="grid.html"> <span>Pins &amp; Brooches</span> </a> </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </li>
                  <li className=" parent dropdown">
                    <a href="#/televisions.html" className="dropdown-toggle" data-toggle="dropdown">
                      <span className="menu-title">Custom</span>
                      <b className="round-arrow"></b>
                    </a>
                    <div className="dropdown-menu">
                      <div className="dropdown-menu-inner">
                        <div className="row">
                          <div className="mega-col col-sm-88" data-widgets="wid-1" data-colwidth="8">
                            <div className="mega-col-inner">
                              <div className="magik-widget">
                                <div className="product-block">
                                  <div className="image"><a href="#/fauxwaii-shirt-oldss.html"><img src="images/custom-img1.jpg" alt="Fauxwaii Shirt - Oldss"/></a></div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-col col-sm-88" data-widgets="wid-2" data-colwidth="8">
                            <div className="mega-col-inner">
                              <div className="magik-widget">
                                <div className="widget-product">
                                  <div className="widget-inner">
                                    <div className="product-block">
                                      <div className="image"><a href="#/framed-sleeve-mid.html"><img src="images/custom-img2.jpg" alt="Framed-Sleeve Mid"/></a></div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="mega-col col-sm-88" data-widgets="wid-1" data-colwidth="8">
                            <div className="mega-col-inner">
                              <div className="magik-widget">
                                <div className="product-block">
                                  <div className="image"><a href="#/fauxwaii-shirt-oldss.html"><img src="images/custom-img3.jpg" alt="Fauxwaii Shirt - Oldss"/></a></div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mega-col col-sm-88" data-widgets="wid-2" data-colwidth="8">
                            <div className="mega-col-inner">
                              <div className="magik-widget">
                                <div className="widget-product">
                                  <div className="widget-inner">
                                    <div className="product-block">
                                      <div className="image"><a href="#/framed-sleeve-mid.html"><img src="images/custom-img4.jpg" alt="Framed-Sleeve Mid"/></a></div>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMenu