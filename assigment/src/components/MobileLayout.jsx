import React from "react";
import "../styles/layout.css";

const MobileLayout = ({ children }) => {
  return (
    <div className="app-container">
      <div className="mobile-container">{children}</div>
    </div>
  );
};

export default MobileLayout;
