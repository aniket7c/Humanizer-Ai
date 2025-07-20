import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import HumanizerPage from "./HumanizerPage";
// Import the new placeholder pages
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import SupportPage from "./pages/SupportPage";

function HomePageContent() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmxgnGpIZUnuWY3Kl3Q5VA23-KSskfM4W36opY6T2ufh_p-6P_AgoH80gjmq7q0o1yppEB8BgBk2VQtOGFXMcCbrTZMRXg4_sOdCEjcgGDPdmnlSOqneR4n_ZbOsTX62RFnaOFb6RwDOm8Q0opePm5HJhaSogAqkjYQbITkncch0mkyKtNz_Zwiw1k-SydV7Xjb5vZu0x2TCgPC1cjCqxluDOgATnBfudWN32jnKXWq1LmTEzyu0DFd4kbNc01z-8VK6Je1B4vxr6f")',
                }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    {" "}
                    Transform Your AI Text into Human-Like Prose
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    {" "}
                    Elevate your AI-generated content with our advanced
                    humanization technology. Experience the difference in
                    authenticity and engagement.
                  </h2>
                </div>
                <button
                  onClick={() => navigate("/humanize")}
                  className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-black/20 backdrop-blur-sm text-white text-sm font-bold leading-normal tracking-[0.015em] border border-white/10 shadow-lg hover:bg-black/30 hover:border-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                >
                  {" "}
                  <span className="truncate">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePageContent />} />
          <Route path="/humanize" element={<HumanizerPage />} />
          {/* New Routes for Navbar buttons */}
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
