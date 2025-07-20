import React from "react";
import Navbar from "../components/Navbar"; // Assuming Navbar is in components

const FeaturesPage = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col text-gray-800 bg-gray-900"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-white">
        <h1 className="text-4xl font-bold mb-4 text-[#00B887]">
          Our Awesome Features
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl text-center">
          Explore all the powerful capabilities of Humanizer AI, designed to
          transform your content.
        </p>
        <ul className="mt-8 text-left text-lg list-disc list-inside text-gray-200">
          <li>Advanced Humanization Algorithm</li>
          <li>Multiple Tone Options (Coming Soon!)</li>
          <li>Plagiarism Checker Integration (Coming Soon!)</li>
          <li>Batch Processing</li>
          <li>Document Upload/Download</li>
          <li>And much more!</li>
        </ul>
        <button
          onClick={() => window.history.back()}
          className="mt-10 px-6 py-3 bg-[#00B887] text-white rounded-full text-lg font-bold hover:bg-[#00A07A] transition-colors duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default FeaturesPage;
