import React, { PropTypes } from 'react';

import Description from './Description';
import ImageLink from './ImageLink';
import { Media } from 'react-bootstrap';
import styled from 'styled-components';

const ProjectCardMedia = styled(Media)`
  margin: 0 0 30px;
`;

const ProjectCard = {
  Left: ({ children, imgSrc, link, name }) => (
    <ProjectCardMedia>
      <ImageLink.Left alt={name} href={link} imgSrc={imgSrc} />
      <Description link={link} name={name}>
        {children}
      </Description>
    </ProjectCardMedia>
  ),
  Right: ({ children, imgSrc, link, name }) => (
    <ProjectCardMedia>
      <Description link={link} name={name}>
        {children}
      </Description>
      <ImageLink.Right alt={name} href={link} imgSrc={imgSrc} />
    </ProjectCardMedia>
  ),
};

const cardPropTypes = {
  children: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ProjectCard.Left.propTypes = cardPropTypes;
ProjectCard.Right.propTypes = cardPropTypes;

export default ProjectCard;
