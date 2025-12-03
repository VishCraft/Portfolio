import React from "react";
export default function Hero() {
  return (
    <section className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="space-y-4 max-w-xl">
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="text-techblue">Vishal Kompella</span>
          </h1>
          <p className="text-neutral-700 text-lg">
            Software Engineer skilled in modern UI, API development, cloud
            systems, and AI technologies.
          </p>
        </div>
        <img
          src="/full-stack-dev.png"
          alt="Full Stack Dev"
          className="w-[400px] rounded-xl shadow-card"
        />
      </div>
    </section>
  );
}
