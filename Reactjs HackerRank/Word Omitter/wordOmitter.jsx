import React, { useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter() {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    // TODO: Add your changes here
    setInputText("");
  };

  const stripPunctuation = (word) => {
    let start = 0;
    let end = word.length - 1;

    while (start <= end && !isAlpha(word[start])) {
      start++;
    }
    while (end >= start && !isAlpha(word[end])) {
      end--;
    }

    return word.substring(start, end + 1);
  };

  const isAlpha = (ch) => {
    const code = ch.charCodeAt(0);
    return (
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122) // a-z
    );
  };

  const getProcessedText = () => {
    if (!inputText.trim()) return "";

    if (!omitWords) return inputText;

    const words = inputText.split(" ");

    const filtered = words.filter((word) => {
      const stripped = stripPunctuation(word).toLowerCase();
      return !OMITTED_WORDS.includes(stripped);
    });

    return filtered.join(" ");
  };

  return (
    <div className="omitter-wrapper">
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
      />
      <div>
        <button onClick={toggleOmitWords} data-testid="action-btn">
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button onClick={clearFields} data-testid="clear-btn">
          Clear
        </button>
      </div>
      <div>
        <h2>Output:</h2>
        <p data-testid="output-text">{getProcessedText()}</p>
      </div>
    </div>
  );
}

export { WordOmitter };
