import React from 'react';
import PropTypes from 'prop-types';

const hamburger = ({ active, toggleMenu }) =>
  (
    <button
      id="toggle-main-menu-mobile"
      className={`hamburger hamburger--slider ${
        active ? 'is-active' : ''
        }`}
      type="button"
      onClick={toggleMenu}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );


hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
}

export default hamburger;
