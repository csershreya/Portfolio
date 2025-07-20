import React from "react";
import styled from "styled-components";
import Laptop3D from "../components/Laptop3D";
import Hero from "../components/Hero";

const Section = styled.section`
  height: 100vh;
  display: flex;
  background: #0f172a;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
`;

export default function Home() {
  return (
    <Section id="home">
      <Left><Laptop3D /></Left>
      <Right><Hero /></Right>
    </Section>
  );
}
