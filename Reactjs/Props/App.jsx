import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="bg-green-600 text-black p-6 rounded-3xl mb-6">
        Tailwind test
      </h1>
      <Card username="Prajwal" />
      <Card />
    </>
  );
}

export default App;
