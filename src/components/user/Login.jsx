import React, { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const API = process.env.REACT_APP_API;
  return (
    <div>
      <h2>UserSignIn</h2>
      <p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        ></input>
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        ></input>
      </p>
      <button>Login</button>
    </div>
  );
}
