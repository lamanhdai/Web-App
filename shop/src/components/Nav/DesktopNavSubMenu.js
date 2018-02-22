import React from 'react';
import PropTypes from 'prop-types';

class DesktopNavSubMenu extends React.Component {
  toggleMenu(index) {
    this.props.toggleChildMenu(index);
  }

  render() {
    return (
      <ul className={`level1 slide-menu ${this.props.show ? 'slide-down' : 'slide-up'}`}>
          {this.props.subMenu.map((item, i) => (
            <li
              className="level1 first parent"
              onMouseEnter={() => this.toggleMenu(i)}
              onMouseLeave={() => this.toggleMenu(i)}
              key={item.text}
            >
              <a href="grid"><span>Submenu</span></a>
              <ul className={`level2 ${item.isHover ? 'right-menu': ''}`}>
                {item.childMenu.map((subItem, i) => (
                  <li
                    className={`level2 ${i === 0 ? 'first' : `nav-1-1-${i}`}`}
                    key={JSON.stringify(subItem)}
                  >
                    <a href="#"><span>subItem.text</span></a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    )
  }
}

DesktopNavSubMenu.propTypes = {
  show: PropTypes.bool.isRequired,
  subMenu: PropTypes.array.isRequired,
  toggleChildMenu: PropTypes.func.isRequired,
};

export default DesktopNavSubMenu