import React, { Component } from 'react';
import Header from '../layout/Header';


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