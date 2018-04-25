import React, { Component } from "react";
import { render } from "react-dom";

// import css
import "../css/style.css";

// import a file
import logo from "../assets/react.png";

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react es6
        <img src={logo} alt="React" />
      </div>
    );
  }
}

render(<Hello />, document.getElementById("app"));
