import React from "react";

export default function FruitSet() {
  const fruits = ["Apple", "Banana", "Mango", "Apple", "Orange", "Banana"];
  const uniqueFruits = new Set(fruits); 

  return (
    <div>
      <h2>Unique Fruits</h2>
      <ul>
        {[...uniqueFruits].map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
