import { Col, Grid, Row } from 'react-bootstrap';

import BoldSubHeadline from './BoldSubHeadline';
import React from 'react';
import getTheme from '../lib/getTheme';
import styled from 'styled-components';

const ContactSection = styled.section`
  background-color: ${getTheme(`colors.contactBackground`)}
  padding: 115px 0 130px;
`;

const Text = styled(BoldSubHeadline)`
  color: ${getTheme(`colors.contactHeading`)};
  line-height: 1.2;
`;

const CTAButtonHolder = styled(Col)`
  text-align: center;
  vertical-align: middle !important;
`;

const CTAButton = styled.a`
  background-color: transparent;
  border: solid 3px ${getTheme(`colors.veryDarkBlue`)};
  border-radius: 5px;
  color: ${getTheme(`colors.veryDarkBlue`)};
  font-size: 20px;
  font-weight: ${getTheme(`fontWeight.bold`)};
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

export default () => (
  <ContactSection className="contact" id="contact">
    <Grid>
      <TableRow>
        <Col sm={1} />
        <Col className="contact__text" sm={6}>
          <Text>
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
