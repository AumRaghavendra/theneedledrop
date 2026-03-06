export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#0a0a0a",
      borderTop: "1px solid #222",
      padding: "2rem",
      textAlign: "center",
      color: "#555",
      fontSize: "0.85rem",
      letterSpacing: "1px",
    }}>
      <p style={{ marginBottom: "0.5rem", color: "#fff", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
  <svg width="24" height="22" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="17" fill="#111" stroke="#333" strokeWidth="1" />
    <circle cx="18" cy="18" r="13" fill="none" stroke="#222" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="9" fill="none" stroke="#222" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="5" fill="#e63946" />
    <circle cx="18" cy="18" r="1.5" fill="#0a0a0a" />
    <line x1="35" y1="4" x2="24" y2="18" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="35" cy="4" r="2" fill="#e63946" />
  </svg>
  TheNeedleDrop
</p>
      <p>© {new Date().getFullYear()} GrooveCart@2026. All rights reserved.</p>
      <p style={{ marginTop: "0.5rem" }}>
        Vinyl delivered to your door. No streams. No skips.
      </p>
    </footer>
  );
}