import React, { PropTypes } from 'react';

import getTheme from '../../lib/getTheme';
import styled from 'styled-components';

const DescriptionSection = styled.div`
  padding-left: 42.5px;
`;

const Link = styled.a`
  color: ${getTheme(`colors.projectCardLink`)};
  font-size: 25px;
  font-weight: ${getTheme(`fontWeight.bold`)};

  &:hover {
    text-decoration: none;
  }
`;

const NameHeading = styled.h3`
  color: ${getTheme(`colors.projectCardName`)};
  font-size: 25px;
  font-weight: ${getTheme(`fontWeight.bold`)};
  letter-spacing: .5px;
  margin: 0 0 15px;
`;

const Details = styled.p`
  color: ${getTheme(`colors.projectCardDetails`)};
  font-size: 20px;
  font-weight: ${getTheme(`fontWeight.medium`)};
  letter-spacing: .4px;
  margin: 0 0 16px;
`;

const Description = ({ children: details, link, name }) => (
  <DescriptionSection className="media-body media-middle">
    <Link href={link} rel="noopener noreferrer" target="_blank">
      <NameHeading>{name}</NameHeading>
    </Link>
    <Details>{details}</Details>
    <Link href={link} rel="noopener noreferrer" target="_blank">
      live site ▸
    </Link>
  </DescriptionSection>
);

Description.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Description;
