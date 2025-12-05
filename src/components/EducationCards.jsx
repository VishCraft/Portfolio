import React from "react";

export default function EducationCards() {
  return (
    <div
      className="rounded-2xl p-8 shadow-xl"
      style={{
        background: "rgba(16,22,36,0.96)",
        boxShadow: "0 0 24px 2px #6366f166, 0 2px 12px 0 #0008",
        border: "2.5px solid #6366f1",
        borderImage: "linear-gradient(90deg, #38bdf8, #6366f1) 1",
      }}
    >
      <h3 className="flex items-center gap-0 text-2xl font-semibold mb-2">
        Academic Background
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div
          className="rounded-xl p-5 fade-in delay-0"
          style={{
            background: "rgba(16,22,36,0.96)",
            borderRadius: "16px",
            boxShadow: "0 0 24px 2px #6366f1aa, 0 2px 12px 0 #0008",
            border: "2.5px solid #6366f1",
            borderImage: "linear-gradient(90deg, #38bdf8, #6366f1) 1",
            color: "#fff",
          }}
        >
          <h4 className="font-semibold text-lg text-white">
            Master of Science in Information Technology
          </h4>
          <p className="text-white">Arizona State University, AZ</p>
          <p className="text-white text-sm">Jan 2023 – May 2024</p>
          <p className="text-blue-300 font-semibold mt-1">CGPA: 4.0/4.0</p>
        </div>
        <div
          className="rounded-xl p-5 fade-in delay-200"
          style={{
            background: "rgba(16,22,36,0.96)",
            borderRadius: "16px",
            boxShadow: "0 0 24px 2px #6366f166, 0 2px 12px 0 #0008",
            border: "2.5px solid #6366f1",
            borderImage: "linear-gradient(90deg, #38bdf8, #6366f1) 1",
            color: "#fff",
          }}
        >
          <h4 className="font-semibold text-lg text-white">
            Bachelor of Engineering in Information Technology
          </h4>
          <p className="text-white">
            Vasavi College of Engineering, Hyderabad, India
          </p>
          <p className="text-white text-sm">Aug 2015 – May 2019</p>
          <p className="text-blue-300 font-semibold mt-1">CGPA: 3.7/4.0</p>
        </div>
      </div>
    </div>
  );
}
