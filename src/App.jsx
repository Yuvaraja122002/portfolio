import React from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home/home";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <main className="main">
      <Home />
      <Skills />
      <Portfolio />
      <Resume />
    </main>
  );
}

export default App;
