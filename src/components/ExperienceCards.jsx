import React from "react";

const roles = [
  {
    title: "Software Engineer",
    company: "Telka LLC",
    date: "Apr 2025 – Present",
    loc: "Plano, TX",
    border: "techgreen",
    bullets: [
      "Developed modular UI components and backend APIs for telecom automation and monitoring.",
      "Enhanced frontend security and automated API monitoring/reporting using Node.js and Selenium.",
      "Migrated legacy Vue.js modules to Vue 3, improving performance and maintainability.",
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
          className={`bg-white rounded-xl shadow-card border-l-8 pl-6 pr-4 py-6 border-${r.border}`}
        >
          <h3 className="text-xl font-semibold">{r.title}</h3>
          <p className="text-techblue font-semibold">{r.company}</p>
          <p className="text-neutral-600 text-sm">
            {r.date} · {r.loc}
          </p>
          <ul className="mt-4 space-y-2 text-neutral-700">
            {r.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span
                  className={`h-2 w-2 rounded-full bg-${r.border} mt-1`}
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
