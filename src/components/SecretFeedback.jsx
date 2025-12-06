import { useState } from "react";

function SecretFeedback() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");

  // ←←← CHANGE THIS TO SOMETHING ONLY SHE KNOWS
  const secretCode = "ordinary";        // or "hoodiethief", "myforever", "dec5", etc.

  const check = () => {
    if (input.toLowerCase().trim() === secretCode) {
      setUnlocked(true);
    }
  };

  if (!unlocked) {
    return (
      <section style={{
        minHeight:"100vh", background:"linear-gradient(135deg,#ff9a9e,#fad0c4,#d4a5e0)",
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",
        textAlign:"center", padding:"20px", scrollSnapAlign:"start"
      }}>
        <h1 style={{fontFamily:"'Dancing Script',cursive", fontSize:"5rem", color:"#fff", marginBottom:"20px"}}>
          Secret Page Just For You
        </h1>
        <p style={{fontSize:"1.8rem", color:"#fff", marginBottom:"40px"}}>
          Type our magic word…
        </p>
        <input
          type="text"
          placeholder="???????"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && check()}
          style={{
            padding:"18px 30px", fontSize:"1.6rem", borderRadius:"50px",
            border:"none", width:"340px", textAlign:"center", boxShadow:"0 10px 30px rgba(0,0,0,0.2)"
          }}
        />
        <button onClick={check} style={{
          marginTop:"20px", padding:"12px 30px", background:"#b7417d", color:"#fff",
          border:"none", borderRadius:"50px", fontSize:"1.3rem", cursor:"pointer"
        }}>
          Enter
        </button>
      </section>
    );
  }

  return (
    <section style={{
      minHeight:"100vh", background:"linear-gradient(135deg,#fad0c4,#ffeef8)",
      padding:"40px 20px", textAlign:"center", scrollSnapAlign:"start"
    }}>
      <h1 style={{fontFamily:"'Dancing Script',cursive", fontSize:"5rem", color:"#4b224c"}}>
        You Found My Secret!
      </h1>
      <p style={{fontSize:"1.8rem", color:"#555", margin:"30px 0"}}>
        Tell me everything, baby ♡ (only I will see this)
      </p>
      

      
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekLpD5C9sBa933ibgNQq9Nlfz5NQ5jZY7XiPBxjXDMzJ0Q-g/viewform?embedded=true"
        width="100%"
        height="1200"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{maxWidth:"900px", margin:"0 auto", borderRadius:"25px", boxShadow:"0 20px 50px rgba(0,0,0,0.2)"}}
      >
        Loading…
      </iframe>
    </section>
  );
}

export default SecretFeedback;