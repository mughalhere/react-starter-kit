import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Hi I am Dashboard
        <br />
        <NavLink to="/test">Page with header</NavLink>
      </div>
    );
  }
}
export default Dashboard;
