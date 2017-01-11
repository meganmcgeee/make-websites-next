import { Col, Grid, Row } from 'react-bootstrap';
import React, { PropTypes } from 'react';

import ProjectCards from './ProjectCards';

const Work = ({ projects, sisterSite }) => (
  <section className="work" id="work">
    <Grid>
      <Row className="work__projects">
        <Col sm={10} smOffset={1}>
          <h2 className="work__headline">Our Work</h2>
          <ProjectCards projects={projects} />
        </Col>
      </Row>
      <div className="work__sister-site-button-holder">
        <a className="work__sister-site-button" href={`${sisterSite.url}#work`}>
          See our {sisterSite.title === `Make Apps` ? `apps` : `bots`}
        </a>
      </div>
    </Grid>
  </section>
);

Work.propTypes = {
  projects: ProjectCards.propTypes.projects,
  sisterSite: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Work;
