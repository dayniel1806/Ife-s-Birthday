import React from "react";
import "./MagazinePage.css";
import baby from '../images/mad.png'
import grid from '../images/grad.png'
import heart from '../images/glow.jpg'

export default function MagazinePage() {
  return (
    <div className="mag-page">
      <div className="editor-note">
        <h2>CREATOR'S NOTE</h2>
        <p>
          I wish i was right there with you to celebrate today with you. I would say today is the day you finally turn a woman but you will always be Daniel's sweet little baby girl. I am genuinely so very proud of the woman you have become and you are becoming. And even though i cannot be there physically, i hope you feel my presence in every single word, every page and every detail of this gift to you❤️.
        </p>
      </div>

      <div className="top-right-photo">
        <img src= {baby} alt="Top right" />
        <span className="tag">My Fave picture🤭</span>
      </div>

      <div className="photo-grid">
        <div className="photo-frame yellow">
          <img src={heart} alt="Photo" />
        </div>
        <div className="photo-frame teal">
          <img src={grid} alt="Photo" />
        </div>
        <div className="message-box">
        <p>
          <h3>Who is my baby?</h3>
          She is the most caring, smart, beautiful, kind, sexy and amazing human. 

          I dont evven know what to say. We've had so many monents together; good, bad, the best and some unpleasant ones. We've laughed and smiled and made love. Every single moment I've had with you- I cherish them in my heart forever❤️. Happy birthday my baby girl. 
          I love you more than words could ever express. I hope this website makes you feel as special as you truly are because 
        </p>

      </div>
      </div>

      

      <div className="bottom-banner">Happy Birthday My Oluwanifemi Baby ❤️</div>
    </div>
  );
}
