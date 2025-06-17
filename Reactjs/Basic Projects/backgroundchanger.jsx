import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center px-2 bottom-12 inset-x-0 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none rounded-full text-white px-4 py-1"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none rounded-full text-white px-4 py-1"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none rounded-full text-white px-4 py-1"
              style={{ backgroundColor: "grey" }}
              onClick={() => setColor("grey")}
            >
              Grey
            </button>
            <button
              className="outline-none rounded-full px-4 py-1"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none rounded-full text-white px-4 py-1"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>
            <button
              className="outline-none rounded-full text-white px-4 py-1"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
