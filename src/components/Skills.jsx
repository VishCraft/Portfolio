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
        ].map((s) => (
          <div
            key={s}
            className="bg-white rounded-xl shadow-card p-6 text-center text-lg font-medium text-neutral-700"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
