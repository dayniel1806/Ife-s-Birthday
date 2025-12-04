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
          You are officially an adult - but to me, you'll always be my baby.
           <br />
           I wish I could be there to hold you, laugh with you, <br />
           and celebrate you the way you really do deserve.
           <br /> But until we're in the same place again, know that I'm thinking of you, missing you, and loving you deeper ever day. 
           <br />
           This is to a new chapter of your life, 
           <br />
           I can't wait to see and be part of the amazing things you'll do. 
           <br />
           No matter the distance, I'm always with you in heart.
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
           I wish i was right there with you to celebrate today with you. I would say today is the day you finally turn a woman🤭 I would kiss you, i would take care of you and I would say how lucky i am to have you. <br /> I am genuinely so very proud of the woman you have become and you are becoming. And even though i cannot be there physically, i hope you feel my presence and you're able to enjoy every single word, every page and every detail of this gift to you❤️.
           <br />
        </p>

      </div>
      </div>

      

      <div className="bottom-banner">Happy Birthday My Oluwanifemi Baby ❤️</div>
    </div>
  );
}
