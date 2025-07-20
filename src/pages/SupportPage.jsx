import React from "react";
import Navbar from "../components/Navbar"; // Assuming Navbar is in components

const SupportPage = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col text-gray-800 bg-gray-900"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-white">
        <h1 className="text-4xl font-bold mb-4 text-[#00B887]">Need Help?</h1>
        <p className="text-lg text-gray-300 max-w-2xl text-center">
          Our support team is here to assist you with any questions or issues.
        </p>
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold mb-4 text-gray-200">
            Reach out to us:
          </p>
          <a
            href="mailto:support@humanizerai.com"
            className="block text-lg text-[#00B887] hover:underline mb-2"
          >
            support@humanizerai.com
          </a>
          <a href="#" className="block text-lg text-[#00B887] hover:underline">
            Visit our Knowledge Base (Coming Soon!)
          </a>
        </div>
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

export default SupportPage;
