import React, { useState } from "react";
import medical_records from "../medicalRecords";

function Search({ setRecord, setId, id }) {
  const [selectedId, setSelectedId] = useState("0");
  const handleShow = () => {
    if (selectedId === "0") {
      alert("Please select a patient name");
      return;
    }
    const patient = medical_records.find((p) => p.id === selectedId);

    setRecord(patient);
    setId(selectedId);
  };
  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select
          data-testid="patient-name"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option value="0" disabled>
            Select Patient
          </option>
          {medical_records.map((userRecord) => (
            <option key={userRecord.id} value={userRecord.id}>
              {userRecord.data[0].userName}
            </option>
          ))}
        </select>
      </div>

      <button onClick={() => handleShow(id)} type="submit" data-testid="show">
        Show
      </button>
    </div>
  );
}

export default Search;
