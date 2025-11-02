import React from "react";

 const MyInfo=()=>{
  const person={
    name:"kalpana",
    course:"MCA"
  }
  return(
    <>
    <h1>Object</h1>
    <p>{person.name}</p>
    <p>{person.course}</p>
    </>
  )

}



export default MyInfo;