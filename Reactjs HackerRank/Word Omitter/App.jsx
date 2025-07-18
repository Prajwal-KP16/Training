import { WordOmitter } from "./wordOmitter";

import "./App.css";

import "h8k-components";

function App() {
  return (
    <>
      <h8k-navbar header="Word Omitter"></h8k-navbar>
      <div className="App">
        <WordOmitter />
      </div>
    </>
  );
}

export default App;
