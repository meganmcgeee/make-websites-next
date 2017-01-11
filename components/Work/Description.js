import React, { PropTypes } from 'react';

const Description = ({ children: details, link, name }) => (
  <div className="media-body media-middle project-card__description">
    <h3 className="project-card__name">{name}</h3>
    <p className="project-card__details">{details}</p>
    <a className="project-card__link" href={link} target="_blank" rel="noopener noreferrer">
      live site ▸
    </a>
  </div>
);

Description.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Description;
