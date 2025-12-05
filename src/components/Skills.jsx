import React from "react";
export default function Skills() {
  return (
    <div className="">
      <div className="mb-6"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Java",
          "Python",
          "JavaScript",
          "React",
          "Vue.js",
          "Node.js",
          "AWS",
          "Docker",
          "PostgreSQL",
          "MongoDB",
          "TensorFlow",
          "PyTorch",
          "Pandas",
          "NumPy",
          "Git",
        ].map((s, i) => (
          <div
            key={s}
            className={`rounded-xl p-6 text-center text-lg font-medium fade-in delay-${
              i * 200
            }`}
            style={{
              background: "rgba(16,22,36,0.96)",
              borderRadius: "16px",
              boxShadow: `0 0 24px 2px #6366f166, 0 2px 12px 0 #0008`,
              border: `2.5px solid #6366f1`,
              borderImage: `linear-gradient(90deg, #38bdf8, #6366f1) 1`,
              color: "#fff",
            }}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
