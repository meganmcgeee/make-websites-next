import React, { PropTypes } from 'react';

import sectionBackgroundImage from '../lib/sectionBackgroundImage';
import styled from 'styled-components';
import styles from '../data/styleVariables';

const MissionSection = styled.section`
  ${sectionBackgroundImage(`mission`)}
  background-size: 100% 100%;
  box-sizing: border-box;
  margin-top: -12vh;
  padding-bottom: 200px;
  padding-top: calc(12vh + 160px);
`;

const Wrapper = styled.div`
  position: relative;
`;

const Text = styled.p`
  border: solid 5px ${styles.colors.lightBlue};
  border-radius: 5px;
  color: ${styles.colors.white};
  font-size: 27.5px;
  font-weight: ${styles.fontWeight.medium};
  margin: auto;
  max-width: 640px;
  padding: 47.5px 62.5px;
  text-align: center;
  width: 50%;
`;

const LeftLine = styled.div`
  background-color: ${styles.colors.lightBlue};
  height: 5px;
  min-width: calc(50% - 320px);
  position: absolute;
  top: calc(50% - 2.5px);
  width: 25%;
`;

const RightLine = styled(LeftLine)`
  right: 0;
`;

const Mission = ({ slug }) => (
  <MissionSection className="mission" slug={slug}>
    <Wrapper>
      <Text>
        We build web apps, chatbots, and the APIs that power them, for
        those who are ready for the next big thing.
      </Text>
      <LeftLine />
      <RightLine />
    </Wrapper>
  </MissionSection>
);

Mission.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Mission;
