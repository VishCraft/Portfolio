import React from "react";
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 border-b fade-in-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 fade-in delay-200 text-white">
          {title}
        </h2>
        <div className="fade-in delay-400">{children}</div>
      </div>
    </section>
  );
}
