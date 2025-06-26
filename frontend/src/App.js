import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import DifferentiationSection from "./components/DifferentiationSection";
import TrendingDesignsSection from "./components/TrendingDesignsSection";
import EntryPointsSection from "./components/EntryPointsSection";
import ConversionSection from "./components/ConversionSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <DifferentiationSection />
      <TrendingDesignsSection />
      <EntryPointsSection />
      <ConversionSection />
      <Footer />
    </div>
  );
}

export default App;