import React from 'react';

const MainHeader = () => {
  return (
    <div className="header container">
      <div className="row">
        <div className="col-lg-2 col-sm-3 col-md-2"> 
          <a className="logo" title="Magento Commerce" href="index.html"><img alt="Magento Commerce" src="images/logo.png"/></a>
        </div>
        <div className="col-lg-8 col-sm-6 col-md-8">
          <div className="search-box">
            <form action="cat" method="POST" id="search_mini_form" name="Categories">
              <select name="category_id" className="cate-dropdown hidden-xs">
                <option value="0">All Categories</option>
                <option value="36">Camera</option>
                <option value="37">Electronics</option>
                <option value="42">&nbsp;&nbsp;&nbsp;Cell Phones</option>
                <option value="43">&nbsp;&nbsp;&nbsp;Cameras</option>
                <option value="44">&nbsp;&nbsp;&nbsp;Laptops</option>
                <option value="45">&nbsp;&nbsp;&nbsp;Hard Drives</option>
                <option value="46">&nbsp;&nbsp;&nbsp;Monitors</option>
                <option value="47">&nbsp;&nbsp;&nbsp;Mouse</option>
                <option value="48">&nbsp;&nbsp;&nbsp;Digital Cameras</option>
                <option value="38">Desktops</option>
                <option value="39">Computer Parts</option>
                <option value="40">Televisions</option>
                <option value="41">Featured</option>
              </select>
              <input type="text" placeholder="Search here..." value="" maxLength="70" className="" name="search" id="search"/>
              <button id="submit-button" className="search-btn-bg"><span>Search</span></button>
            </form>
          </div>
        </div>
        <div className="col-lg-2 col-sm-3 col-md-2">
          <div className="top-cart-contain">
            <div className="mini-cart">
              <div data-toggle="dropdown" data-hover="dropdown" className="basket dropdown-toggle"> <a href="#"> <i className="glyphicon glyphicon-shopping-cart"></i>
                <div className="cart-box"><span className="title">cart</span><span id="cart-total">2 item </span></div>
                </a></div>
              <div>
                <div className="top-cart-content arrow_box">
                  <div className="block-subtitle">Recently added item(s)</div>
                  <ul id="cart-sidebar" className="mini-products-list">
                    <li className="item even"> <a className="product-image" href="#" title="Downloadable Product "><img alt="Downloadable Product " src="products-images/product3.jpg" width="80"/></a>
                      <div className="detail-item">
                        <div className="product-details"> <a href="#" title="Remove This Item" onClick="" className="glyphicon glyphicon-remove">&nbsp;</a> <a className="glyphicon glyphicon-pencil" title="Edit item" href="#">&nbsp;</a>
                          <p className="product-name"> <a href="product_detail.html" title="Downloadable Product">Sample Product </a> </p>
                        </div>
                        <div className="product-details-bottom"> <span className="price">$100.00</span> <span className="title-desc">Qty:</span> <strong>1</strong> </div>
                      </div>
                    </li>
                    <li className="item last odd"> <a className="product-image" href="#" title="  Sample Product "><img alt="  Sample Product " src="products-images/product2.jpg" width="80"/></a>
                      <div className="detail-item">
                        <div className="product-details"> <a href="#" title="Remove This Item" onClick="" className="glyphicon glyphicon-remove">&nbsp;</a> <a className="glyphicon glyphicon-pencil" title="Edit item" href="#">&nbsp;</a>
                          <p className="product-name"> <a href="#" title="  Sample Product "> Sample Product </a> </p>
                        </div>
                        <div className="product-details-bottom"> <span className="price">$320.00</span> <span className="title-desc">Qty:</span> <strong>2</strong> </div>
                      </div>
                    </li>
                  </ul>
                  <div className="top-subtotal">Subtotal: <span className="price">$420.00</span></div>
                  <div className="actions">
                    <button className="btn-checkout" type="button"><span>Checkout</span></button>
                    <button className="view-cart" type="button"><span>View Cart</span></button>
                  </div>
                </div>
              </div>
            </div>
            <div id="ajaxconfig_info"><a href="#/"></a>
              <input value="" type="hidden"/>
              <input id="enable_module" value="1" type="hidden"/>
              <input className="effect_to_cart" value="1" type="hidden"/>
              <input className="title_shopping_cart" value="Go to shopping cart" type="hidden"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;