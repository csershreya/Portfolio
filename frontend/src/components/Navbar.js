import React from 'react';
import styled from 'styled-components';
import baseURL from '../utils/baseURL';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: #0f172a;
  color: white;
`;

const NavItem = styled.a`
  margin-left: 2rem;
  text-decoration: none;
  color: white;
  position: relative;
  cursor: pointer;

  &.active {
    color: #61dafb; /* light blue for active */
    font-weight: bold;
  }

  &:hover {
    color: #61dafb;
  }

  &:hover::after,
  &.active::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -4px;
    background-color: #61dafb;
  }
`;

const Logo = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  color: #61dafb;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
  <Logo>Shreya<a href={`${baseURL}/admin-login`} target="_blank" rel="noopener noreferrer"> Gupta</a></Logo>
  <div>
    <NavItem href="#home">Home</NavItem>
    <NavItem href="#about">About</NavItem>
    <NavItem href="#skills">Skills</NavItem>
    <NavItem href="#education">Education</NavItem>
    <NavItem href="#services">Services</NavItem>
    <NavItem href="#projects">Projects</NavItem>
    <NavItem href="#contact">Contact</NavItem>
  </div>
</Nav>
  );
};

export default Navbar;
