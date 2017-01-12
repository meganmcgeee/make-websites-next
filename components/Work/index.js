import { Col, Grid, Row } from 'react-bootstrap';
import React, { PropTypes } from 'react';

import BoldSubHeadline from '../BoldSubHeadline';
import ProjectCards from './ProjectCards';
import getTheme from '../../lib/getTheme';
import styled from 'styled-components';

const WorkSection = styled.section`
  background-image: ${props => props.theme.sectionBackgroundImage(`work`)};
  background-size: 100% 100%;
  margin-top: -70px;
  padding: 120px 0 140px;
  position: relative;
  z-index: 1;
`;

const Headline = styled(BoldSubHeadline)`
  color: ${getTheme(`colors.white`)};
  margin-bottom: 72.5px;
`;

const SisterSiteButtonHolder = styled.div`
  padding-top: 40px;
  text-align: center;
`;

const SisterSiteButton = styled.a`
  background-color: transparent;
  border: solid 3px ${getTheme(`colors.sisterSiteButton`)};
  border-radius: 5px;
  color: ${getTheme(`colors.sisterSiteButton`)};
  font-size: 20px;
  font-weight: ${getTheme(`fontWeight.bold`)};
  letter-spacing: .4px;
  padding: 15px 38px;
  text-transform: lowercase;

  &:focus,
  &:hover {
    color: ${getTheme(`colors.sisterSiteButton`)};
    text-decoration: none;
  }
`;

const Work = ({ projects, sisterSite }) => (
  <WorkSection id="work">
    <Grid>
      <Row className="work__projects">
        <Col sm={10} smOffset={1}>
          <Headline>Our Work</Headline>
          <ProjectCards projects={projects} />
        </Col>
      </Row>
      <SisterSiteButtonHolder>
        <SisterSiteButton
          className="work__sister-site-button"
          href={`${sisterSite.url}#work`}
        >
          See our {sisterSite.title === `Make Apps` ? `apps` : `bots`}
        </SisterSiteButton>
      </SisterSiteButtonHolder>
    </Grid>
  </WorkSection>
);

Work.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  sisterSite: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Work;
