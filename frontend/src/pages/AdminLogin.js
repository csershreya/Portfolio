import React, { useState } from "react";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const storedPassword = process.env.REACT_APP_ADMIN_PASSWORD;

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents page refresh on form submit
    if (password === storedPassword) {
      localStorage.setItem("admin-token", "valid-admin-token");
      window.location.href = "/admin";
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <form className="admin-login-container" onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Admin Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
