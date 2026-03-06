import { Link } from "react-router-dom";

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header style={{
      backgroundColor: "#0a0a0a",
      borderBottom: "1px solid #222",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
     <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
  <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="17" fill="#111" stroke="#333" strokeWidth="1" />
    <circle cx="18" cy="18" r="13" fill="none" stroke="#222" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="9" fill="none" stroke="#222" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="5" fill="#e63946" />
    <circle cx="18" cy="18" r="1.5" fill="#0a0a0a" />
    <line x1="35" y1="4" x2="24" y2="18" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="35" cy="4" r="2" fill="#e63946" />
  </svg>
  <h1 style={{ color: "#fff", fontSize: "1.5rem", letterSpacing: "2px", margin: 0 }}>
    TheNeedleDrop
  </h1>
</Link>

      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Link to="/" style={navLink}>Home</Link>
        <Link to="/shop" style={navLink}>Shop</Link>
        <Link to="/about" style={navLink}>About</Link>
        <Link to="/cart" style={{ ...navLink, position: "relative" }}>
          🛒 Cart
          {cartCount > 0 && (
            <span style={{
              backgroundColor: "#e63946",
              color: "#fff",
              borderRadius: "50%",
              padding: "2px 7px",
              fontSize: "0.75rem",
              marginLeft: "6px",
            }}>
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

const navLink: React.CSSProperties = {
  color: "#ccc",
  textDecoration: "none",
  fontSize: "0.95rem",
  letterSpacing: "1px",
  transition: "color 0.2s",
};