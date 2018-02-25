import React from 'react';
import propTypes from 'prop-types';
import { Collapse } from 'react-collapse';
class MobileNav extends React.Component {
  state = {
    show: false,
    showSubMenuIndex: -1
  }
  toggleMenu() {
    this.setState({
      show: !this.state.show
    });
  }
  toggleSubMenu(index) {
    const checkIndex = this.state.showSubMenuIndex < 0 ? index : -1;
    this.setState({
      showSubMenuIndex: checkIndex
    });
  }
  render() {
    const {show, showSubMenuIndex } = this.state;

    return(
      <div className="hidden-desktop" id="mobile-menu">
        <ul className="navmenu">
          <li>
            <div className="menutop">
              <div className="toggle" onClick={() => this.toggleMenu()}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </div>
              <h2>Menu</h2>
            </div>
            <Collapse isOpened={show} hasNestedCollapse>
              <ul className="submenu" ref="subMenu">
                <li>
                  <ul className="topnav">
                    <li className="level0 nav-6 level-top first parent"> <a className="level-top" href="#"> <span>Pages</span> </a>
                      <ul className="level0">
                        <li className="level1 first"><a href="grid.html"><span>Grid</span></a></li>
                        <li className="level1 nav-10-2"> <a href="list.html"> <span>List</span> </a> </li>
                        <li className="level1 nav-10-3"> <a href="product_detail.html"> <span>Product Detail</span> </a> </li>
                        <li className="level1 nav-10-4"> <a href="shopping_cart.html"> <span>Shopping Cart</span> </a> </li>
                        <li className="level1 first"><a href="checkout.html"><span>Checkout</span></a> </li>
                        <li className="level1 nav-10-4"> <a href="wishlist.html"> <span>Wishlist</span> </a> </li>
                        <li className="level1"> <a href="dashboard.html"> <span>Dashboard</span> </a> </li>
                        <li className="level1"> <a href="multiple_addresses.html"> <span>Multiple Addresses</span> </a> </li>
                        <li className="level1"> <a href="about_us.html"> <span>About us</span> </a> </li>
                        <li className="level1"> <a href="compare.html"> <span>Compare</span> </a> </li>
                        <li className="level1"> <a href="faq.html"> <span>FAQ</span> </a> </li>
                        <li className="level1"> <a href="login.html"> <span>Login</span> </a> </li>
                        <li className="level1"> <a href="quick_view.html"> <span>Quick view</span> </a> </li>
                        <li className="level1"><a href="blog.html"><span>Blog</span></a> </li>
                        <li className="level1"><a href="contact_us.html"><span>Contact us</span></a> </li>
                        <li className="level1"><a href="404error.html"><span>404 Error Page</span></a> </li>
                      </ul>
                    </li>
                    <li className="level0 nav-7 level-top parent"> <a className="level-top" href="grid.html"> <span>Women</span> </a>
                      <ul className="level0">
                        <li className="level1 nav-1-1 first parent"> <a href="grid.html"> <span>Clothing</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-1-1-1 first"> <a href="grid.html"> <span>Western Wear</span> </a> </li>
                            <li className="level2 nav-1-1-2"> <a href="grid.html"> <span>Night Wear</span> </a> </li>
                            <li className="level2 nav-1-1-3"> <a href="grid.html"> <span>Ethnic Wear</span> </a> </li>
                            <li className="level2 nav-1-1-4 last"> <a href="grid.html"> <span>Designer Wear</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-1-2 parent"> <a href="grid.html"> <span>Watches</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-1-2-5 first"> <a href="grid.html"> <span>Fashion</span> </a> </li>
                            <li className="level2 nav-1-2-6"> <a href="grid.html"> <span>Dress</span> </a> </li>
                            <li className="level2 nav-1-2-7"> <a href="grid.html"> <span>Sports</span> </a> </li>
                            <li className="level2 nav-1-2-8 last"> <a href="grid.html"> <span>Casual</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-1-3 parent"> <a href="grid.html"> <span>Styliest Bag</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-1-3-9 first"> <a href="grid.html"> <span>Clutch Handbags</span> </a> </li>
                            <li className="level2 nav-1-3-10"> <a href="grid.html"> <span>Diaper Bags</span> </a> </li>
                            <li className="level2 nav-1-3-11"> <a href="grid.html"> <span>Bags</span> </a> </li>
                            <li className="level2 nav-1-3-12 last"> <a href="grid.html"> <span>Hobo Handbags</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-1-4 last parent"> <a href="grid.html"> <span>Material Bag</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-1-4-13 first"> <a href="grid.html"> <span>Beaded Handbags</span> </a> </li>
                            <li className="level2 nav-1-4-14"> <a href="grid.html"> <span>Fabric Handbags</span> </a> </li>
                            <li className="level2 nav-1-4-15"> <a href="grid.html"> <span>Handbags</span> </a> </li>
                            <li className="level2 nav-1-4-16 last"> <a href="grid.html"> <span>Leather Handbags</span> </a> </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="level0 nav-8 level-top parent"> <a className="level-top" href="grid.html"> <span>Men</span> </a>
                      <ul className="level0">
                        <li className="level1 nav-2-1 first parent"> <a href="grid.html"> <span>Clothing</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-2-1-1 first"> <a href="grid.html"> <span>Casual Wear</span> </a> </li>
                            <li className="level2 nav-2-1-2"> <a href="grid.html"> <span>Formal Wear</span> </a> </li>
                            <li className="level2 nav-2-1-3"> <a href="grid.html"> <span>Ethnic Wear</span> </a> </li>
                            <li className="level2 nav-2-1-4 last"> <a href="grid.html"> <span>Denims</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-2-2 parent"> <a href="grid.html"> <span>Shoes</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-2-2-5 first"> <a href="grid.html"> <span>Formal Shoes</span> </a> </li>
                            <li className="level2 nav-2-2-6"> <a href="grid.html"> <span>Sport Shoes</span> </a> </li>
                            <li className="level2 nav-2-2-7"> <a href="grid.html"> <span>Canvas Shoes</span> </a> </li>
                            <li className="level2 nav-2-2-8 last"> <a href="grid.html"> <span>Leather Shoes</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-2-3 parent"> <a href="grid.html"> <span>Watches</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-2-3-9 first"> <a href="grid.html"> <span>Digital</span> </a> </li>
                            <li className="level2 nav-2-3-10"> <a href="grid.html"> <span>Chronograph</span> </a> </li>
                            <li className="level2 nav-2-3-11"> <a href="grid.html"> <span>Sports</span> </a> </li>
                            <li className="level2 nav-2-3-12 last"> <a href="grid.html"> <span>Casual</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-2-4 parent"> <a href="grid.html"> <span>Jackets</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-2-4-13 first"> <a href="grid.html"> <span>Coats</span> </a> </li>
                            <li className="level2 nav-2-4-14"> <a href="grid.html"> <span>Formal Jackets</span> </a> </li>
                            <li className="level2 nav-2-4-15"> <a href="grid.html"> <span>Leather Jackets</span> </a> </li>
                            <li className="level2 nav-2-4-16 last"> <a href="grid.html"> <span>Blazers</span> </a> </li>
                          </ul>
                        </li>
                        <li className="level1 nav-2-5 last parent"> <a href="grid.html"> <span>Sunglasses</span> </a>
                          <ul className="level1">
                            <li className="level2 nav-2-5-17 first"> <a href="grid.html"> <span>Ray Ban</span> </a> </li>
                            <li className="level2 nav-2-5-18"> <a href="grid.html"> <span>Fasttrack</span> </a> </li>
                            <li className="level2 nav-2-5-19"> <a href="grid.html"> <span>Police</span> </a> </li>
                            <li className="level2 nav-2-5-20 last"> <a href="grid.html"> <span>Oakley</span> </a> </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="level0 nav-3 level-top parent"> <a href="grid.html" className="level-top"> <span>Jewellery</span> </a><em onClick={() => this.toggleSubMenu(1)}>+</em>
                      <Collapse isOpened={showSubMenuIndex === 1 ? true: false} hasNestedCollapse>
                        <ul className="level0">
                          <li className="level1 nav-3-1 first parent"> <a href="grid.html"> <span>Precious Jewellery</span> </a><em>+</em>
                            <ul className="level1">
                              <li className="level2 nav-3-1-1 first"> <a href="grid.html"> <span>Gitanjali</span> </a> </li>
                              <li className="level2 nav-3-1-2"> <a href="grid.html"> <span>Tara</span> </a> </li>
                              <li className="level2 nav-3-1-3"> <a href="grid.html"> <span>Orra</span> </a> </li>
                              <li className="level2 nav-3-1-4 last"> <a href="grid.html"> <span>Ahilya</span> </a> </li>
                            </ul>
                          </li>
                          <li className="level1 nav-3-2 parent"> <a href="grid.html"> <span>Fashion Jewellery</span> </a><em>+</em>
                            <ul className="level1">
                              <li className="level2 nav-3-2-5 first"> <a href="grid.html"> <span>Earrings</span> </a> </li>
                              <li className="level2 nav-3-2-6"> <a href="grid.html"> <span>Rings</span> </a> </li>
                              <li className="level2 nav-3-2-7"> <a href="grid.html"> <span>Bangles &amp; Bracelets</span> </a> </li>
                              <li className="level2 nav-3-2-8 last"> <a href="grid.html"> <span>Pendants</span> </a> </li>
                            </ul>
                          </li>
                          <li className="level1 nav-3-3 parent"> <a href="grid.html"> <span>Mens Jewellery</span> </a><em>+</em>
                            <ul className="level1">
                              <li className="level2 nav-3-3-9 first"> <a href="grid.html"> <span>Neck Wear</span> </a> </li>
                              <li className="level2 nav-3-3-10"> <a href="grid.html"> <span>Cufflinks</span> </a> </li>
                              <li className="level2 nav-3-3-11"> <a href="grid.html"> <span>Wrist Wear</span> </a> </li>
                              <li className="level2 nav-3-3-12 last"> <a href="grid.html"> <span>Rings</span> </a> </li>
                            </ul>
                          </li>
                          <li className="level1 nav-3-4 parent"> <a href="grid.html"> <span>Designer</span> </a><em>+</em>
                            <ul className="level1">
                              <li className="level2 nav-3-4-13 first"> <a href="grid.html"> <span>Bbling</span> </a> </li>
                              <li className="level2 nav-3-4-14"> <a href="grid.html"> <span>Ciana</span> </a> </li>
                              <li className="level2 nav-3-4-15"> <a href="grid.html"> <span>Bansri</span> </a> </li>
                              <li className="level2 nav-3-4-16 last"> <a href="grid.html"> <span>Arsya</span> </a> </li>
                            </ul>
                          </li>
                          <li className="level1 nav-3-5 last parent"> <a href="grid.html"> <span>Platinum</span> </a><em>+</em>
                            <ul className="level1">
                              <li className="level2 nav-3-5-17 first"> <a href="grid.html"> <span>Earrings</span> </a> </li>
                              <li className="level2 nav-3-5-18"> <a href="grid.html"> <span>Rings</span> </a> </li>
                              <li className="level2 nav-3-5-19"> <a href="grid.html"> <span>Bangles &amp; Bracelets</span> </a> </li>
                              <li className="level2 nav-3-5-20 last"> <a href="grid.html"> <span>Pendants</span> </a> </li>
                            </ul>
                          </li>
                        </ul>
                      </Collapse>
                    </li>
                    <li className="level0 nav-10 level-top "> <a className="level-top" href="blog.html"> <span>Custom</span> </a> </li>
                  </ul>
                </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </div>
    )
  }
}

export default MobileNav