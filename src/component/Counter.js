import React from 'react'
import { useState } from 'react';

export default function IncCount(props) {
    
    let x = parseInt(props.count)
    const[counter,setCounter]=useState(2);
    const Increment=()=>{
        setCounter(counter +1);
       
        }
    
  return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={Increment}>Increment</button>

    </div>
  )
}
