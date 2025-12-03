import { useEffect, useState } from "react";
import Aibaby from "../images/AiBaby-removebg.png";
import "./Ai.css";
import MagazinePage from "./MagazinePage";
import "./page2.css";

{
  /* ========== EDIT THESE 8 LINES ONLY ========== */
}
const HER_NAME = "Baby"; // ← her name/nickname
const YOUR_NAME = "Your Ife"; // ← your name
const BIRTHDAY_DATE = "2025-12-05"; // ← YYYY-MM-DD
const TOGETHER_SINCE = "June 2023";
const COUPLE_SONG =
  "https://www.youtube.com/embed/RgKAFK5djSk?autoplay=1&loop=1&playlist=RgKAFK5djSk&mute=0&volume=20";
  // "../images/forever_Sweet.mp3";

import tiny from "../images/tiny.jpg";
import babies from "../images/baby.png";
import cap from "../images/cap.jpg";
import swag from "../images/dark.jpg";
import peace from "../images/peace.jpg";
import us from "../images/us.png";
import mum from "../images/mumz.jpg";
import black from "../images/black.jpeg";
import smile from "../images/smile.jpg";



import FunFactsMagazine from "./FunFactsMagazine";
import ThingsSheLikes from "./ThingsSheLikes";
import LoveYou from "./LoveYou";

const PHOTOS = [tiny, babies, mum, cap, peace, swag, smile, us];

// ←←← ALL THE THINGS YOU LOVE ABOUT HER (add as many as you want!)
const THINGS_I_LOVE = [
  "I Love Your pretty eyes",
  "I Love Your lips",
  "I Love Your voice",
  "I Love that you look so beautiful without even putting in effort ",
  "I Love Your smile",
  "I Love that you manage to put a strong face on no matter what you're going through",
  "I Love that you can tell me when you're not doing too well",
  "I love your cute lil t*ts",
  "I Love Your butt",
  "I Love Your kindness and that you make everyone around you happy",
  "I Love how you call me your baby",
  "I Love how you moan my name",
  "I Love Your voice notes",
  "I Love Your hugs",
  "I love that we have so much in common and yet still so different",
  "I Love Your dances",
  "The fact that you love me",
  "Because you're you — and that's my favorite thing in the world",
  "It is impossible for me to add the entire list right here - but one day with your head on my chest, I will list them all, my love. ",
];

const LOVE_LETTER = `
I know a girl

I’m convinced you came into existence a couple thousand years late.
Where were you when goddess were being named?
For I’d argue with the court until they carved you in stone
And when they did, I’d protect it like a watch guard on duty.

I’d take hobby in watching the stars,
laughing at them every chance I got,
I’ll tell them I know a being more beautiful—she lives just a few streets away
Her smile shines brighter than you’ll ever burn and she also radiates in the morning.
I’d say she’d be a better figure up there, if only figure eight belonged in the sky.

Then I’ll grow older and take a quiet job at a small library, writing loudly about your beauty.
I’d write and write tirelessly like it was my only duty.

My hair would start to fall from the work,
and I’d laugh in irony as I touched my head:
first it was my heart that fell, now my hair—
at least it shows my timeless soft spot for you.

In one of my books I’d write my philosophy, the best philosophy.
“As seconds are to time and watts to power, somewhere in another world,
 Covenant is the measurement of beauty.”

I heard you read books so I turned a writer cause of you.
`;


const LOVE_LETTERs = `Happy Birthday, my ${HER_NAME} ♡

Today the whole world should stop and celebrate you — because you make my whole world better every single day.
Thank you for every smile, every late-night talk, every "I love you more" fight we have (you always win).

I fall for you harder every birthday… and I can't wait to spoil you today.

Forever yours,
${YOUR_NAME} 🥹❤️`;

