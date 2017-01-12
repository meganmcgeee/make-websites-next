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
    <Navbar {...{ navbarIsFixed, navItems, sisterSite, slug: site.slug }} />
    <Hero site={site} />
    <Mission slug={site.slug} />
    <Why />
    <SomethingCool slug={site.slug} />
    <Work {...{ projects, sisterSite, slug: site.slug }} />
    <Team slug={site.slug} />
    <Contact slug={site.slug} />
  </div>
);

AppsView.propTypes = {
  fixNavbar: PropTypes.func.isRequired,
  navbarIsFixed: PropTypes.bool.isRequired,
};

export default navbarProvider(AppsView);
