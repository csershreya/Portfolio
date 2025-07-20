import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #0f172a;
  color: #cbd5e1;
  padding: 2rem 1rem;
  text-align: center;

  @media (max-width: 600px) {
    padding: 1.5rem 0.5rem;
  }
`;

const FooterNav = styled.nav`
  margin-bottom: 1rem;
  a {
    color: #cbd5e1;
    margin: 0 1rem;
    text-decoration: none;
    font-size: 0.95rem;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const SocialIcons = styled.div`
  margin: 1rem 0;
  a {
    color: #cbd5e1;
    margin: 0 0.5rem;
    font-size: 1.2rem;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: #94a3b8;
`;



const Footer = () => {
  return (
    <FooterWrapper>
      <FooterNav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </FooterNav>

      <SocialIcons>
        <a href="https://github.com/csershreya" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shreya02gupt" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/imshreya_2110" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </SocialIcons>

      <Copyright>© {new Date().getFullYear()} Shreya Gupta. All rights reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
