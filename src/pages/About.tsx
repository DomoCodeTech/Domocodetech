import React from "react";
import { Container } from "@mui/material";
import PrismaticBackground from "../components/layout/PrismaticBackground";
import Timeline from "../components/about/Timeline";
import HeroSection from "../components/about/HeroSection";
import Stats from "../components/home/Stats";
import MissionVisionSection from "../components/about/MissionVisionSection";
import ValuesSection from "../components/about/ValuesSection";

const About: React.FC = () => {
  return (
    <PrismaticBackground>
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 16 },
          overflowX: "hidden",
        }}
      >
        <HeroSection />
        <Timeline />
        <Stats />
        <MissionVisionSection />
        <ValuesSection />
      </Container>
    </PrismaticBackground>
  );
};

export default About;
