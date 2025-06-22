/* useNavigate */
/*
- useNavigate hook is used to logically navigate to some different address using react router.
- useNavigate hook can automatically navigate to some particular address based on the condition.
*/

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
