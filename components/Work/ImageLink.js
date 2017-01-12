import React, { PropTypes } from 'react';

import { Media } from 'react-bootstrap';
import styled from 'styled-components';
import styles from '../../data/styleVariables';

const ImageLink = Tag => {
  const ImgHolder = styled(Tag)`
    border: solid 5px ${props => styles.colors[props.slug].borderColor};
    border-radius: 50%;
    padding: 37.5px;
  `;
  const Link = ({ alt, href, imgSrc, slug }) => (
    <ImgHolder className="media-middle" slug={slug}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img className="media-object project-card__img" src={imgSrc} alt={alt} />
      </a>
    </ImgHolder>
  );
  Link.propTypes = {
    alt: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  };
  return Link;
};

/* eslint-disable fp/no-mutation */
ImageLink.Left = ImageLink(Media.Left);
ImageLink.Right = ImageLink(Media.Right);
/* eslint-enable fp/no-mutation */

export default ImageLink;
