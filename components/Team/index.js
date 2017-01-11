import React from 'react';
import TeamMember from './TeamMember';

export default () => (
  <section id="team" className="team">
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
  </section>
);
