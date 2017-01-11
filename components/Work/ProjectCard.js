import React, { PropTypes } from 'react';

import Description from './Description';
import ImageLink from './ImageLink';
import { Media } from 'react-bootstrap';

const ProjectCard = {
  Left: ({ children, imgSrc, link, name }) => (
    <Media className="project-card">
      <ImageLink.Left alt={name} href={link} imgSrc={imgSrc} />
      <Description link={link} name={name}>
        {children}
      </Description>
    </Media>
  ),
  Right: ({ children, imgSrc, link, name }) => (
    <Media className="project-card">
      <Description link={link} name={name}>
        {children}
      </Description>
      <ImageLink.Right alt={name} href={link} imgSrc={imgSrc} />
    </Media>
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
