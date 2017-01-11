import { Col, Grid, Row } from 'react-bootstrap';

import React from 'react';

export default () => (
  <section className="case-study">
    <Grid>
      <Row>
        <Col xs={12}>
          <h2 className="case-study__headline">Something cool here</h2>
          <div className="case-study__details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis illum
              saepe voluptates, laborum excepturi eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis illum
              saepe voluptates, laborum excepturi eligendi.
            </p>
          </div>
        </Col>
      </Row>
    </Grid>
  </section>
);
