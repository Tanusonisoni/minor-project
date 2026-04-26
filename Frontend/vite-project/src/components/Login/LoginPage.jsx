// import React from "react";
import "./LoginPage.css";

import React, { useState } from "react";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* LEFT */}
        <div className="login-card__content">
          <h2>Secure Mail Access</h2>
          <p>Login to manage and transmit emails dynamically</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => console.log('email focus')}
              onBlur={() => console.log('email blur')}
              autoComplete="username"
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => console.log('password focus')}
              onBlur={() => console.log('password blur')}
              autoComplete="current-password"
            />

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span>Forgot password?</span>
            </div>

            <button type="submit">Login</button>
          </form>

          <p className="signup">
            New to platform? <span>Create Account</span>
          </p>
        </div>

        {/* RIGHT */}
        <div className="login-card__panel">
          <h2>Dynamic Mail Transmission System</h2>
          <ul>
            <li>✔ Real-time email delivery</li>
            <li>✔ Bulk & automated mail sending</li>
            <li>✔ Secure authentication</li>
            <li>✔ Smart scheduling & tracking</li>
          </ul>
        </div>

      </div>
    </div>
  );
}