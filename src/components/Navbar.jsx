import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/humanize"); // Navigate to the humanize page
  };

  return (
    // Applied glass effect classes and new hover animation for the Navbar
    <header
      className="flex items-center justify-between whitespace-nowrap px-10 py-3 relative z-20
                       bg-black/20 backdrop-blur-md border-b border-solid border-white/10
                       transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-white/10"
    >
      {" "}
      {/* Added transition and hover shadow */}
      {/* Logo and Title */}
      <a href="/" className="flex items-center gap-4 text-white">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Humanizer AI
        </h2>
      </a>
      {/* Navigation Links and Get Started Button */}
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {/* Features Link */}
          <button
            onClick={() => navigate("/features")}
            className="text-white text-sm font-medium leading-normal transition-colors duration-200 hover:text-[#00B887] focus:outline-none"
          >
            Features
          </button>
          {/* Pricing Link */}
          <button
            onClick={() => navigate("/pricing")}
            className="text-white text-sm font-medium leading-normal transition-colors duration-200 hover:text-[#00B887] focus:outline-none"
          >
            Pricing
          </button>
          {/* Support Link */}
          <button
            onClick={() => navigate("/support")}
            className="text-white text-sm font-medium leading-normal transition-colors duration-200 hover:text-[#00B887] focus:outline-none"
          >
            Support
          </button>
        </div>
        <button
          onClick={handleGetStarted}
          className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-gradient-to-r from-[#3d98f4] to-[#5DA5E6] text-white text-lg font-bold leading-normal tracking-[0.015em] z-10 shadow-lg hover:from-[#2a7ed8] hover:to-[#4a8ad0] transition-all duration-300 transform hover:scale-105 active:scale-95 border border-transparent hover:border-[#5DA5E6] focus:outline-none focus:ring-2 focus:ring-[#3d98f4] focus:ring-opacity-75 relative overflow-hidden group"
        >
          <span className="truncate relative z-10">Get Started</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#3d98f4] to-[#5DA5E6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
