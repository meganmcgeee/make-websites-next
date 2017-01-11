import React, { PropTypes } from 'react';

import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import cx from 'classnames';
import scroll from '../lib/scroll';

const navItem = item => (
  <li key={item.id}>
    <a href={`#${item.id}`} onClick={scroll(item.id)}>
      {item.text}
    </a>
  </li>
);

const Navbar = ({ navbarIsFixed, navItems, sisterSite }) => (
  <BootstrapNavbar
    className={cx({
      affix: navbarIsFixed,
      'affix-top': !navbarIsFixed,
    })}
    fluid
  >
    <BootstrapNavbar.Header>
      <button type="button" data-toggle="collapse" data-target="#site-nav" aria-expanded="false" className="navbar-toggle collapsed">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
    </BootstrapNavbar.Header>
    <div className="collapse navbar-collapse" id="site-nav">
      <ul className="nav navbar-nav">
        {navItems.map(navItem)}
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a
            className="navbar__contact-link"
            href="#contact"
            onClick={scroll(`contact`)}
          >
            contact us
          </a>
        </li>
        <li className="navbar__logo">
          <a className="navbar__logo-link" href={sisterSite.url}>
            <img src={sisterSite.logo} alt={sisterSite.title} />
          </a>
        </li>
      </ul>
    </div>
  </BootstrapNavbar>
);

Navbar.propTypes = {
  navbarIsFixed: PropTypes.bool.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  sisterSite: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Navbar;

