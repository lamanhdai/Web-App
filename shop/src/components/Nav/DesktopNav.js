import React from 'react';
import DesktopNavSubMenu from './DesktopNavSubMenu';

class DesktopNav extends React.Component {
  state = {
    show: false,
    showSubMenu: false,
    subMenu: [
      {
        link: "#",
        text: "Submenu",
        isHover: false,
        childMenu: [
          {
            link: "#",
            text: "Menu1",
          },
          {
            link: "#",
            text: "Menu2",
          },
          {
            link: "#",
            text: "Menu3",
          },
          {
            link: "#",
            text: "Menu4",
          },
          {
            link: "#",
            text: "Menu5",
          }
        ]
      },
      {
        link: "#",
        text: "Submenu1",
        isHover: false,
        childMenu: []
      }
    ],
  }

  toggleSubMenu() {
    this.setState({
      show: !this.state.show
    })
  }

  toggleChildMenu = (index) => {
    let subMenu = this.state.subMenu;
    for(let i=0;i<subMenu.length;i++) {
      if(i === index) {
        subMenu[i].isHover = true;
      } else subMenu[i].isHover = false;
    }
    this.setState({
      subMenu: subMenu,
      showSubMenu: !this.state.showSubMenu
    })
  }

  render() {
    return (
      <ul id="nav" className="hidden-xs">
        <li id="nav-home" className="level0 parent drop-menu">
          <a href="index.html" className="active"><span>Home</span></a>
          <ul className="level1">
            <li className="level1 first parent"><a href="../../Variation1/blue/index.html"><span>Home Version 1</span></a> </li>
            <li className="level1 first parent"><a href="../../Variation2/blue/index.html"><span>Home Version 2</span></a> </li>
            <li className="level1 parent"><a href="../../Variation1/blue/index.html"><span>Blue</span></a> </li>
            <li className="level1 parent"><a href="../../Variation1/red/index.html"><span>Red</span></a> </li>
            <li className="level1 parent"><a href="../../Variation1/lavender/index.html"><span>Lavender</span></a> </li>
            <li className="level1 parent"><a href="../../Variation1/green/index.html"><span>Green</span></a> </li>
            <li className="level1 parent"><a href="../../Variation1/emerald/index.html"><span>Emerald</span></a> </li>
          </ul>
        </li>
        <li className="level0 parent drop-menu">
          <a href="#"><span>Pages</span> </a>
          <ul className="level1">
            <li className="level1 first"><a href="grid.html"><span>Grid</span></a></li>
            <li className="level1 nav-10-2"> <a href="list.html"> <span>List</span> </a> </li>
            <li className="level1 nav-10-3"> <a href="product_detail.html"> <span>Product Detail</span> </a> </li>
            <li className="level1 nav-10-4"> <a href="shopping_cart.html"> <span>Shopping Cart</span> </a> </li>
            <li className="level1 first parent"><a href="checkout.html"><span>Checkout</span></a> </li>
            <li className="level1 nav-10-4"> <a href="wishlist.html"> <span>Wishlist</span> </a> </li>
            <li className="level1"> <a href="dashboard.html"> <span>Dashboard</span> </a> </li>
            <li className="level1"> <a href="multiple_addresses.html"> <span>Multiple Addresses</span> </a> </li>
            <li className="level1"> <a href="about_us.html"> <span>About us</span> </a> </li>
            <li className="level1"> <a href="compare.html"> <span>Compare</span> </a> </li>
            <li className="level1"> <a href="faq.html"> <span>FAQ</span> </a> </li>
            <li className="level1"> <a href="login.html"> <span>Login</span> </a> </li>
            <li className="level1"> <a href="quick_view.html"> <span>Quick view </span> </a> </li>
            <li className="level1 first parent"><a href="blog.html"><span>Blog</span></a>
              <ul className="level2">
                <li className="level2 nav-2-1-1 first"><a href="blog_detail.html"><span>Blog Detail</span></a></li>
              </ul>
            </li>
            <li className="level1"><a href="contact_us.html"><span>Contact us</span></a> </li>
            <li className="level1"><a href="404error.html"><span>404 Error Page</span></a> </li>
          </ul>
        </li>
        <li className="level0 nav-6 level-top parent">
          <a href="grid.html" className="level-top"> <span>Women</span> </a>
          <div className="level0-wrapper dropdown-6col">
            <div className="level0-wrapper2">
              <div className="nav-block nav-block-center grid12-8 itemgrid itemgrid-4col"> 
                <ul className="level0">
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Clothing</span></a> 
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Western Wear</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Night Wear</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Ethnic Wear</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Designer Wear</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Watches</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fashion</span></a> </li>
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Dress</span></a> </li>
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Sports</span></a> </li>
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Casual</span></a> </li>
                    </ul>
                  </li>
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Styliest Bag</span></a> 
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Clutch Handbags</span></a> </li>
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Diaper Bags</span></a> </li>
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bags</span></a> </li>
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Hobo Handbags</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Material Bag</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Beaded Handbags</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fabric Handbags</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Handbags</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Leather Handbags</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                </ul>
                
                
                <div className="fur-des">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa.</p>
                </div>
              </div>
              <div className="nav-block nav-block-right std grid12-4">
                <div className="static-img-block"><a href="#"><img src="images/nav-img1.jpg" alt="Responsive"/></a></div>
              </div>
            </div>
          </div>
        </li>
        <li className="level0 nav-5 level-top first">
          <a className="level-top" href="grid.html"> <span>Men</span> </a>
          <div className="level0-wrapper dropdown-6col">
            <div className="level0-wrapper2">
              <div className="nav-block nav-block-center">
                <ul className="level0">
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Clothing</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Casual Wear</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Formal Wear</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Ethnic Wear</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Denims</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Shoes</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Formal Shoes</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Sport Shoes</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Canvas Shoes</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Leather Shoes</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Watches</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Digital</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Chronograph</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Sports</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Casual</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Jackets</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Coats</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Formal Jackets</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Leather Jackets</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Blazers</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Sunglasses</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Ray Ban</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Fasttrack</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Police</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Oakley</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                </ul>
                
              </div>
            </div>
            <div className="nav-add">
              <div className="push_item">
                <div className="push_img"><a href="#"><img src="images/menu-sunglass.png" alt="sunglass"/></a></div>
              </div>
              <div className="push_item">
                <div className="push_img"><a href="#"><img src="images/menu-sunglass.png" alt="watch"/></a></div>
              </div>
              <div className="push_item">
                <div className="push_img"><a href="#"><img src="images/menu-sunglass.png" alt="jeans"/></a></div>
              </div>
              <div className="push_item">
                <div className="push_img"><a href="#"><img src="images/menu-sunglass.png" alt="shoes"/></a></div>
              </div>
              <div className="push_item push_item_last">
                <div className="push_img"><a href="#"><img src="images/menu-sunglass.png" alt="swimwear"/></a></div>
              </div>
            </div>
          </div>
        </li>
        <li className="level0">
          <a className="level-top" href="grid.html"><span>Jewellery</span></a>
          <div className="level0-wrapper dropdown-6col">
            <div className="level0-wrapper2">
              <div className="nav-block nav-block-center"> 
                
                
                
                <ul className="level0">
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Precious Jewellery</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Gitanjali</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Tara</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Orra</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Ahilya</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Fashion Jewellery</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Earrings</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Rings</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bangles &amp; Bracelets</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Pendants</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Mens Jewellery</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Neck Wear</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Cufflinks</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Wrist Wear</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Rings</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Designer</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bbling</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Ciana</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bansri</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Arsya</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                  <li className="level3 nav-6-1 parent item"> <a href="grid.html"><span>Platinum</span></a> 
                    
                    
                    <ul className="level1">
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Earrings</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Rings</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Bangles &amp; Bracelets</span></a> </li>
                      
                      <li className="level2 nav-6-1-1"> <a href="grid.html"><span>Pendants</span></a> </li>
                      
                    </ul>
                    
                    
                    
                    
                  </li>
                  
                  
                </ul>
                
                
              </div>
              
              
            </div>
            
            
          </div>
          
          
          
          
        </li>
        <li
          className="level0 parent drop-menu"
          onMouseEnter={() => this.toggleSubMenu()}
          onMouseLeave={() => this.toggleSubMenu()}
        >
          <a href="grid.html"><span>Sub menu</span>
          </a>
          <DesktopNavSubMenu
            show={this.state.show}
            subMenu={this.state.subMenu}
            toggleChildMenu={this.toggleChildMenu}
          ></DesktopNavSubMenu>
        </li>
        <li className="nav-custom-link level0 level-top parent">
          <a className="level-top" href="#"><span>Custom</span></a>
          <div className="level0-wrapper custom-menu">
            <div className="header-nav-dropdown-wrapper clearer">
              <div className="grid12-5">
                <div className="custom_img"><a href="#"><img src="images/custom-img1.jpg" alt="custom img1"/></a></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                <button type="button" title="Add to Cart" className="learn_more_btn"><span>Learn More</span></button>
              </div>
              <div className="grid12-5">
                <div className="custom_img"><a href="#"><img src="images/custom-img2.jpg" alt="custom img2"/></a></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                <button type="button" title="Add to Cart" className="learn_more_btn"><span>Learn More</span></button>
              </div>
              <div className="grid12-5">
                <div className="custom_img"><a href="#"><img src="images/custom-img3.jpg" alt="custom img3"/></a></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                <button type="button" title="Add to Cart" className="learn_more_btn"><span>Learn More</span></button>
              </div>
              <div className="grid12-5">
                <div className="custom_img"><a href="#"><img src="images/custom-img4.jpg" alt="custom img4"/></a></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue.</p>
                <button type="button" title="Add to Cart" className="learn_more_btn"><span>Learn More</span></button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    )
  }
}

export default DesktopNav