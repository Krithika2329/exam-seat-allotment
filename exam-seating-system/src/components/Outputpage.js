// src/components/OutputPage.js
import React from "react";

const OutputPage = ({ formData, seatingArrangement }) => {
  return (
    <div className="container mt-4">
      <h4>Examination Seating Arrangement</h4>
      <div className="mb-3">
        <strong>Classroom Number:</strong> {formData.classroomNumber}
      </div>
      <div className="mb-3">
        <strong>Subject Code:</strong> {formData.subjectCode}
      </div>
      <div className="mb-3">
        <strong>Exam Date:</strong> {formData.examDate}
      </div>
      <div className="mb-3">
        <strong>Exam Time:</strong> {formData.examTime}
      </div>
      <table className="table table-bordered">
        <tbody>
          {seatingArrangement.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((seat, colIndex) => (
                <td key={colIndex} className="text-center">
                  <div>
                    {seat[0] || "Empty"} {/* First student */}
                  </div>
                  <div>
                    {seat[1] || "Empty"} {/* Second student */}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OutputPage;

