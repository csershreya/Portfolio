import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 2rem;
  color: white;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const TypewriterWrapper = styled.h2`
  font-size: 1.25rem;
  margin-top: 1rem;
  font-weight: 500;
`;

const Button = styled.a`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: #9d174d;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s ease;
  display: inline-block;

  &:hover {
    background: #be185d;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    color: #0ea5e9;
    font-size: 1.8rem;
    transition: 0.3s;

    &:hover {
      color: #0284c7;
    }
  }
`;

export default function Hero() {
  return (
    <Container>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <Heading>Hi There,<br />I'm Shreya <span style={{ color: '#be185d' }}>Gupta</span></Heading>
        <TypewriterWrapper>
          <span style={{ color: '#ffffff' }}>I Am Into </span>
          <span style={{ color: '#61dafb' }}><Typewriter
            words={["Full Stack Web Development", "Tech Communities", "Cyber Hubs"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
          </span>
        </TypewriterWrapper>

        <Button href="https://linktr.ee/shreya._.gupta">Visit All Links ↑</Button>

        <Icons>
          <a href="https://www.linkedin.com/in/shreya02gupta" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com/csershreya" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://instagram.com/imshreya_2110" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </Icons>
      </motion.div>
    </Container>
  );
}
