import React from "react";
const data = [
  {
    name: "Spotify Data Pipeline",
    link: "https://github.com/VishCraft/Spotify-data-Analysis",
    desc: "Automated ETL pipeline for Spotify streaming data. Delivers insights on music trends and user engagement.",
  },
  {
    name: "NutriWise Tracker",
    link: "https://github.com/VishCraft/Nutriwise-calorie-tracker",
    desc: "Full-stack app for tracking daily nutrition and calories. Integrates food database APIs and user authentication.",
  },
  {
    name: "Data Mining Model",
    link: "https://github.com/VishCraft/DataMiningModel",
    desc: "Machine learning models for pattern discovery in large datasets. Visualizes results for business insights.",
  },
];
export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((p, i) => (
        <a
          key={p.name}
          href={p.link}
          target="_blank"
          className={`rounded-xl p-6 flex flex-col fade-in delay-${i * 200}`}
          style={{
            background: "rgba(16,22,36,0.96)",
            borderRadius: "16px",
            boxShadow: `0 0 24px 2px #6366f166, 0 2px 12px 0 #0008`,
            border: `2.5px solid #6366f1`,
            borderImage: `linear-gradient(90deg, #38bdf8, #6366f1) 1`,
            color: "#fff",
          }}
        >
          <h4 className="text-lg font-semibold text-white mb-2">{p.name}</h4>
          <p className="text-white text-base leading-relaxed">{p.desc}</p>
        </a>
      ))}
    </div>
  );
}
