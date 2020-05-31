import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Welcome to Ecomm</h1>
        <p>Your personal market</p>
        {children}
      </div>
    </div>
  );
}
