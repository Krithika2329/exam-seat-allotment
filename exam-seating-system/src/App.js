const generateMockSeating = ({ rows, columns, threeSeater, fiveSeater }) => {
  // Mock student data
  const students = [
    { usn: "S101", subjectCode: "MATH" },
    { usn: "S102", subjectCode: "PHYS" },
    { usn: "S103", subjectCode: "CHEM" },
    { usn: "S104", subjectCode: "BIO" },
    { usn: "S105", subjectCode: "MATH" },
    { usn: "S106", subjectCode: "PHYS" },
    { usn: "S107", subjectCode: "CHEM" },
    { usn: "S108", subjectCode: "BIO" },
  ];

  const arrangement = [];
  let studentIndex = 0;

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      if (threeSeater > 0) {
        // 3-seater logic: 2 students with different subject codes
        const student1 = students[studentIndex++];
        const student2 = students.find(
          (s) => s.subjectCode !== student1.subjectCode
        );
        row.push([
          student1 ? `${student1.usn} (${student1.subjectCode})` : "Empty",
          student2 ? `${student2.usn} (${student2.subjectCode})` : "Empty",
        ]);
        threeSeater--;
        studentIndex++; // Move index for second student
      } else if (fiveSeater > 0) {
        // 5-seater logic: 2 students with the same subject code
        const student1 = students[studentIndex++];
        const student2 = students.find(
          (s) => s.subjectCode === student1.subjectCode
        );
        row.push([
          student1 ? `${student1.usn} (${student1.subjectCode})` : "Empty",
          student2 ? `${student2.usn} (${student2.subjectCode})` : "Empty",
        ]);
        fiveSeater--;
        studentIndex++; // Move index for second student
      } else {
        row.push(["Empty", "Empty"]);
      }
    }
    arrangement.push(row);
  }

  return arrangement;
};



