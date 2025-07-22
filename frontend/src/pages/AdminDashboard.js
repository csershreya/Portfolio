import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(true);

  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    techStack: "",
    imageUrl: "",
    liveLink: "",
    githubLink: ""
  });

  const token = localStorage.getItem("admin-token");

  useEffect(() => {
    if (!token) {
      alert("Unauthorized access");
      window.location.href = "/admin-login";
      return;
    }

    // Fetch Messages
    fetch("/api/messages", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setMessages(data);
        setLoadingMessages(false);
      })
      .catch(err => {
        console.error(err);
        setLoadingMessages(false);
      });

    // Fetch Projects
    fetch("/api/projects", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoadingProjects(false);
      })
      .catch(err => {
        console.error(err);
        setLoadingProjects(false);
      });
  }, [token]);

  const handleInputChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleAddProject = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newProject.title);
    formData.append("description", newProject.description);
    formData.append("techStack", newProject.techStack);
    formData.append("liveLink", newProject.liveLink);
    formData.append("githubLink", newProject.githubLink);
    if (newProject.imageUrl) {
      formData.append("image", newProject.imageUrl);  // sending actual file
    }

    fetch("/api/projects", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`  // Don't set Content-Type for multipart!
      },
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        setProjects(prev => [...prev, data]);
        setNewProject({
          title: "",
          description: "",
          techStack: "",
          imageUrl: "",  // No longer needed technically, but keep for reset
          liveLink: "",
          githubLink: ""
        });
      })
      .catch(err => console.error(err));
  };


  const handleDeleteProject = (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    fetch(`/api/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        setProjects(prev => prev.filter(p => p._id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* MESSAGES SECTION */}
      <h3>Contact Form Messages</h3>
      {loadingMessages ? (
        <p>Loading messages...</p>
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

      {/* PROJECTS SECTION */}
      <h3 style={{ marginTop: "3rem" }}>Projects</h3>
      {loadingProjects ? (
        <p>Loading projects...</p>
      ) : projects.length ? (
        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Tech Stack</th>
                <th>Image URL</th>
                <th>Live Link</th>
                <th>GitHub Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((proj) => (
                <tr key={proj._id}>
                  <td>{proj.title}</td>
                  <td>{proj.description}</td>
                  <td>{proj.techStack}</td>
                  <td><a href={proj.imageUrl} target="_blank" rel="noreferrer">Image</a></td>
                  <td><a href={proj.liveLink} target="_blank" rel="noreferrer">Live</a></td>
                  <td><a href={proj.githubLink} target="_blank" rel="noreferrer">GitHub</a></td>
                  <td><button onClick={() => handleDeleteProject(proj._id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No projects found.</p>
      )}

      {/* ADD PROJECT FORM */}
      <div className="add-project-form">
        <h4>Add New Project</h4>
        <form onSubmit={handleAddProject}>
          <input
            name="title"
            placeholder="Title"
            value={newProject.title}
            onChange={handleInputChange}
            required
          />
          <input
            name="description"
            placeholder="Description"
            value={newProject.description}
            onChange={handleInputChange}
            required
          />
          <input
            name="techStack"
            placeholder="Tech Stack"
            value={newProject.techStack}
            onChange={handleInputChange}
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) =>
              setNewProject((prev) => ({ ...prev, imageUrl: e.target.files[0] }))
            }

          />
          <input
            name="liveLink"
            placeholder="Live Site URL"
            value={newProject.liveLink}
            onChange={handleInputChange}
          />
          <input
            name="githubLink"
            placeholder="GitHub Repo URL"
            value={newProject.githubLink}
            onChange={handleInputChange}
          />
          <button type="submit">Add Project</button>
        </form>
      </div>
    </div>
  );
}
