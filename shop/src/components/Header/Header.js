import React from 'react';
import TopHeader from './TopHeader';
import MainHeader from './MainHeader';

const Header = ({ message }) => {
  return (
    <header className="Header header-container">
      <TopHeader />
      <MainHeader />
    </header>
  );
};

Header.propTypes = {
  message: React.PropTypes.string
};

export default Header;