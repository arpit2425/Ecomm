import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Under Construction</h1>
        <p>This site is under construction</p>
        {children}
      </div>
    </div>
  );
}
