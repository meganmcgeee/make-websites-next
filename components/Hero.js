import React, { PropTypes } from 'react';

const Hero = ({ site }) => (
  <header className="hero">
    <div className="hero__logo__container">
      <img className="hero__logo__image" src={site.logo} alt={site.title} />
    </div>
  </header>
);

Hero.propTypes = {
  site: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
