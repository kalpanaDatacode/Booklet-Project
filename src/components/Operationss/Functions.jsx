import React from "react";

function add(a, b) {
  return a + b;
}

export default function Functions() {
  return (
    <div>
      <h1>JS Functions in React</h1>
      <p>2 + 3 = {add(2, 3)}</p>
    </div>
  );
}
