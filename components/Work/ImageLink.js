import React, { PropTypes } from 'react';

import { Media } from 'react-bootstrap';
import getTheme from '../../lib/getTheme';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .2);
  box-sizing: border-box;
  width: 225px;
`;

const ImageLink = Tag => {
  const ImgHolder = styled(Tag)`
    border: solid 5px ${getTheme(`colors.projectCardBorder`)};
    border-radius: 50%;
    padding: 37.5px;
  `;

  const Link = ({ alt, href, imgSrc }) => (
    <ImgHolder className="media-middle">
      <a href={href} rel="noopener noreferrer" target="_blank" >
        <Image alt={alt} className="media-object" src={imgSrc} />
      </a>
    </ImgHolder>
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
