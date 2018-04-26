import React, { Component } from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";

// import apollo client
import { client } from "./apollo";

// import css
import "../css/style.css";

// import a file
import logo from "../assets/react.png";

// import app components
import ExchangeRates from "./ExchangeRates";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          Hello from react es6 <br />
          <img src={logo} alt="React" />
          <br />
          <p>Apollo GraphQL Test (coinbase exchange rates):</p>
          <ExchangeRates />
        </div>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById("app"));
