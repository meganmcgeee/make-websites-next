import { Col, Grid, Row } from 'react-bootstrap';

import BoldSubHeadline from './BoldSubHeadline';
import React from 'react';
import styled from 'styled-components';
import styles from '../data/styleVariables';

const WhySection = styled.section`
  background-image: url('/static/images/why-background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  padding: 125px 0;
`;

const Headline = styled(BoldSubHeadline)`
  margin-top: 0;
`;

const ValuePropHeadline = styled(Headline)`
  margin-bottom: 60px;
`;

const BenefitsHeadline = styled(Headline)`
  margin-bottom: 27.5px;
`;

const Blurb = styled.p`
  color: ${styles.colors.veryDarkBlue};
  font-size: 27.5px;
  font-weight: 500;
  letter-spacing: .6px;
  margin-bottom: 1.3em;
`;

const BenefitsCol = styled(Col)`
  padding-top: 80px;
  text-align: right;
`;

const BenefitsList = styled.ul`
  color: ${styles.colors.veryDarkBlue};
  font-family: 'Gilroy', sans-serif;
  font-size: 45px;
  font-weight: 800;
  letter-spacing: .8px;
  list-style-type: none;
`;

export default () => (
  <WhySection id="why">
    <Grid>
      <Row>
        <Col sm={8}>
          <ValuePropHeadline>
            Why web apps?
          </ValuePropHeadline>
          <Blurb>
            Modern web apps are able to deliver an incredible desktop experience
            and a native-like mobile experience with the same codebase.
          </Blurb>
          <Blurb>
            Web apps can get your product on all devices &mdash; without hiring
            native mobile developers.
          </Blurb>
        </Col>
      </Row>
      <Row>
        <BenefitsCol sm={8} smOffset={4}>
          <BenefitsHeadline>
            Web apps are
          </BenefitsHeadline>
          <BenefitsList>
            <li>Cross-platform</li>
            <li>Easy to staff</li>
            <li>Efficient</li>
            <li>Fast</li>
          </BenefitsList>
        </BenefitsCol>
      </Row>
    </Grid>
  </WhySection>
);
