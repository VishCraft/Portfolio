import React, { useEffect, useRef, useState } from "react";

function TypewriterTagline() {
  const tagline = "Full Stack Developer | Cloud | AI/ML Enthusiast";
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(tagline.slice(0, i + 1));
      i++;
      if (i === tagline.length) clearInterval(interval);
    }, 38);
    return () => clearInterval(interval);
  }, []);
  return (
    <p className="text-white text-lg fade-in delay-300 inline-block font-mono">
      {typed}
      <span className="animate-blink text-techblue">|</span>
    </p>
  );
}
export default function Hero() {
  // Hacker effect logic
  const hackerText = "Vishal Kompella | Full Stack Developer";
  const [displayText, setDisplayText] = React.useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789|!@#$%^&*()_+-=<>?";
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => {
        return hackerText
          .split("")
          .map((c, i) => {
            if (frame > i * 2) return c;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
      });
      frame++;
      if (frame > hackerText.length * 2) clearInterval(intervalRef.current);
    }, 40);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section
      id="about"
      className="relative border-b overflow-hidden"
      style={{ background: "rgba(16,22,36,0.96)" }}
    >
      {/* Futuristic grid overlay for hero */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <svg
          className="absolute w-full h-full"
          style={{ opacity: 0.18 }}
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gridGlowHero" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <line
              key={i}
              x1={i * 96}
              y1="0"
              x2={i * 96}
              y2="1080"
              stroke="url(#gridGlowHero)"
              strokeWidth="2"
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              y1={i * 90}
              x1="0"
              y2={i * 90}
              x2="1920"
              stroke="url(#gridGlowHero)"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10 z-10 min-h-[340px] md:min-h-[420px]">
        <div className="space-y-4 max-w-xl">
          <h1 className="text-4xl font-bold mb-2 fade-in text-white">
            Hi, I'm <span className="text-blue-300">Vishal Kompella</span>
          </h1>
          {/* Typewriter effect for tagline */}
          <TypewriterTagline />
        </div>
        <div className="relative flex flex-col items-center justify-center w-[400px] h-[380px] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
          <img
            src="/full-stack-dev.png"
            alt="Full Stack Dev"
            className="absolute z-10 w-[220px] rounded-xl shadow-card left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          {/* Dynamic SVG background with animated blobs */}
          <svg
            viewBox="0 0 400 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full h-full z-0"
          >
            <ellipse cx="200" cy="170" rx="180" ry="100" fill="#e0f2fe">
              <animate
                attributeName="rx"
                values="180;200;180"
                dur="6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="ry"
                values="100;120;100"
                dur="6s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="120" cy="80" rx="40" ry="20" fill="#bae6fd">
              <animate
                attributeName="cx"
                values="120;140;120"
                dur="5s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="300" cy="220" rx="60" ry="30" fill="#7dd3fc">
              <animate
                attributeName="cy"
                values="220;200;220"
                dur="7s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="320" cy="60" rx="30" ry="15" fill="#38bdf8">
              <animate
                attributeName="cx"
                values="320;340;320"
                dur="4s"
                repeatCount="indefinite"
              />
            </ellipse>
            <ellipse cx="80" cy="220" rx="30" ry="15" fill="#0ea5e9">
              <animate
                attributeName="cy"
                values="220;240;220"
                dur="5s"
                repeatCount="indefinite"
              />
            </ellipse>
          </svg>
          {/* Animated tech icons in a floating arc */}
          <div className="absolute left-0 right-0 bottom-0 flex flex-row items-end justify-center gap-8 w-full h-[120px] z-20 pointer-events-none mt-12">
            {/* Python */}
            <span className="flex flex-col items-center animate-float delay-100 pointer-events-auto drop-shadow-lg animate-pulse-glow">
              <svg
                width="44"
                height="44"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="36" rx="8" fill="#3776AB" />
                <path
                  d="M18 7c-2.2 0-4 1.8-4 4v2h8V11c0-2.2-1.8-4-4-4zm-6 4c0-3.3 2.7-6 6-6s6 2.7 6 6v2h1c2.2 0 4 1.8 4 4v2h-8v-2c0-2.2-1.8-4-4-4h-1V11zm-4 6c0-2.2 1.8-4 4-4h2v8h-2c-2.2 0-4-1.8-4-4zm4 6c-3.3 0-6-2.7-6-6s2.7-6 6-6h2v2c0 2.2 1.8 4 4 4h2v2c0 2.2-1.8 4-4 4h-2zm10-6c0-2.2 1.8-4 4-4h2v8h-2c-2.2 0-4-1.8-4-4zm4 6c-3.3 0-6-2.7-6-6s2.7-6 6-6h2v2c0 2.2 1.8 4 4 4h2v2c0 2.2-1.8 4-4 4h-2z"
                  fill="#fff"
                />
              </svg>
              <span className="mt-1 text-white font-semibold text-base">
                Python
              </span>
            </span>
            {/* JS */}
            <span className="flex flex-col items-center animate-float delay-200 pointer-events-auto drop-shadow-lg animate-pulse-glow">
              <svg
                width="44"
                height="44"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="36" rx="8" fill="#F7DF1E" />
                <rect
                  width="36"
                  height="36"
                  rx="8"
                  fill="#3776AB"
                  fillOpacity="0.7"
                />
                <path
                  d="M18 7c-2.2 0-4 1.8-4 4v2h8V11c0-2.2-1.8-4-4-4zm-6 4c0-3.3 2.7-6 6-6s6 2.7 6 6v2h1c2.2 0 4 1.8 4 4v2h-8v-2c0-2.2-1.8-4-4-4h-1V11zm-4 6c0-2.2 1.8-4 4-4h2v8h-2c-2.2 0-4-1.8-4-4zm4 6c-3.3 0-6-2.7-6-6s2.7-6 6-6h2v2c0 2.2 1.8 4 4 4h2v2c0 2.2-1.8 4-4 4h-2zm10-6c0-2.2 1.8-4 4-4h2v8h-2c-2.2 0-4-1.8-4-4zm4 6c-3.3 0-6-2.7-6-6s2.7-6 6-6h2v2c0 2.2 1.8 4 4 4h2v2c0 2.2-1.8 4-4 4h-2z"
                  fill="#fff"
                />
              </svg>
              <span className="mt-1 text-white font-semibold text-base">
                JS
              </span>
            </span>
            {/* AWS */}
            <span className="flex flex-col items-center animate-float delay-300 pointer-events-auto drop-shadow-lg animate-pulse-glow">
              <svg
                width="44"
                height="44"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="36" rx="8" fill="#FF9900" />
                <path
                  d="M10 24c2.5-2 6.5-2 9 0"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="18" cy="18" r="6" fill="#fff" fillOpacity="0.2" />
              </svg>
              <span className="mt-1 text-white font-semibold text-base">
                AWS
              </span>
            </span>
            {/* Cloud */}
            <span className="flex flex-col items-center animate-float delay-400 pointer-events-auto drop-shadow-lg animate-pulse-glow">
              <svg
                width="44"
                height="44"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="36" rx="8" fill="#38bdf8" />
                <path
                  d="M27 22.5a4.5 4.5 0 0 0-4.5-4.5h-.2A6 6 0 0 0 9 18a4.5 4.5 0 0 0 0 9h13.5A4.5 4.5 0 0 0 27 22.5z"
                  fill="#fff"
                />
              </svg>
              <span className="mt-1 text-white font-semibold text-base">
                Cloud
              </span>
            </span>
            {/* AI/ML */}
            <span className="flex flex-col items-center animate-float delay-500 pointer-events-auto drop-shadow-lg animate-pulse-glow">
              <svg
                width="44"
                height="44"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="36" height="36" rx="8" fill="#6366f1" />
                <circle cx="18" cy="18" r="8" fill="#fff" />
                <circle cx="18" cy="18" r="4" fill="#6366f1" />
              </svg>
              <span className="ml-2 text-white font-semibold text-base">
                AI/ML
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
