import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  background: #1e293b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Content = styled.div`
  max-width: 900px;
  text-align: center;
`;

const ProjectList = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const ProjectCard = styled.div`
  background: #1e293b;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
`;

export default function Projects() {
  return (
    <Section id="projects">
      <Content>
        <h2>Projects</h2>
        <ProjectList>
          <ProjectCard>
            <h3>Portfolio Website</h3>
            <p>A React-based personal portfolio showcasing 3D components and smooth navigation.</p>
          </ProjectCard>
          <ProjectCard>
            <h3>Design Dashboard</h3>
            <p>Responsive UI dashboard created using styled-components and chart libraries.</p>
          </ProjectCard>
        </ProjectList>
      </Content>
    </Section>
  );
}
