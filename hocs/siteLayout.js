import React, { PropTypes } from 'react';

import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Navbar from '../components/Navbar';
import SomethingCool from '../components/SomethingCool';
import Team from '../components/Team';
import { ThemeProvider } from 'styled-components';
import Waypoint from 'react-waypoint';
import Why from '../components/Why';
import Work from '../components/Work';
import navItems from '../lib/navItems';
import projects from '../lib/projects';
import theme from '../data/theme';

export default (site, sisterSite) => {
  const View = ({ fixNavbar, navbarIsFixed }) => (
    <ThemeProvider theme={theme(site.slug)}>
      <div className="apps">
        <Header title={site.title} />
        <Waypoint onPositionChange={fixNavbar} />
        <Navbar {...{ navbarIsFixed, navItems: navItems(site.slug), sisterSite }} />
        <Hero site={site} />
        <Mission />
        <Why />
        <SomethingCool />
        <Work {...{ projects: projects(site.slug), sisterSite }} />
        <Team />
        <Contact />
      </div>
    </ThemeProvider>
  );

  View.propTypes = {
    fixNavbar: PropTypes.func.isRequired,
    navbarIsFixed: PropTypes.bool.isRequired,
  };

  return View;
};
