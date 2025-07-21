import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  background: #1e293b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: center;
`;

const ProjectList = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const ProjectCard = styled.div`
  background: #334155;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')  // use relative path
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <Section id="projects">
      <Content>
        <h2>Projects</h2>
        <ProjectList>
          {projects.map((project) => (
            <ProjectCard key={project._id}>
              <ProjectImage src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech:</strong> {project.techStack.join(", ")}</p>
              <div style={{ marginTop: "0.5rem" }}>
                <a href={project.liveLink} target="_blank" rel="noreferrer" style={{ color: "#93c5fd", marginRight: "1rem" }}>Live</a>
                <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ color: "#93c5fd" }}>GitHub</a>
              </div>
            </ProjectCard>
          ))}
        </ProjectList>
      </Content>
    </Section>
  );
}
