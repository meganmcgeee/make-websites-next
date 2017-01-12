import { Col, Grid, Row } from 'react-bootstrap';
import React, { PropTypes } from 'react';

import BoldSubHeadline from './BoldSubHeadline';
import getColorKey from '../lib/getColorKey';
import sectionBackgroundImage from '../lib/sectionBackgroundImage';
import styled from 'styled-components';
import styles from '../data/styleVariables';

const CaseStudySection = styled.section`
  ${sectionBackgroundImage(`case-study`)}
  background-size: 100% 100%;
  padding: 140px 0;
  position: relative;
  z-index: 2;
`;

const Headline = styled(BoldSubHeadline)`
  color: ${getColorKey(`caseStudyHeading`)};
  margin: 0 0 60px;
`;

const Details = styled.div`
  color: ${getColorKey(`caseStudyDetails`)};
  font-size: 20px;
  font-weight: ${styles.fontWeight.medium};
  letter-spacing: .4px;

  > p {
    margin-bottom: 1.3em;
  }
`;

const CaseStudy = ({ slug }) => (
  <CaseStudySection slug={slug}>
    <Grid>
      <Row>
        <Col xs={12}>
          <Headline slug={slug}>Something cool here</Headline>
          <Details slug={slug}>
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

CaseStudy.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default CaseStudy;
