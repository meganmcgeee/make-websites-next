import React, { PropTypes } from 'react';

import styled from 'styled-components';

const HeroContainer = styled.header`
  background-image: ${props => props.theme.sectionBackgroundImage(`hero`)};
  background-position: center;
  background-size: 100% 100%;
  display: table;
  height: 90vh;
  position: relative;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: table-cell;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  width: 100%;
`;

const Logo = styled.img`
  height: 25vh;
  max-width: 90vw;
`;

const Hero = ({ site }) => (
  <HeroContainer>
    <LogoContainer>
      <Logo src={site.logo} alt={site.title} />
    </LogoContainer>
  </HeroContainer>
);

Hero.propTypes = {
  site: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
