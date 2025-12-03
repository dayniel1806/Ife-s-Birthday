import React from "react";
import "./ThingsSheLikes.css";

export default function ThingsSheLikes() {
  const likes = [
    "She loves Food",
    "She likes Sleeeeeeep😭",
    "She loves me",
    "She loves caprisone and Cheese balls",
    "She loves me... again😌",
    "She loves Korean Series",
    "She loves rice and beans",
    "She loves clothes"
  ];

  return (
    <div className="likes-container">
      <h1 className="likes-title">Things She <span>Likes</span></h1>

      <div className="likes-list">
        {likes.map((item, index) => (
          <div className="like-item" key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
