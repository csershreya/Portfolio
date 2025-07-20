import React from "react";
import styled from "styled-components";
import hands from "../assets/hands.png";

const Section = styled.section`
  min-height: 100vh;
  background-color: #0f172a;
  color: white;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  span {
    color: #3b82f6;
    margin-top: 1rem;
  }
`;

const Subtitle = styled.p`
  max-width: 800px;
  text-align: center;
  color: #cbd5e1;
  font-size: 1rem;
  margin-bottom: 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 769px) and (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

`;

const ServiceCard = styled.div`
  background-color: #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: left;
  color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color:  #61dafb;;
  }

  p {
    font-size: 0.95rem;
    color: #cbd5e1;
  }

  img {
    width: 24px;
    margin-right: 0.5rem;
  }
`;

const services = [
    {
        title: "Web Development",
        icon: "https://img.icons8.com/fluency/48/source-code.png",
        description: "Professional website design and development tailored to your needs using modern technologies."
    },
    {
        title: "UI/UX Design",
        icon: "https://img.icons8.com/fluency/48/design.png",
        description: "Innovative and user-friendly designs that capture attention and ensure smooth experiences."
    },
    {
        title: "Bug Fixes & Optimization",
        icon: "https://img.icons8.com/fluency/48/maintenance.png",
        description: "Performance improvements, debugging, and responsive fixes to polish your app or website."
    },
    {
        title: "Logo & Graphics Design",
        icon: "https://img.icons8.com/fluency/48/image.png",
        description: "Designs that reflect your brand’s identity and visually connect with your audience."
    },
    {
        title: "Content Writing",
        icon: "https://img.icons8.com/fluency/48/text.png",
        description: "Helping you communicate better with clear and impactful web or app content."
    },
    {
        title: "Collaborative Projects",
        icon: "https://img.icons8.com/fluency/48/collaboration.png",
        description: "Open for collaborative or freelance projects — let's build something together."
    },
];

export default function Services() {
    return (
        <Section id="services">
            <Title>
                <img
                    src={hands}
                    alt="Handshake Icon"
                    style={{
                        width: "80px",        // or "2rem"
                        height: "70px",
                        right:"4px",
                        top: "6px"            // to align it with text
                    }}
                />
                What Can I Do For You?
            </Title>
            <Subtitle>
                I'm available for freelance projects, collaborations, or contributions. Here's how I can help you:
            </Subtitle>
            <ServicesGrid>
                {services.map((service, index) => (
                    <ServiceCard key={index}>
                        <h3>
                            <img src={service.icon} alt="icon" /> {service.title}
                        </h3>
                        <p>{service.description}</p>
                    </ServiceCard>
                ))}
            </ServicesGrid>
        </Section>
    );
}
