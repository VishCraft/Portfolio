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
    <>
      <Navbar />
      <div
        className="relative min-h-screen w-full overflow-x-hidden bg-[#101624]"
        style={{ background: "#101624" }}
      >
        {/* Futuristic animated grid overlay */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <svg
            className="absolute w-full h-full"
            style={{ opacity: 0.18 }}
            viewBox="0 0 1920 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gridGlow" x1="0" y1="0" x2="0" y2="1">
                <stop stopColor="#38bdf8" stopOpacity="0.5" />
                <stop offset="1" stopColor="#6366f1" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* Vertical grid lines */}
            {[...Array(20)].map((_, i) => (
              <line
                key={i}
                x1={i * 96}
                y1="0"
                x2={i * 96}
                y2="1080"
                stroke="url(#gridGlow)"
                strokeWidth="2"
              />
            ))}
            {/* Horizontal grid lines */}
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                y1={i * 90}
                x1="0"
                y2={i * 90}
                x2="1920"
                stroke="url(#gridGlow)"
                strokeWidth="2"
              />
            ))}
          </svg>
        </div>
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
    </>
  );
}
