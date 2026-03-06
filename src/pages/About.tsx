export default function About() {
  return (
    <main style={{
      backgroundColor: "#0d0d0d",
      minHeight: "100vh",
      color: "#fff",
      padding: "5rem 2rem",
    }}>

      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <p style={{ color: "#e63946", letterSpacing: "4px", fontSize: "0.85rem", marginBottom: "1rem" }}>
          OUR STORY
        </p>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, letterSpacing: "2px", marginBottom: "1.5rem" }}>
          WE LIVE FOR<br />
          <span style={{ color: "#e63946" }}>THE GROOVE.</span>
        </h1>
        <p style={{ color: "#888", maxWidth: "550px", margin: "0 auto", lineHeight: 1.8, fontSize: "1rem" }}>
          GrooveCart was born out of a simple belief — music sounds better on vinyl.
          We're a small team of obsessive record collectors who got tired of watching
          great albums disappear from shelves. So we built the store we always wanted.
        </p>
      </div>

      {/* Values */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "2rem",
        maxWidth: "1000px",
        margin: "0 auto 5rem",
      }}>
        {[
          { icon: "🎵", title: "CURATED SELECTION", desc: "Every record in our store is hand picked. No filler, no fluff — just the albums that matter." },
          { icon: "📦", title: "SAFE SHIPPING", desc: "We package every vinyl with care. Reinforced mailers, no exceptions. Your record arrives mint." },
          { icon: "🎧", title: "FOR THE CULTURE", desc: "From classic rock to hip-hop to jazz — we celebrate every genre that has ever moved a crowd." },
        ].map((item) => (
          <div key={item.title} style={{
            backgroundColor: "#141414",
            border: "1px solid #222",
            borderRadius: "4px",
            padding: "2rem",
            textAlign: "center",
          }}>
            <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</p>
            <p style={{ fontWeight: 700, letterSpacing: "2px", marginBottom: "0.75rem", fontSize: "0.9rem" }}>
              {item.title}
            </p>
            <p style={{ color: "#666", lineHeight: 1.7, fontSize: "0.9rem" }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div style={{
        textAlign: "center",
        borderTop: "1px solid #222",
        paddingTop: "4rem",
        maxWidth: "600px",
        margin: "0 auto",
      }}>
        <p style={{ fontSize: "1.5rem", fontStyle: "italic", color: "#444", lineHeight: 1.8 }}>
          "Without music, life would be a mistake."
        </p>
        <p style={{ color: "#333", marginTop: "1rem", letterSpacing: "2px", fontSize: "0.85rem" }}>
          — Friedrich Nietzsche
        </p>
      </div>

    </main>
  );
}