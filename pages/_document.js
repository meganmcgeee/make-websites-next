import Document, { Head, Main, NextScript } from 'next/document';

import React from 'react';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import styled from 'styled-components';
import styles from '../data/styleVariables';

const Body = styled.body`
  @font-face {
    font-family: 'Avenir Next';
    src: url('/static/fonts/AvenirNext-Medium.eot');
    src:
      url('/static/fonts/AvenirNext-Medium.eot?#iefix') format('embedded-opentype'),
      url('/static/fonts/AvenirNext-Medium.woff') format('woff'),
      url('/static/fonts/AvenirNext-Medium.ttf') format('truetype'),
      url('/static/fonts/AvenirNext-Medium.svg#Avenir Next Medium') format('svg');
    font-style: normal;
    font-weight: ${styles.fontWeight.medium};
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('/static/fonts/AvenirNext-Bold.eot');
    src:
      url('/static/fonts/AvenirNext-Bold.eot?#iefix') format('embedded-opentype'),
      url('/static/fonts/AvenirNext-Bold.woff') format('woff'),
      url('/static/fonts/AvenirNext-Bold.ttf') format('truetype'),
      url('/static/fonts/AvenirNext-Bold.svg#Avenir Next') format('svg');
    font-style: normal;
    font-weight: ${styles.fontWeight.bold};
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('/static/fonts/Gilroy-ExtraBold.otf') format('opentype');
    font-style: normal;
    font-weight: ${styles.fontWeight.extraBold};
  }

  font-family: 'Avenir Next', sans-serif;
`;

export default class MakeWebsite extends Document {
  static async getInitialProps ({ renderPage }) {
    return {
      ...renderPage(),
      style: styleSheet.rules()
        .map(rule => rule.cssText)
        .join(`\n`),
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </html>
    );
  }
}
