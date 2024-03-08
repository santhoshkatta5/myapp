import React from 'react'
import { useState, useEffect } from 'react'

// export default function App7() {
//     const [count, setCount] = useState(0);
//     console.log("Component loaded");
//   return (
//     <>
//     <button onClick={() => setCount((prevState) => prevState + 1)}>smack down</button> 
//     <span>{count}</span>
//     </>
//   );
// }

export default function App7() {
    const [runs, setRuns] = useState(0);
    const [wickets, setWickets] = useState(0);
    console.log("component loaded");
    useEffect(()=>{
        console.log("better luck next time");
    },[wickets]);
  return (
    <>
          <button onClick={() => setRuns((prevState) => prevState + 1)}>runs({runs})</button> 
          <button onClick={() => setWickets((prevState) => prevState + 1)}>wickets({wickets})</button> 
    </>
  )
}
