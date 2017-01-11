import React, { Component } from 'react';

export default Page => class extends Component {
  state = {
    navbarIsFixed: false,
  };

  fixNavbar = ({ currentPosition }) =>
    this.setState({
      navbarIsFixed: currentPosition !== `inside`,
    });

  render() {
    return (
      <Page
        fixNavbar={this.fixNavbar}
        navbarIsFixed={this.state.navbarIsFixed}
      />
    );
  }
};
