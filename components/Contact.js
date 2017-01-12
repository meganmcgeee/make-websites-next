import { Col, Grid, Row } from 'react-bootstrap';
import React, { PropTypes } from 'react';

import BoldSubHeadline from './BoldSubHeadline';
import styled from 'styled-components';
import styles from '../data/styleVariables';

const backgroundColor = props =>
  props.slug === `bots` ?
    `background-color: ${styles.colors.lightBlue}` :
    ``;

const ContactSection = styled.section`
  ${backgroundColor}
  padding: 115px 0 130px;
`;

const headingColor = props =>
  styles.colors[props.slug].contactHeading;
const Text = styled(BoldSubHeadline)`
  color: ${headingColor};
  line-height: 1.2;
`;

const CTAButtonHolder = styled(Col)`
  text-align: center;
  vertical-align: middle !important;
`;

const CTAButton = styled.a`
  background-color: transparent;
  border: solid 3px ${styles.colors.veryDarkBlue};
  border-radius: 5px;
  color: ${styles.colors.veryDarkBlue};
  font-size: 20px;
  font-weight: ${styles.fontWeight.bold};
  letter-spacing: .4px;
  padding: 15px 37.5px;

  &:focus,
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

const TableRow = styled(Row)`
  @media only screen and (min-width: 768px) {
    display: table;
    width: 100%;

    [class*="col-"] {
      display: table-cell;
      float: none;
      vertical-align: top;
    }
  }
`;

const Contact = ({ slug }) => (
  <ContactSection className="contact" id="contact">
    <Grid>
      <TableRow>
        <Col sm={1} />
        <Col className="contact__text" sm={6}>
          <Text slug={slug}>
            Ready for your<br />
            next big thing?
          </Text>
        </Col>
        <CTAButtonHolder sm={3}>
          <CTAButton href="mailto:shout@makeapps.io">let's talk</CTAButton>
        </CTAButtonHolder>
        <Col sm={2} />
      </TableRow>
    </Grid>
  </ContactSection>
);

Contact.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Contact;
