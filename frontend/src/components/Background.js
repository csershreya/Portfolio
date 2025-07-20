import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Background = styled(motion.div)`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(135deg, #1e293b, #0f172a, #1e293b);
  background-size: 400% 400%;
`;

export default function AnimatedBackground() {
  return (
  <Background
  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
  transition={{ duration: 30, repeat: Infinity }}
  />
  );
}
