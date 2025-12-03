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
      {data.map((p) => (
        <a
          key={p.name}
          href={p.link}
          target="_blank"
          className="bg-white rounded-xl shadow-card p-6 hover:bg-neutral-50 flex flex-col"
        >
          <h4 className="text-lg font-semibold text-techblue mb-2">{p.name}</h4>
          <p className="text-neutral-700 text-base leading-relaxed">{p.desc}</p>
        </a>
      ))}
    </div>
  );
}
