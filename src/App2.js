import React from "react";
//import Login from "./Login";
//import Home from "./Home";

export default function App2(props) {
  return props.user === "" && (
    <div>
      <h2>Login Form</h2>
      <input type="text" placeholder="name"></input>
      <br></br>
      <input type="password" placeholder="password"></input>
      <br></br>
      <button>Login</button>
    </div>
  )}
//   ) : (
//     <div>Hello {props.user}</div>
//   );
//   if (props.user === "") {
//     return <Login />;
//   } else {
//     return <Home username={props.user} />;
//   }
// }
