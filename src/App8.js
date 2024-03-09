import React from 'react'
import { useState } from 'react';
import "./App.css";


export default function App8() {

  const [access, setAccessState] = useState({ access: "", className: "" });

  const log = () => {
    let a = document.getElementById('ak').value;
    let b = document.getElementById('ak1').value;
    if (a === 'john' && b === 'pass1234') {
      setAccessState({ access: 'Access granted', className: 'success' });
    } else {
      setAccessState({ access: 'Access Denied', className: 'fail' });
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <input type='text' id='ak' placeholder="Username"></input><br /><br />
      <input type='password' id='ak1' placeholder="Password"></input><br /><br />
      <input type='submit' onClick={log} value="submit"></input><br /><br />
      <div className={access.className}>{access.access}</div>
    </div>
  );
}
