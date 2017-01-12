import React, { PropTypes } from 'react';

import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import cx from 'classnames';
import scroll from '../lib/scroll';
import styled from 'styled-components';
import styles from '../data/styleVariables';

const navbarHeight = `44px`;
const buttonBorderWidth = `2px`;
const navbarShadowColor = `rgba(0, 0, 0, .2)`;

const MakeNavbar = styled(BootstrapNavbar)`
  background: transparent;
  background-color: transparent;
  border-color: transparent;
  border-radius: 0;
  font-size: 15px;
  font-weight: ${styles.fontWeight.bold};
  left: 0;
  letter-spacing: .3px;
  margin: 30px 0 0;
  min-height: ${navbarHeight} + 2px;
  padding: 1px 75px;
  position: fixed;
  right: 0;
  transition:
    background-color .5s ease-in-out,
    box-shadow .5s ease-in-out,
    margin .5s ease-in-out,
    padding .5s ease-in-out;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 50px;
`;

const ContactLink = styled.a`
  border: solid ${buttonBorderWidth} transparent;
  border-radius: 5px;
  transition:
    border .5s ease-in-out,
    line-height .5s ease-in-out,
    padding .5s ease-in-out;
`;

const getColorKey = key => props =>
  styles.colors[props.slug][key];

const NavItem = styled.li`
  height: ${navbarHeight};

  &:not(:first-child) {
    margin-left: 60px;
  }

  &:not(:last-child) {
    margin-right: 60px;
  }

  > a {
    color: ${getColorKey(`navbarLink`)} !important;
    height: 100%;
    line-height: ${navbarHeight} !important;
    padding: 0 !important;
  }

  > a:hover {
    color: ${getColorKey(`navbarLinkHover`)} !important;
  }

  > a:active {
    color: ${getColorKey(`navbarLinkHover`)} !important;
  }
`;

const toNavItem = slug => item => (
  <NavItem key={item.id} slug={slug}>
    <a href={`#${item.id}`} onClick={scroll(item.id)}>
      {item.text}
    </a>
  </NavItem>
);

const Navbar = ({ navbarIsFixed, navItems, sisterSite, slug }) => (
  <MakeNavbar
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
        {navItems.map(toNavItem(slug))}
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <NavItem slug={slug}>
          <ContactLink
            className="navbar__contact-link"
            href="#contact"
            onClick={scroll(`contact`)}
          >
            contact us
          </ContactLink>
        </NavItem>
        <NavItem slug={slug}>
          <a href={sisterSite.url}>
            <Logo src={sisterSite.logo} alt={sisterSite.title} />
          </a>
        </NavItem>
      </ul>
    </div>
  </MakeNavbar>
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
  slug: PropTypes.string.isRequired,
};

export default Navbar;

