import React from "react";

export default function Filter() {
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" },
    { id: 4, name: "Orange" },
    { id: 5, name: "Avocado" },
  ];
  const filteredFruits = fruits.filter(fruit => fruit.name.startsWith("A"));

  return (
    <div>
      <h2>Filter Object Example</h2>

      <p>All Fruits:</p>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>
            {fruit.id}. {fruit.name}
          </li>
        ))}
      </ul>

      <p>Filtered Fruits (start with "A"):</p>
      <ul>
        {filteredFruits.map(fruit => (
          <li key={fruit.id}>
            {fruit.id}. {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
