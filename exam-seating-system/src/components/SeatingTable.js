import React from "react";

const ExamSeatingTable = ({ data }) => {
  return (
    <div className="table-container">
      <h3 className="text-center">Sahyadri College of Engineering & Management, Mangaluru</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>SN</th>
            <th>USN</th>
            <th>SN</th>
            <th>USN</th>
            <th>SN</th>
            <th>USN</th>
            <th>SN</th>
            <th>USN</th>
          </tr>
        </thead>
        <tbody>
          {data.seating.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((seat, seatIndex) => (
                <React.Fragment key={seatIndex}>
                  <td>{seat.sn}</td>
                  <td>{seat.usn || "-"}</td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3">
        <h5>USN of Absentees:</h5>
        <p>{data.absentees.join(", ") || "None"}</p>
      </div>
      <div className="mt-3">
        <h5>Number of Answer Booklets Used:</h5>
        <p>{data.answerBookletsUsed}</p>
      </div>
      <div className="mt-3">
        <h5>Number of Blank Answer Books Returned:</h5>
        <p>{data.blankAnswerBooksReturned}</p>
      </div>
      <div className="mt-3">
        <h5>Defective/Replaced Answer Books:</h5>
        <p>
          Defective: {data.defectiveAnswerBooks} | Replaced:{" "}
          {data.replacedAnswerBooks}
        </p>
      </div>
      <div className="mt-3">
        <h5>Signature of Invigilator:</h5>
        <p>{data.invigilatorSignature || "Not Signed"}</p>
      </div>
    </div>
  );
};

// Sample data for testing
const sampleData = {
  seating: [
    [
      { sn: 1, usn: "8" },
      { sn: 2, usn: "9" },
      { sn: 3, usn: "10" },
      { sn: 4, usn: "11" },
    ],
    [
      { sn: 5, usn: "12" },
      { sn: 6, usn: "13" },
      { sn: 7, usn: "14" },
      { sn: 8, usn: null },
    ],
  ],
  
};

const App = () => {
  return <ExamSeatingTable data={sampleData} />;
};

export default ExamSeatingTable;
