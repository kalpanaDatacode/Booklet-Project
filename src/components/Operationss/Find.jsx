import React from "react";

export default function Find() {
  const students = [
    { id: 1, name: "Rahul", marks: 45 },
    { id: 2, name: "Sneha", marks: 82 },
    { id: 3, name: "Aman", marks: 60 },
  ];
  const topper = students.find((student) => student.marks > 70);

  return (
    <div>
      <h2>Find Example</h2>
      <p>
        {topper
          ? `Topper: ${topper.name} (Marks: ${topper.marks})`
          : "No topper found"}
      </p>
    </div>
  );
}
