import React from "react";
import medical_records from "../medicalRecords";

function Records({ record, setRecord, id, setId }) {
  const handleNext = () => {
    const currentIndex = medical_records.findIndex((index) => index.id === id);

    const nextIndex = (currentIndex + 1) % medical_records.length;

    const nextPatient = medical_records[nextIndex];

    setRecord(nextPatient);
    setId(nextPatient.id);
  };

  if (!record) return null;

  const patientData = record.data[0];
  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div
          id="patient-profile"
          data-testid="patient-profile"
          className="mx-auto"
        >
          <h4 id="patient-name">{patientData.userName}</h4>
          <h5 id="patient-dob">DOB: {patientData.userDob}</h5>
          <h5 id="patient-height">Height: {patientData.meta.height} cm</h5>
        </div>
        <button
          className="mt-10 mr-10"
          data-testid="next-btn"
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          {record.data.map((r, index) => (
            <tr key={r.id}>
              <td>{index + 1}</td>
              <td>
                {new Date(r.timestamp)
                  .toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                  .replace(/(\d+)\/(\d+)\/(\d+)/, "$1/$2/$3")}
              </td>
              <td>{r.diagnosis.name}</td>
              <td>{r.meta.weight}</td>
              <td>{r.doctor.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
