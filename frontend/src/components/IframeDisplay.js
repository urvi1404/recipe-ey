// src/components/IframeDisplay.js
import React from "react";

const IframeDisplay = ({ fileName }) => {
  return (
    <div className="iframe-container">
      <iframe
        src={`/${fileName}`}
        title={fileName}
        style={{ width: "100%", height: "80vh", border: "none" }}
      ></iframe>
    </div>
  );
};

export default IframeDisplay;
