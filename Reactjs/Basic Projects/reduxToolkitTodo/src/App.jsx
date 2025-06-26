import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-500">
      <h1 className="text-5xl font-extrabold bg-clip-text from-blue-500 drop-shadow-lg mt-6 mb-0">
        📃 Todo List
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
