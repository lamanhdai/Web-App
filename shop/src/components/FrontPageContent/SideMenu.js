import React from 'react'

const categories = {
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
};

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
      <div className="nav-title"><span>Categories</span> </div>
      <div className="nav-content">
        <div className="navbar navbar-inverse">
          <div id="verticalmenu" className="verticalmenu" role="navigation">
            <div className="navbar">
              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav verticalmenu">
                  <li className="parent dropdown">
                    <a href="grid.html" className="dropdown-toggle" data-toggle="dropdown">
                      <span className="menu-title">{categories.name}</span>
                      <b className="round-arrow"></b>
                    </a>
                    <div className="dropdown-menu">
                      <div className="dropdown-menu-inner">
                        <div className="row">
                          {
                            categories.subCategories.map(subCategory => (
                              <div className="mega-col col-sm-66" data-widgets="wid-5" data-colwidth="6" key={subCategory.name}>
                                <div className="mega-col-inner">
                                  <div className="ves-widget">
                                    <div className="menu-title">{subCategory.name}</div>
                                    <div className="widget-html">
                                      <div className="widget-inner">
                                        <ul>
                                          {subCategory.childCategories.map(childCategory => (
                                            <li className="first" key={childCategory.name}>
                                              <a href="grid.html">
                                                <span>{childCategory.name}</span>
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
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