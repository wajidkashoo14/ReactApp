import React from "react";
import HeroSection from "./HeroSection";
import CardSection from "./CardSection";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Feedback from "./Feedback";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <CardSection />
      <Aboutme />
      <Projects />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
