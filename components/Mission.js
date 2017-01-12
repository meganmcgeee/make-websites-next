import React from 'react';
import getTheme from '../lib/getTheme';
import styled from 'styled-components';

const MissionSection = styled.section`
  background-image: ${props => props.theme.sectionBackgroundImage(`mission`)};
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
  border: solid 5px ${getTheme(`colors.lightBlue`)};
  border-radius: 5px;
  color: ${getTheme(`colors.white`)};
  font-size: 27.5px;
  font-weight: ${getTheme(`fontWeight.medium`)};
  margin: auto;
  max-width: 640px;
  padding: 47.5px 62.5px;
  text-align: center;
  width: 50%;
`;

const LeftLine = styled.div`
  background-color: ${getTheme(`colors.lightBlue`)};
  height: 5px;
  min-width: calc(50% - 320px);
  position: absolute;
  top: calc(50% - 2.5px);
  width: 25%;
`;

const RightLine = styled(LeftLine)`
  right: 0;
`;

export default () => (
  <MissionSection className="mission">
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
