import React, { PropTypes } from 'react';

import styled from 'styled-components';
import styles from '../../data/styleVariables';

const borderColor = styles.colors.lightBlue;
const descriptionColor = styles.colors.lightBlue;
const shadowColor = `rgba(0, 0, 0, .2)`;
const borderWidth = `5px`;
const imgWidth = `150px`;
const paddingSize = `37.5px`;
const detailsWidth = imgWidth + ((borderWidth + paddingSize) * 2);

const Top = styled.div`
  margin-bottom: 45px;
  position: relative;
`;

const HorizLine = styled.div`
  background-color: ${styles.colors.lightBlue};
  height: 5px;
  position: absolute;
  top: calc(50% - 2.5px);
  width: calc(100% - 235px);
  ${props => props.variant === `matt` ? `right: 0;` : ``}
`;

const ImgHolder = styled.div`
  border: solid ${borderWidth} ${borderColor};
  border-radius: 50%;
  display: inline-block;
  padding: ${paddingSize};
`;

const Img = styled.img`
  border-radius: 50%;
  box-shadow: 0 5px 10px 0 $shadow-color;
  height: ${imgWidth};
  width: ${imgWidth};
`;

const Details = styled.div`
  display: inline-block;
  text-align: left;
  width: ${detailsWidth};
`;

const Name = styled.h2`
  color: ${styles.colors.white};
  font-size: 25px;
  font-weight: ${styles.fontWeight.bold};
  letter-spacing: .5px;
  margin: 0 0 5px;
`;

const Description = styled.p`
  color: ${descriptionColor};
  font-size: 20px;
  font-weight: ${styles.fontWeight.medium};
  letter-spacing: .4px;
  margin: 0;
`;

const side = props =>
  props.variant === `matt` ? `left` : `right`;

const TeamMemberWrapper = styled.div`
  padding-${side}: 100px;
  text-align: ${side};
`;

const TeamMember = ({ description, imgSrc, link, name, variant }) => (
  <TeamMemberWrapper variant={variant}>
    <Top>
      <HorizLine variant={variant} />
      <ImgHolder>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Img src={imgSrc} alt={name} />
        </a>
      </ImgHolder>
    </Top>
    <Details>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Name>{name}</Name>
        <Description>{description}</Description>
      </a>
    </Details>
  </TeamMemberWrapper>
);

TeamMember.propTypes = {
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([`matt`, `megan`]).isRequired,
};

export default TeamMember;