function App() {
  const [showLetter, setShowLetter] = useState(false);
  const [musicOn, setMusicOn] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);

  const daysLeft = Math.max(
    0,
    Math.ceil((new Date(BIRTHDAY_DATE) - new Date()) / (1000 * 60 * 60 * 24))
  );

  // Auto change photo
  useEffect(() => {
    const id = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % PHOTOS.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // Floating rose petals
  useEffect(() => {
    const createPetal = () => {
      const p = document.createElement("div");
      p.innerText = Math.random() > 0.5 ? "🌹" : "🌸";
      p.style.position = "fixed";
      p.style.left = Math.random() * 100 + "vw";
      p.style.top = "-30px";
      p.style.fontSize = "22px";
      p.style.pointerEvents = "none";
      p.style.zIndex = "999";
      p.style.animation = "fall 7s linear forwards";
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 7000);
    };
    const id = setInterval(createPetal, 800);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Music */}
      {musicOn && (
        <iframe
          src={COUPLE_SONG}
          allow="autoplay"
          style={{ display: "none" }}
        ></iframe>
      )}

      <button className="music-btn" onClick={() => setMusicOn(!musicOn)}>
        {musicOn ? "🔇" : "🔊"}
      </button>

      <div className="container">
        {/* Page 1 - Hero */}
        <section className="bg1 page1">
          <h1>Happy Birthday</h1>
          <h2>{HER_NAME} ♡</h2>
          <p className="days">
            {daysLeft === 0
              ? "TODAY IS YOUR DAY!!!"
              : `${daysLeft} day${daysLeft > 1 ? "s" : ""} to go ♡`}
          </p>
          <p style={{ fontSize: "1.6rem", color: "white", marginTop: "20px" }}>
            From {YOUR_NAME}, loving you since {TOGETHER_SINCE}
          </p>
          <img src={Aibaby} alt="us" className="photo" />
        </section>

        {/* Page 5 - Magazine */}
        <section className="bg5 page1">
          <MagazinePage />
        </section>

        {/* Page 2 - LONG collage + list page */}
        <section className="page2">
          <div className="collage-area">
            <img src={PHOTOS[0]} className="pphoto photo1" alt="memory" />
            <img src={PHOTOS[1]} className="pphoto photo2" alt="memory" />
            <img src={PHOTOS[2]} className="pphoto photo3" alt="memory" />
            <img src={PHOTOS[3]} className="pphoto photo4" alt="memory" />
            <img src={PHOTOS[4]} className="pphoto photo7" alt="memory" />
            <img src={PHOTOS[5]} className="pphoto photo8" alt="memory" />
            <img src={PHOTOS[6]} className="pphoto photo5" alt="memory" />
            <img src={PHOTOS[7]} className="pphoto photo6" alt="memory" />

            <div className="sticky sticky1">I Love You</div>
            <div className="sticky sticky2">Happy Birthday {HER_NAME}!</div>

            <h2 className="list-title">
              Things I Love About You (keep scrolling ♡)
            </h2>

            <div className="love-list">
              {THINGS_I_LOVE.map((item, i) => (
                <div key={i} className="love-item">
                  {i + 1}. {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Page 3 - Letter */}
        <section className="bg3">
          <div className="envelope" onClick={() => setShowLetter(!showLetter)}>
            <div className={`letter ${showLetter ? "flipped" : ""}`}>
              <div className="side" style={{ color: "#d63384" }}>
                <h2>Click to open your letter</h2>
              </div>
              <div className="side back">
                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    fontSize: "1.3rem",
                    lineHeight: "2",
                    fontFamily: "'Dancing Script', cursive",
                    color: "#333",
                  }}
                >
                  {LOVE_LETTER}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Page  */}
        <section className="bg3">
          <ThingsSheLikes />
        </section>

        {/* Page  */}
        <section className="bg3">
          <FunFactsMagazine />
        </section>

                {/* Page  */}
        <section className="pagePic">
          <LoveYou />
        </section>

        {/* Page 4 - Final */}
        <section className="bg4">
          <h2 style={{ fontSize: "4rem" }}>Made with every beat of my heart</h2>
          <p style={{ fontSize: "2rem", margin: "40px 0", color: "white" }}>
            Can't wait to celebrate you today ♡
          </p>
          <p style={{ fontSize: "1.5rem", color: "white" }}>
            Scroll up to relive it anytime
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
