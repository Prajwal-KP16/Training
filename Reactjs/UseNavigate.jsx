import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  function register() {
    navigate("/adminsignup");
  }
  return (
    <>
      <button onClick={register}>Click</button>
    </>
  );
}

export default App;
