import React, { useState } from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logo from '../images/logo.svg';
import logoMobile from '../images/logo-mobile.svg';
import MenuMobile from './MenuMobile';

const header = () => {

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img alt="Beet home" src={logo} />
          </Link>
        </div>
        <div className="logo-mobile">
          <Link to="/">
            <img alt="Beet home" src={logoMobile} />
          </Link>
        </div>
        <MenuMobile active={menuActive} />
        <Menu />
        <Hamburger active={menuActive} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}

export default header;
