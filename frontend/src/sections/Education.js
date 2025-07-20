import React from "react";
import styled from "styled-components";
import collegeImg from "../assets/collegeImg.jpg";
import schoolImg from "../assets/schoolImg.png";

const Section = styled.section`
  min-height: 100vh;
  background: #1e293b;
  padding: 4rem 2rem;
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
  color: #ffffff;

  span {
    color: #61dafb;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-bottom: 3rem;
  color: #cbd5e1;
`;

const Card = styled.div`
  display: flex;
  background: #1e293b; /* slightly lighter navy */
  border-radius: 5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin-bottom: 2rem;
  margin-left: 10rem;
  margin-right:10rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  width: 150px;
  height: auto;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Info = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Institute = styled.p`
  font-size: 1rem;
  color: #61dafb;
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  font-size: 1rem;
  color:rgb(247, 225, 187); /* greenish white */
  font-weight: bold;
`;

export default function Education() {
  return (
    <Section id="education">
      <Title>
        <span>🎓</span> My <span>Education</span>
      </Title>
      <Subtitle>The highest result of education is tolerance ~Helen Keller</Subtitle>

      <Card>
        <Img src={collegeImg} alt="College" />
        <Info>
          <Degree>Bachelor Of Technology In Computer Science Engineering</Degree>
          <Institute>Banasthali University</Institute>
          <Duration>2021 - 2025</Duration>
        </Info>
      </Card>

      <Card>
        <Img src={schoolImg} alt="School" />
        <Info>
          <Degree>Higher Secondary School | Non-Medical Science</Degree>
          <Institute>I.P. Convent Sr. Sec. School | CBSE</Institute>
          <Duration>2016 - 2020</Duration>
        </Info>
      </Card>
    </Section>
  );
}
