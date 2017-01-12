import React from 'react';
import TeamMember from './TeamMember';
import getTheme from '../../lib/getTheme';
import styled from 'styled-components';

const TeamSection = styled.section`
  background-image: ${props => props.theme.sectionBackgroundImage(`team`)};
  background-color: ${getTheme(`colors.teamBackground`)};
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

export default () => (
  <TeamSection id="team">
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
