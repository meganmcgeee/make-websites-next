import { Col, Grid, Row } from 'react-bootstrap';

import React from 'react';

export default () => (
  <section className="contact" id="contact">
    <Grid>
      <Row className="is-table-row">
        <Col sm={1} />
        <Col className="contact__text" sm={6}>
          <p>
            Ready for your<br />
            next big thing?
          </p>
        </Col>
        <Col className="contact__cta-button-holder valign-middle" sm={3}>
          <a className="contact__cta-button" href="mailto:shout@makeapps.io">let's talk</a>
        </Col>
        <Col sm={2} />
      </Row>
    </Grid>
  </section>
);
