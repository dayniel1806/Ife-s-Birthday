import { useState } from "react";

function SpotifyQRScanner({ playlistUrl, qrImageUrl }) {
  const [scanned, setScanned] = useState(false);

  // If she clicks the QR on desktop or taps on mobile, open directly
  const handleClick = () => {
    window.open(playlistUrl, "_blank");
    setScanned(true);
    setTimeout(() => setScanned(false), 3000);
  };

  return (
    <>
      <style jsx>{`
        .qr-section {
          padding: 80px 20px;
          text-align: center;
            background: linear-gradient(135deg, #fad0c4, #ffd1ff);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .qr-title {
          font-family: 'Dancing Script', cursive;
          font-size: 4.5rem;
          color: #6db2ff;
          margin-bottom: 20px;
        }
        .qr-subtitle {
          font-family: 'Kalam', cursive;
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 40px;
        }
        .qr-frame {
          padding: 20px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
          animation: float 4s infinite ease-in-out;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .qr-frame:hover {
          transform: scale(1.05);
        }
        .qr-frame img {
          width: 280px;
          height: 280px;
          border-radius: 20px;
        }
        .scan-text {
          font-family: 'Kalam', cursive;
          font-size: 1.6rem;
          margin-top: 20px;
          color: #6db2ff;
        }
        .success {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          animation: fadeIn 0.5s;
        }
        .success-text {
          font-family: 'Dancing Script', cursive;
          font-size: 4rem;
          color: #fff;
          text-shadow: 0 0 20px #1DB954;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <section className="qr-section">
        <h2 className="qr-title">Our Soundtrack ♡</h2>
        <p className="qr-subtitle">
          Point your phone camera at the QR code below<br/>
        </p>

        <div className="qr-frame">
          <img src={qrImageUrl} alt="Spotify Playlist QR" />
          <div className="scan-text">
            Scan me with your camera!
          </div>
        </div>

        <p style={{marginTop: "40px", fontSize: "1.4rem", color: "#333"}}>
          Every song that reminds me of you<br/>
          Happy Birthday Ife mi🥹
        </p>
      </section>

      {/* Success overlay when clicked */}
      {scanned && (
        <div className="success" onClick={() => setScanned(false)}>
          <div className="success-text">Opening Spotify ♡</div>
          <div style={{marginTop:"20px", fontSize:"2rem"}}>Enjoy our songs baby</div>
        </div>
      )}
    </>
  );
}

export default SpotifyQRScanner;