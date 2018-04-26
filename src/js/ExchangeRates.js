import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      const options = data.rates.map(({ currency, rate }) => (
        <option key={currency} value={rate}>
          {`${currency}: ${rate}`}
        </option>
      ));

      return <select>{options}</select>;
    }}
  </Query>
);

export default ExchangeRates;
