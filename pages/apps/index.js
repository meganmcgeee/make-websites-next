import React, { PropTypes } from 'react';

import Contact from '../../components/Contact';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Mission from '../../components/Mission';
import Navbar from '../../components/Navbar';
import SomethingCool from '../../components/SomethingCool';
import Team from '../../components/Team';
import Waypoint from 'react-waypoint';
import Why from '../../components/Why';
import Work from '../../components/Work';
import createSite from '../../lib/createSite';
import navItems from '../../data/appNavItems';
import navbarProvider from '../../hocs/navbarProvider';
import projects from '../../data/appProjects';

const site = createSite(`Apps`);
const sisterSite = createSite(`Bots`);

const AppsView = ({ fixNavbar, navbarIsFixed }) => (
  <div className="apps">
    <Header site={site} />
    <Waypoint onPositionChange={fixNavbar} />
    <Navbar {...{ navbarIsFixed, navItems, sisterSite }} />
    <Hero site={site} />
    <Mission />
    <Why />
    <SomethingCool />
    <Work {...{ projects, sisterSite }} />
    <Team />
    <Contact />
  </div>
);

AppsView.propTypes = {
  fixNavbar: PropTypes.func.isRequired,
  navbarIsFixed: PropTypes.bool.isRequired,
};

export default navbarProvider(AppsView);
