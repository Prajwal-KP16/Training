import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";

const title = "Patient Medical Records";

const App = () => {
  const [record, setRecord] = useState(null);
  const [id, setId] = useState(null);

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search setRecord={setRecord} setId={setId} id={id} />
        {id && (
          <Records
            record={record}
            setRecord={setRecord}
            id={id}
            setId={setId}
          />
        )}
      </div>
    </div>
  );
};

export default App;
