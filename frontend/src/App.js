// src/App.js
import React, { useState } from "react";
import IframeDisplay from "./components/IframeDisplay";
import "./styles/details.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("landing.html");

  return (
    <div className="app">
      <header>
        <img src="/pomiz2.png" alt="POMIZ Logo" className="logo" />
        <nav>
          <button onClick={() => setCurrentPage("landing.html")}>Landing Page</button>
          <button onClick={() => setCurrentPage("details.html")}>Details Page</button>
        </nav>
      </header>

      <IframeDisplay fileName={currentPage} />
    </div>
  );
};

export default App;
