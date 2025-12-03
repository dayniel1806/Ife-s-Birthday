import React from "react";
import AiBaby from './images/Aibaby-removebg.png'
// A simple React component to display the illustrated character
// No Tailwind used (based on your preference)

export default function CharacterCard({ imageSrc, quote }) {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7cdd8", // light pinkish background
    padding: "40px 20px",
    borderRadius: "12px",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  };

  const quoteStyle = {
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: "600",
    textAlign: "center",
    color: "#4a2c2c",
  };

  return (
    <div style={containerStyle}>
      <img src={AiBaby} alt="Character" style={imageStyle} />
      <p style={quoteStyle}>{quote}</p>
    </div>
  );
}
