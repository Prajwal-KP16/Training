import "h8k-components";
import React, { useState, useEffect } from "react";
import Articles from "./components/Articles";

import "./App.css";
import { ARTICLES_DATA } from "./constants";

function App() {
  const [sorted, setSorted] = useState([]);
  useEffect(() => {
    const votes = [...ARTICLES_DATA].sort((a, b) => b.upvotes - a.upvotes);

    setSorted(votes);
  }, []);
  const handleMostUpvoted = () => {
    // Logic for most upvoted articles
    // articles.map((prev) => prev.upvotes)
    // const votes = articles.upvotes;
    // console.log(votes);
    const sortedVotes = [...sorted].sort((a, b) => b.upvotes - a.upvotes);
    setSorted(sortedVotes);
  };

  const handleMostRecent = () => {
    // Logic for most recent articles
    const sortedDates = [...sorted].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setSorted(sortedDates);
  };

  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={sorted} />
      </div>
    </>
  );
}

export default App;
