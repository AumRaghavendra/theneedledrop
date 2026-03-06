import { Link } from "react-router-dom";
import vinyls from "../data/vinyls";

export default function Home() {
  const featured = vinyls.slice(0, 4);

  return (
    <main style={{ backgroundColor: "#0d0d0d", minHeight: "100vh", color: "#fff" }}>

      {/* Hero Section */}
      <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 2rem",
        background: "linear-gradient(180deg, #1a0a00 0%, #0d0d0d 100%)",
      }}>
        <p style={{ color: "#e63946", letterSpacing: "4px", fontSize: "0.85rem", marginBottom: "1rem" }}>
          FREE SHIPPING ON ORDERS OVER ₹3000
        </p>
        <h1 style={{ fontSize: "3.5rem", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "2px" }}>
          FEEL THE MUSIC.<br />
          <span style={{ color: "#e63946" }}>OWN THE VINYL.</span>
        </h1>
        <p style={{ color: "#888", fontSize: "1.1rem", maxWidth: "500px", marginBottom: "2.5rem" }}>
          Curated records from the greatest artists. No algorithms. No playlists. Just pure sound.
        </p>
        <Link to="/shop" style={{
          backgroundColor: "#e63946",
          color: "#fff",
          padding: "0.9rem 2.5rem",
          textDecoration: "none",
          fontWeight: 700,
          letterSpacing: "2px",
          fontSize: "0.9rem",
          borderRadius: "2px",
        }}>
          SHOP NOW
        </Link>
      </section>

      {/* Featured Section */}
      <section style={{ padding: "4rem 2rem" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "1.5rem",
          letterSpacing: "3px",
          marginBottom: "3rem",
          color: "#fff",
        }}>
          FEATURED RECORDS
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {featured.map((vinyl) => (
            <div key={vinyl.id} style={{
              backgroundColor: "#141414",
              border: "1px solid #222",
              borderRadius: "4px",
              overflow: "hidden",
              transition: "transform 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <img
                src={vinyl.cover}
                alt={vinyl.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/400x400/141414/555?text=No+Cover";
                }}
                style={{ width: "100%", aspectRatio: "1", objectFit: "cover" }}
              />
              <div style={{ padding: "1rem" }}>
                <p style={{ color: "#e63946", fontSize: "0.75rem", letterSpacing: "2px", marginBottom: "0.3rem" }}>
                  {vinyl.genre}
                </p>
                <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>{vinyl.title}</p>
                <p style={{ color: "#888", fontSize: "0.85rem" }}>{vinyl.artist}</p>
                <p style={{ color: "#fff", marginTop: "0.75rem", fontWeight: 600 }}>₹{vinyl.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/shop" style={{
            border: "1px solid #e63946",
            color: "#e63946",
            padding: "0.8rem 2rem",
            textDecoration: "none",
            letterSpacing: "2px",
            fontSize: "0.85rem",
            fontWeight: 600,
          }}>
            VIEW ALL RECORDS
          </Link>
        </div>
      </section>

    </main>
  );
}