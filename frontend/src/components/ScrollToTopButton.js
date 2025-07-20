// src/components/ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 6rem;
  right: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
  padding: 0;

  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 600px) {
    bottom: 1.5rem;
    right: 1.5rem;
    img {
      width: 40px;
      height: 40px;
    }
  }
`;


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? <ScrollButton onClick={scrollToTop}><img width="64" height="64" src="https://img.icons8.com/arcade/64/circled-up-2.png" alt="circled-up-2"/></ScrollButton> : null;
};

export default ScrollToTopButton;
