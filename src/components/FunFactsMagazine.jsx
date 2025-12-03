import React from "react";
import "./FunFactsMagazine.css";

export default function FunFactsMagazine() {
  const facts = [
    "She loves to dance",
    "She's a good cook",
    "She's the most beautiful girl I've ever seen",
    "She never knows what she should eat",
    "She has cute birthmarks (I know where they all are🤭)",
    "She's always tired",
    "She has a cute little scar on her left middle finger",
    "She's always watching Netflix (Korean Dynasty Series)",
    "She's in love with me (I hope)"
  ];

  return (
    <div className="funfacts-container">
      <h1 className="title">FUN FACTS</h1>
      <div className="facts-grid">
        {facts.map((fact, index) => (
          <div className="fact-box" key={index}>{fact}</div>
        ))}
      </div>
    </div>
  );
}
