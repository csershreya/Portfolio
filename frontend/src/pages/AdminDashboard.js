import React, { useEffect, useState } from "react";
import "./AdminDashboard.css"; // We'll make this look like your website

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("admin-token");

  useEffect(() => {
    if (!token) {
      alert("Unauthorized access");
      window.location.href = "/admin-login";
      return;
    }

    fetch("http://localhost:5000/api/contact", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setMessages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [token]);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : messages.length ? (
        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Selected Service</th>
                <th>Other Service</th>
                <th>Starting from Scratch</th>
                <th>Website Type</th>
                <th>Has Figma Design</th>
                <th>Backend Exists</th>
                <th>Frontend Exists</th>
                <th>No. of Screens</th>
                <th>Logo Name</th>
                <th>Logo Tagline</th>
                <th>Logo Style</th>
                <th>Bug Description</th>
                <th>Bug Tech</th>
                <th>Content Type</th>
                <th>Content Tone</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id}>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.selectedService}</td>
                  <td>{msg.otherService}</td>
                  <td>{msg.startingFromScratch ? "Yes" : "No"}</td>
                  <td>{msg.typeOfWebsite}</td>
                  <td>{msg.hasFigmaDesign ? "Yes" : "No"}</td>
                  <td>{msg.backendExists ? "Yes" : "No"}</td>
                  <td>{msg.frontendExists ? "Yes" : "No"}</td>
                  <td>{msg.noOfScreens}</td>
                  <td>{msg.logoName}</td>
                  <td>{msg.logoTagline}</td>
                  <td>{msg.logoStyle}</td>
                  <td>{msg.bugDescription}</td>
                  <td>{msg.bugTech}</td>
                  <td>{msg.contentType}</td>
                  <td>{msg.contentTone}</td>
                  <td>{msg.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No messages found.</p>
      )}
    </div>
  );
}
