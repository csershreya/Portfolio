import React from "react";
import styled from "styled-components";
import ms from "../assets/ms.jpeg";
import git from "../assets/git.png";
import lead from "../assets/lead.png";
import image from "../assets/image.png";
import team from "../assets/team.png";

const Section = styled.section`
  min-height: 100vh;
  background: #0f172a;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
  margin-top: 2rem;
  span {
    color: #38bdf8;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
`;

const SkillCard = styled.div`
  background: #1e293b;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin: 0;
    color: white;
  }
`;

const skills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Data Analytics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
  { name: "C Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Git VCS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: git },
  { name: "Data Structure And Algorithm", icon: image },
  { name: "MS Office", icon: ms },
  { name: "Team Work", icon: team },
  { name: "Leadership", icon: lead },
];

export default function Skills() {
  return (
    <Section id="skills">
      <Title>
        <span>🖥</span> Skills & <span>Abilities</span>
      </Title>
      <Grid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </SkillCard>
        ))}
      </Grid>
    </Section>
  );
}
