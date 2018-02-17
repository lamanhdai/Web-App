import React from 'react';
import { Grid, Row, Col, Clearfix, ButtonToolbar, Dropdown, MenuItem } from 'react-bootstrap';

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

const LanguageDropdown = () => {
  return (
    <ButtonToolbar className="dropdown block-language-wrapper">
      <Dropdown id="dropdown-language">
        <Dropdown.Toggle className="block-language">
          <img src="images/english.png" alt="language"/>English
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem eventKey="1" active>
            <img src="images/english.png" alt="language"/>English
          </MenuItem>
          <MenuItem eventKey="2">
            <img src="images/francais.png" alt="language"/>French
          </MenuItem>
          <MenuItem eventKey="3">
            <img src="images/german.png" alt="language"/>German
          </MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonToolbar>
  )
}

const CurrencyDropdown = () => {
  return (
    <ButtonToolbar className="dropdown block-currency-wrapper">
      <Dropdown id="dropdown-currency">
        <Dropdown.Toggle className="block-currency">
          USD
        </Dropdown.Toggle>
        <Dropdown.Menu className="">
          <MenuItem eventKey="1" active>$ - Dollar</MenuItem>
          <MenuItem eventKey="2">£ - Pound</MenuItem>
          <MenuItem eventKey="3">€ - Euro</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonToolbar>
  )
}

const TopHeader = () => {
  return (
    <div className="header-top">
      <Grid>
        <Row> 
          <Col xs={6}>
            <LanguageDropdown />
            <CurrencyDropdown />
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
