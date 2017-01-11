import React, { PropTypes } from 'react';

const TeamMember = ({ description, imgSrc, link, name, variant }) => (
  <div className={`team-member team-member--${variant}`}>
    <div className="team-member__top">
      <div className="team-member__horizontal-line" />
      <div className="team-member__img-holder">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt={name} className="team-member__img" />
        </a>
      </div>
    </div>
    <div className="team-member__details-holder">
      <div className="team-member__details">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="team-member__name">{name}</h2>
          <p className="team-member__description">{description}</p>
        </a>
      </div>
    </div>
  </div>
);

TeamMember.propTypes = {
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([`matt`, `megan`]).isRequired,
};

export default TeamMember;
