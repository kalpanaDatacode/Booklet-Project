import React from "react";

export default function FruitList() {
const fruits=[
  {id:1,name:"apple",color:"red"},
  {id:2,name:"grapes",color:"green"}
]

  return (
    <div>
      <h2>Fruit List</h2>
      {fruits.map((fruit)=>
        <li id="key">
         <p> {fruit.name}</p>
          <p>{fruit.color}</p>  
        
          </li>
      )}

     
    </div>
  );
}
