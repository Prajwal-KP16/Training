import React, { useState } from "react";
import Table from "./Table";

function Main() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const availBalance = 17042.67;

  const handleChange = (e) => {
    const val = e.target.value.trim();

    setAmount(val);

    if (val === "") {
      setError("Amount cannot be empty");
    } else if (parseFloat(val) < 0.01) {
      setError("Amount cannot be less than $0.01");
    } else if (parseFloat(val) > availBalance) {
      setError("Amount cannot exceed the available balance");
    } else {
      setError("");
    }
  };
  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange ${" "}
            <input
              className="w-10"
              data-testid="amount-input"
              required
              type="number"
              onChange={handleChange}
              placeholder="USD"
              value={amount}
            />
            of my $<span>{availBalance}</span>:
          </label>
          {error && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {error}
            </p>
          )}
          {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
        </div>
      </section>
      <Table amount={amount} hasError={!!error} />
    </div>
  );
}

export default Main;
