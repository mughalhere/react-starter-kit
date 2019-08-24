import React, { Component } from "react";
import "../styles/App.css";

const styles = {
  root: {
    height: 768
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="animate-opacity text-white">
        <div className="display-middle">
          <h1 className="jumbo animate-top">React Starter</h1>
          <hr
            className="border-grey"
            style={{ margin: "auto", width: "40%" }}
          />
          <p className="large center">
            Set up a modern web app easily.
            <br />
            <br />
            <a
              className="button"
              href="https://github.com/mughalhere/react-kit/blob/master/README.md"
            >
              Documentation
            </a>
          </p>
        </div>
        <div className="display-bottomleft padding-large">
          Powered by{" "}
          <a href="https://github.com/mughalhere" target="_blank">
            mughalhere
          </a>
        </div>
      </div>
    );
  }
}
export default Dashboard;