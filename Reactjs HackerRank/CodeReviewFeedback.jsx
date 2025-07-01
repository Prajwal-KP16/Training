import React, { useState } from "react";
const FeedbackSystem = () => {
  const aspects = [
    "Readability",
    "Performance",
    "Security",
    "Documentation",
    "Testing",
  ];
  const [vote, setVote] = useState(
    aspects.map(() => ({ upvote: 0, downvote: 0 }))
  );

  function handleVote(index, type) {
    setVote((prev) =>
      prev.map((vote, i) =>
        i === index ? { ...vote, [type]: vote[type] + 1 } : vote
      )
    );
  }

  return (
    <div className="my-30 mx-auto text-center w-mx-1200 gap-30">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {aspects.map((aspect, index) => {
          return (
            <div key={index} className="pa-10 w-300 card">
              <h2>{aspect}</h2>
              <div className="flex my-30 mx-0 justify-content-around">
                <button
                  className="py-10 px-15"
                  data-testid={`upvote-btn-${index}`}
                  onClick={() => handleVote(index, "upvote")}
                >
                  👍 Upvote
                </button>
                <button
                  className="py-10 px-15 danger"
                  data-testid={`downvote-btn-${index}`}
                  onClick={() => handleVote(index, "downvote")}
                >
                  👎 Downvote
                </button>
              </div>
              <p className="my-10 mx-0" data-testid={`upvote-btn-${index}`}>
                Upvotes: <strong>{vote[index].upvote}</strong>
              </p>
              <p className="my-10 mx-0" data-testid={`downvote-btn-${index}`}>
                Downvotes: <strong>{vote[index].downvote}</strong>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedbackSystem;
