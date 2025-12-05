import React from "react";
export default function Navbar() {
  const sc = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const links = [
    "about",
    "experience",
    "skills",
    "education",
    "projects",
    "contact",
  ];
  return (
    <header className="sticky top-0 z-20 bg-[#101624] backdrop-blur border-b border-techblue">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between">
        <span className="font-semibold text-white">
          Vishal Kompella Portfolio
        </span>
        <div className="hidden md:flex gap-6 text-sm text-white">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => sc(l)}
              className="hover:text-techblue capitalize text-white"
            >
              {l}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
