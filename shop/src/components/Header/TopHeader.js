import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

const LanguageButton = [
  {
    url: "#",
    photo: "images/english.png",
    label: "English"
  },
  {
    url: "#",
    photo: "images/francais.png",
    label: "French"
  },
  {
    url: "#",
    photo: "images/german.png",
    label: "German"
  }
];

const CurrencyButton = [
  {
    url: "#",
    unit: "USD",
    label: "$ - Dollar"
  },
  {
    url: "#",
    unit: "POU",
    label: "£ - Pound"
  },
  {
    url: "#",
    unit: "EUR",
    label: "€ - Euro"
  },
];

const TopHeader = () => {
  return (
    <div className="header-top">
      <Grid>
        <Row> 
          <Col xs={6}>
            <div className="dropdown block-language-wrapper">
              <a role="button" data-toggle="dropdown" data-target="#" className="block-language dropdown-toggle" href="#">
                <img src="images/english.png" alt="language"/>
                English<span className="caret"></span>
              </a>
              <ul className="dropdown-menu" role="menu">
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#"><img src="images/english.png" alt="language"/>English</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#"><img src="images/francais.png" alt="language"/> French </a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#"><img src="images/german.png" alt="language"/> German </a></li>
              </ul>
            </div>
            <div className="dropdown block-currency-wrapper">
              <a role="button" data-toggle="dropdown" data-target="#" className="block-currency dropdown-toggle" href="#"> USD <span className="caret"></span></a>
              <ul className="dropdown-menu" role="menu">
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#"> $ - Dollar </a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#"> £ - Pound </a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#"> € - Euro </a></li>
              </ul>
            </div>
            <div className="welcome-msg hidden-xs"> Default welcome msg! </div>
          </Col>
          <Col xs={6}> 
            <div className="toplinks">
              <div className="links">
                <div className="myaccount"><a title="My Account" href="login.html"><span className="hidden-xs">My Account</span></a></div>
                <div className="wishlist"><a title="My Wishlist"  href="wishlist.html"><span className="hidden-xs">Wishlist</span></a></div>
                <div className="check"><a title="Checkout" href="checkout.html"><span className="hidden-xs">Checkout</span></a></div>
                <div className="login"><a title="Login" href="login.html"><span  className="hidden-xs">Log In</span></a></div>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default TopHeader;
