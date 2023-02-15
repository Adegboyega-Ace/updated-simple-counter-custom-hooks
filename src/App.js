import React from "react";
import "./style.css";
import { useState } from "react"; 
import useConsoleLog from "./useConsoleLog";


function App() { 
  const [count, setCount] = useState(0);
  
  //This code console logs the counts
  useConsoleLog(count);
 
  function increment(){
    setCount(prevCount => prevCount + 1)
  }
  function decrement(){
   setCount(prevCount => prevCount - 1)
 }
 
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>
       increment
      </button>
      <button onClick={decrement}>
       decrement
      </button>
    </>
  )
 
 } 
  
 export default App; 
