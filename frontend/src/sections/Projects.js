import React, { useEffect, useState } from "react";
import styled from "styled-components";
import baseURL from "../utils/baseURL";



const Section = styled.section`
  min-height: 100vh;
  background: #1e293b;
  padding: 4rem 2rem;
  color: white;
  box-sizing: border-box;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  color: #ffffff;

  span {
    color: #00bcd4; /* Cyan Accent */
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ProjectCard = styled.div`
  background: #ffffff;
  color: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const ImageWrapper = styled.div`
  height: 180px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ProjectTitle = styled.div`
  background-color: #003366;
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  padding: 0.6rem;
`;

const ProjectBody = styled.div`
  padding: 1rem;
`;

const ProjectDesc = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #222;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 0.8rem;

  a {
    padding: 0.4rem 0.8rem;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    font-size: 0.85rem;
    transition: background 0.3s ease;

    &:hover {
      background-color: #333;
    }
  }
`;

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <Section id="projects">
      <Content>
        <Heading>
          <i className="fas fa-laptop-code" style={{ marginRight: "0.5rem" }}></i>
          Projects <span>Made</span>
        </Heading>
        <ProjectList>
          {projects.map((project) => (
            <ProjectCard key={project._id}>
              <ImageWrapper>
                <ProjectImage
                  src={
                    project.imageUrl?.startsWith("/uploads/")
                      ? project.imageUrl
                      : "https://via.placeholder.com/300x180?text=No+Image"
                  }
                  alt={project.title}
                />
              </ImageWrapper>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectBody>
                <ProjectDesc>{project.description}</ProjectDesc>
                <p style={{ fontSize: "0.8rem", color: "#555" }}>
                  <strong>Tech:</strong>{" "}
                  {Array.isArray(project.techStack)
                    ? project.techStack.join(", ")
                    : project.techStack}
                </p>
                <ButtonGroup>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      👁 View
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                      Code 💻
                    </a>
                  )}
                </ButtonGroup>
              </ProjectBody>
            </ProjectCard>
          ))}
        </ProjectList>
      </Content>
    </Section>
  );
}
