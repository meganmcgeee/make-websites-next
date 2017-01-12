import { Col, Grid, Row } from 'react-bootstrap';

import BoldSubHeadline from './BoldSubHeadline';
import React from 'react';
import getTheme from '../lib/getTheme';
import styled from 'styled-components';
import styles from '../data/styleVariables';

const CaseStudySection = styled.section`
  background-image: ${props => props.theme.sectionBackgroundImage(`case-study`)};
  background-size: 100% 100%;
  padding: 140px 0;
  position: relative;
  z-index: 2;
`;

const Headline = styled(BoldSubHeadline)`
  color: ${getTheme(`colors.caseStudyHeading`)};
  margin: 0 0 60px;
`;

const Details = styled.div`
  color: ${getTheme(`colors.caseStudyDetails`)};
  font-size: 20px;
  font-weight: ${styles.fontWeight.medium};
  letter-spacing: .4px;

  > p {
    margin-bottom: 1.3em;
  }
`;

export default () => (
  <CaseStudySection>
    <Grid>
      <Row>
        <Col xs={12}>
          <Headline>Something cool here</Headline>
          <Details>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis illum
              saepe voluptates, laborum excepturi eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis illum
              saepe voluptates, laborum excepturi eligendi.
            </p>
          </Details>
        </Col>
      </Row>
    </Grid>
  </CaseStudySection>
);
