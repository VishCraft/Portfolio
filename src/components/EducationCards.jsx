import React from "react";

export default function EducationCards() {
  return (
    <div className="bg-white rounded-xl shadow-card p-8">
      <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6">
        <span className="h-10 w-10 bg-techred text-white rounded-xl flex items-center justify-center text-xl">
          🎓
        </span>
        Academic Background
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border-2 border-techred rounded-lg p-5">
          <h4 className="font-semibold text-lg">
            Master of Science in Information Technology
          </h4>
          <p className="text-neutral-700">Arizona State University, AZ</p>
          <p className="text-neutral-600 text-sm">Jan 2023 – May 2024</p>
          <p className="text-techred font-semibold mt-1">CGPA: 4.0/4.0</p>
        </div>
        <div className="border-2 border-techgreen rounded-lg p-5">
          <h4 className="font-semibold text-lg">
            Bachelor of Engineering in Information Technology
          </h4>
          <p className="text-neutral-700">
            Vasavi College of Engineering, Hyderabad, India
          </p>
          <p className="text-neutral-600 text-sm">Aug 2015 – May 2019</p>
          <p className="text-techgreen font-semibold mt-1">CGPA: 3.7/4.0</p>
        </div>
      </div>
    </div>
  );
}
