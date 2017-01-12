import React, { PropTypes } from 'react';

import TeamMember from './TeamMember';
import sectionBackgroundImage from '../../lib/sectionBackgroundImage';
import styled from 'styled-components';
import styles from '../../data/styleVariables';

const backgroundColor = props =>
  props.slug === `bots` ?
    `background-color: ${styles.colors.lightBlue}` :
    ``;

const TeamSection = styled.section`
  ${sectionBackgroundImage(`team`)}
  ${backgroundColor}
  background-size: 100% 100%;
  display: table;
  margin-top: -60px;
  padding: 150px 0;
  width: 100%;

  > * {
    display: table-cell;
    width: 50%;
  }
`;

const Team = ({ slug }) => (
  <TeamSection id="team" slug={slug}>
    <TeamMember
      description="Technologist for good"
      imgSrc="http://placekitten.com/150/150"
      link="http://meganmcgeee.com"
      name="Megan McGee"
      variant="megan"
    />
    <TeamMember
      description="Engineer extraordinaire"
      imgSrc="http://placekitten.com/150/150"
      link="http://mvj.fyi"
      name="Matthew Jesuele"
      variant="matt"
    />
  </TeamSection>
);

Team.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Team;
