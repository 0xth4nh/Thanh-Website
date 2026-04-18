import React from "react";
import styled from "styled-components";
import AnimatedBackground from "../components/Background/AnimatedBackground";
import Navbar from "../components/Navbar";
import ProfileSection from "../components/Profile/ProfileSection";
import AboutSection from "../components/About/AboutSection";
import ExperienceSection from "../components/Experience/ExperienceSection";
import ContactSection from "../components/Contact/ContactSection";
import FooterSection from "../components/Footer/FooterSection";

const Shell = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1120px;
  margin: 0 auto;
`;

function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Shell>
        <ProfileSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
      </Shell>
    </>
  );
}

export default HomePage;
