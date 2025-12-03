import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import Skills from "./components/Skills.jsx";
import ExperienceCards from "./components/ExperienceCards.jsx";
import EducationCards from "./components/EducationCards.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section id="experience" title="Experience">
        <ExperienceCards />
      </Section>
      <Section id="skills" title="Skills">
        <Skills />
      </Section>
      <Section id="education" title="Education">
        <EducationCards />
      </Section>
      <Section id="projects" title="Projects">
        <Projects />
      </Section>
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </div>
  );
}
