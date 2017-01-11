import { Col, Grid, Row } from 'react-bootstrap';
import React, { PropTypes } from 'react';

const stringChild = { children: PropTypes.string.isRequired };

const Headline = ({ children }) => (
  <h2 className="why__headline">{children}</h2>
);
Headline.propTypes = stringChild;

const Blurb = ({ children }) => (
  <p className="why__blurb">
    {children}
  </p>
);
Blurb.propTypes = stringChild;

export default () => (
  <section className="why" id="why">
    <Grid>
      <Row>
        <Col className="why__value-prop" sm={8}>
          <Headline>
            Why web apps?
          </Headline>
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
        <Col className="why__benefits" sm={8} smOffset={4}>
          <Headline>
            Web apps are
          </Headline>
          <ul className="why__benefit-list">
            <li>Cross-platform</li>
            <li>Easy to staff</li>
            <li>Efficient</li>
            <li>Fast</li>
          </ul>
        </Col>
      </Row>
    </Grid>
  </section>
);
