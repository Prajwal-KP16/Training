import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({ amount, hasError }) {
  const getCoins = (exRate) => {
    const amt = parseFloat(amount);
    if (hasError || isNaN(amt)) return "n/a";
    return (amt * exRate).toFixed(8);
  };

  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList &&
            cryptocurrencyList.length > 0 &&
            cryptocurrencyList.map((coin, index) => (
              <tr key={index}>
                <td>{coin.name}</td>
                <td>
                  1 USD = {coin.rate}
                  {coin.code}
                </td>
                <td>{amount === "" ? "0.00000000" : getCoins(coin.rate)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
