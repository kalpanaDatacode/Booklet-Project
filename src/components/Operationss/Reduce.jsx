import React from "react";

export default function Reduce() {
  const numbers = [, 2, 3, 4, 5];
  const sum=numbers.reduce((acc,curr)=>acc+curr,0)

  return (
    <div>
      <h2>Reduce Example</h2>
      <p><strong>Sum:</strong> {sum}</p>
    </div>
  );
}
