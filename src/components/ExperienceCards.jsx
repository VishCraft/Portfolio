import React from "react";

const roles = [
  {
    title: "Software Engineer",
    company: "Telka LLC",
    date: "Apr 2025 – Present",
    loc: "Plano, TX",
    border: "techgreen",
    bullets: [
      "Built scalable UI components with React.js and developed FastAPI services for telecom automation and monitoring.",
      "Enhanced frontend security and automated API monitoring/reporting using Node.js and Selenium.",
      "Leveraged AWS Textract and NLP techniques to automate document analysis and streamline telecom workflows.",
    ],
  },
  {
    title: "Software IT Analyst",
    company: "Jetson Infinity (Arizona State University)",
    date: "Jun 2024 – Apr 2025",
    loc: "Remote, United States",
    border: "techblue",
    bullets: [
      "Built Flask APIs and React.js interface to control robotic arm for industrial automation.",
      "Processed sensor/camera data and visualized metrics using Python, AWS QuickSight, and Chart.js.",
      "Implemented RESTful APIs for real-time robotic control and monitoring.",
    ],
  },
  {
    title: "Associate Software IT Consultant",
    company: "Infosys Ltd.",
    date: "Aug 2019 – Jan 2022",
    loc: "Hyderabad, India",
    border: "techblue",
    bullets: [
      "Enhanced Loan Origination System for Greensill Bank using Pega and automated workflows.",
      "Designed/optimized banking databases and backend services on AWS for high-volume data.",
      "Analyzed financial data and generated reports to support business decisions.",
    ],
  },
  {
    title: "Quality Assurance Engineering Intern",
    company: "General Electric Digital Wing",
    date: "Mar 2019 – Jun 2019",
    loc: "Hyderabad, India",
    border: "techblue",
    bullets: [
      "Implemented BDD with Cucumber and automated test execution using JUnit and Selenium.",
      "Created test scripts for UI/API testing, improving coverage and collaboration.",
      "Validated application behavior against business requirements.",
    ],
  },
];

export default function ExperienceCards() {
  return (
    <div className="space-y-8">
      {roles.map((r, i) => (
        <div
          key={i}
          className={`rounded-xl p-6 pr-4 py-6 fade-in delay-${i * 200} ${
            i === 0
              ? "ring-4 ring-techgreen ring-offset-4 ring-offset-[#101624] shadow-xl"
              : ""
          }`}
          style={{
            background: i === 0 ? "rgba(16,22,36,0.96)" : "rgba(16,22,36,0.96)",
            borderRadius: "16px",
            boxShadow: `0 0 32px 6px ${
              i === 0 ? "#38bdf8" : "#6366f1"
            }cc, 0 2px 12px 0 #0008`,
            border: `3.5px solid ${i === 0 ? "#38bdf8" : "#6366f1"}`,
            borderImage: `linear-gradient(90deg, #38bdf8, #6366f1) 1`,
            color: "#e0e6ed",
          }}
        >
          <h3 className="text-xl font-semibold text-white">{r.title}</h3>
          <p className="font-semibold text-blue-300">{r.company}</p>
          <p className="text-white text-sm">
            {r.date} · {r.loc}
          </p>
          <ul className="mt-4 space-y-2 text-white">
            {r.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span
                  className={`h-2 w-2 rounded-full bg-blue-300 mt-1`}
                ></span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
