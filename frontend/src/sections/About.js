import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";
import myPhoto from "../assets/myPhoto.jpg"; // Use your actual image path
import { FaUser } from "react-icons/fa"; // Font Awesome icon

const Section = styled.section`
  min-height: 100vh;
  background: #1e293b;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    display: flex;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    span {
      color: #61dafb;
    }

    svg {
      font-size: 1.5rem;
    }
  }

  h5 {
    margin-top: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    color: #b0bec5;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-wrap: wrap;
  gap: 4rem;
  max-width: 1200px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    transition: transform 0.4s ease;

    &:hover {
      transform: perspective(1000px) rotateY(10deg) rotateX(10deg) scale(1.05);
    }
  }
`;

const Right = styled.div`
  flex: 2;
  max-width: 700px;
`;

const Detail = styled.p`
  line-height: 1.7;
  margin: 1rem 0;
  color: #e0e0e0;
`;

const Row = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 1.5rem;
  
  p {
    margin: 0;
    font-size: 1rem;
    color: #b0bec5;

    b {
      color: #ffffff;
    }

    a {
      color: #61dafb;
      text-decoration: none;
    }
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.6rem;
  background: #61dafb;
  color: #1e293b;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
  }
`;

export default function About() {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <Section id="about">
      <Header>
        <h2>
          <FaUser size={40}/> About <span>Me</span>
        </h2>
      </Header>

      <ContentWrapper>
        <Left>
          <img ref={tiltRef} src={myPhoto} alt="Shreya" />
        </Left>
        <Right>
          <Detail>
            <h3>I'm <b>Shreya</b>,</h3> 
            <h5>Passionate Web Developer | Tech Enthusiast</h5>
            A passionate web developer focused on building
            creative, user-friendly websites and experiences. I blend design
            with functionality through clean code and a curious mind.
          </Detail>

          <Detail>
            I enjoy crafting experiences that are both aesthetic and functional.
            My journey involves working with modern web technologies, learning
            from real-world projects, and continuously evolving.
          </Detail>

          <Detail>
            With my dedication to my studies and eagerness to learn, 
            I am well-equipped to succeed in my future endeavors.
          </Detail>

          <Row>
            <div1>
            <p><b>Age:</b> 22</p>
            <p><b>Email:</b> <a href="mailto:shreya.02cser@gmail.com">shreya.02cser@gmail.com</a></p>
            </div1>
            <div1>
            <p><b>College:</b> Banasthali University</p>
            <p><b>Based in:</b> Delhi</p>
            </div1>
          </Row>

          <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume ›
          </Button>
        </Right>
      </ContentWrapper>
    </Section>
  );
}
