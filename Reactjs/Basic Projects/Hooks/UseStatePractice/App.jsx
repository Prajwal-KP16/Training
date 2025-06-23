import { useState } from "react";
import "./App.css";

function App() {
  const [foods, setFoods] = useState(["Apple", "Banana", "Lichi"]);

  const handleAddFoods = () => {
    const newFoods = document.getElementById("add-food").value;
    document.getElementById("add-food").value = "";

    setFoods((f) => [...f, newFoods]);
  };

  const handleRemoveFoods = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>List of Foods</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFoods(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="add-food" placeholder="Enter the foods" />
      <button onClick={handleAddFoods}>Add Food</button>
    </>
  );
}

export default App;
