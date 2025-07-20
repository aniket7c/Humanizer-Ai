import React from "react";
import Navbar from "../components/Navbar"; // Assuming Navbar is in components

const PricingPage = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col text-gray-800 bg-gray-900"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-white">
        <h1 className="text-4xl font-bold mb-4 text-[#00B887]">
          Flexible Pricing Plans
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl text-center">
          Choose a plan that fits your needs, from free trials to enterprise
          solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-4xl">
          {/* Basic Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center border border-white/20 transition-all duration-300 hover:scale-105 hover:border-[#00B887]">
            <h2 className="text-2xl font-bold text-white mb-3">Basic</h2>
            <p className="text-gray-300 mb-4">Perfect for casual users.</p>
            <p className="text-4xl font-bold text-[#00B887] mb-6">
              $0<span className="text-lg text-gray-300">/month</span>
            </p>
            <ul className="text-gray-200 text-left w-full mb-6">
              <li className="flex items-center mb-2">
                <span className="text-[#00B887] mr-2">✔</span> 1,000 words/month
              </li>
              <li className="flex items-center mb-2">
                <span className="text-[#00B887] mr-2">✔</span> Standard
                humanization
              </li>
              <li className="flex items-center">
                <span className="text-[#00B887] mr-2">✔</span> Basic support
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-[#00B887] text-white rounded-full font-bold hover:bg-[#00A07A] transition-colors">
              Get Started Free
            </button>
          </div>
          {/* Pro Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center border border-white/20 transition-all duration-300 hover:scale-105 hover:border-[#00B887]">
            <h2 className="text-2xl font-bold text-white mb-3">Pro</h2>
            <p className="text-gray-300 mb-4">
              For power users and professionals.
            </p>
            <p className="text-4xl font-bold text-[#00B887] mb-6">
              $19<span className="text-lg text-gray-300">/month</span>
            </p>
            <ul className="text-gray-200 text-left w-full mb-6">
              <li className="flex items-center mb-2">
                <span className="text-[#00B887] mr-2">✔</span> 50,000
                words/month
              </li>
              <li className="flex items-center mb-2">
                <span className="text-[#00B887] mr-2">✔</span> Advanced
                humanization
              </li>
              <li className="flex items-center mb-2">
                <span className="text-[#00B887] mr-2">✔</span> Priority support
              </li>
              <li className="flex items-center">
                <span className="text-[#00B887] mr-2">✔</span> Tone adjustments
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-[#00B887] text-white rounded-full font-bold hover:bg-[#00A07A] transition-colors">
              Choose Pro
            </button>
          </div>
          {/* Enterprise Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center border border-white/20 transition-all duration-300 hover:scale-105 hover:border-[#00B887]">
            <h2 className="text-2xl font-bold text-white mb-3">Enterprise</h2>
            <p className="text-gray-300 mb-4">
              Custom solutions for large teams.
            </p>
            <p className="text-4xl font-bold text-[#00B887] mb-6">Custom</p>
            <ul className="text-gray-200 text-left w-full mb-6">
              <li className="flex items-center mb-2">
                <span className="text-[#00B887] mr-2">✔</span> Unlimited words
              </li>
              <li className="flex items-center mb-2">
                <span className="text-[#00B887] mr-2">✔</span> Dedicated support
              </li>
              <li className="flex items-center mb-2">
                <span className="text-[#00B887] mr-2">✔</span> API access
              </li>
              <li className="flex items-center">
                <span className="text-[#00B887] mr-2">✔</span> Custom features
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-[#00B887] text-white rounded-full font-bold hover:bg-[#00A07A] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
