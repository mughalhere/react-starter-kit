import React, { Component } from 'react';
import Header from '../layout/header';


class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    const { children } = this.props;
    return (
    <div>
        <Header />
        {children}
    </div>
    )
  }
}

export default HomeContainer;