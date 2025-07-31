import React, { useState } from "react";
import axios from "axios";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/admin/login", { password });
      if (res.data.token === "valid-admin-token") {
        localStorage.setItem("admin-token", res.data.token);
        window.location.href = "/admin";
      }
    } catch (err) {
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
