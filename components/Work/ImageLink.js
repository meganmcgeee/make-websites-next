import React, { PropTypes } from 'react';

import { Media } from 'react-bootstrap';

const ImageLink = Tag => {
  const Link = ({ alt, href, imgSrc }) => (
    <Tag className="media-middle project-card__img-holder">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img className="media-object project-card__img" src={imgSrc} alt={alt} />
      </a>
    </Tag>
  );
  Link.propTypes = {
    alt: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  };
  return Link;
};

/* eslint-disable fp/no-mutation */
ImageLink.Left = ImageLink(Media.Left);
ImageLink.Right = ImageLink(Media.Right);
/* eslint-enable fp/no-mutation */

export default ImageLink;
