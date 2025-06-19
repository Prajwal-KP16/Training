/* useParams */
/*
- useParams is a special hook i.e., used to extract details of a request parameter or url address.
- useParams will have the details of the http address in the form of objects.
- Using useParams hook, we can extract the details of a particular object with the help of id i.e., provided by useParams.

syntax:-
        {
            * : endpointName/idno,
            id : idno
        }
    
*/

import { useParams } from "react-router-dom";

function App() {
  let param = useParams();
  console.log(param.id);

  function register() {
    axios
      .get(`http://localhost:1000/admin/${param.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <button onClick={register}>Click</button>
    </>
  );
}

export default App;
