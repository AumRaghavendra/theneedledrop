import { useState } from "react";
import vinyls from "../data/vinyls";
import type { Vinyl, CartItem } from "../types";

interface ShopProps {
  addToCart: (vinyl: Vinyl) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItem[];
}

export default function Shop({ addToCart, removeFromCart, cartItems }: ShopProps) {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", ...Array.from(new Set(vinyls.map((v) => v.genre)))];

  const getQuantity = (id: number) => {
    const item = cartItems.find((item) => item.vinyl.id === id);
    return item ? item.quantity : 0;
  };

  const filtered = vinyls.filter((v) => {
    const matchesSearch =
      v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.artist.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = selectedGenre === "All" || v.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <main style={{ backgroundColor: "#0d0d0d", minHeight: "100vh", color: "#fff", padding: "3rem 2rem" }}>

      <h1 style={{ textAlign: "center", letterSpacing: "4px", fontSize: "2rem", marginBottom: "0.5rem" }}>
        ALL RECORDS
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "3rem", letterSpacing: "1px" }}>
        {filtered.length} records found
      </p>

      {/* Filters */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        marginBottom: "3rem",
      }}>
        <input
          type="text"
          placeholder="Search artist or title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            backgroundColor: "#141414",
            border: "1px solid #333",
            color: "#fff",
            padding: "0.7rem 1.2rem",
            borderRadius: "2px",
            fontSize: "0.9rem",
            width: "280px",
            outline: "none",
          }}
        />

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              style={{
                backgroundColor: selectedGenre === genre ? "#e63946" : "#141414",
                color: selectedGenre === genre ? "#fff" : "#888",
                border: "1px solid #333",
                padding: "0.6rem 1.2rem",
                borderRadius: "2px",
                cursor: "pointer",
                fontSize: "0.8rem",
                letterSpacing: "1px",
              }}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        {filtered.map((vinyl) => (
          <div
            key={vinyl.id}
            style={{
              backgroundColor: "#141414",
              border: "1px solid #222",
              borderRadius: "4px",
              overflow: "hidden",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
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
              <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "0.2rem" }}>{vinyl.artist}</p>
              <p style={{ color: "#555", fontSize: "0.8rem", marginBottom: "0.75rem" }}>{vinyl.year}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontWeight: 700, fontSize: "1rem" }}>₹{vinyl.price}</p>
                {getQuantity(vinyl.id) === 0 ? (
                  <button
                    onClick={() => addToCart(vinyl)}
                    style={{
                      backgroundColor: "#e63946",
                      color: "#fff",
                      border: "none",
                      padding: "0.5rem 1rem",
                      borderRadius: "2px",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "1px",
                    }}
                  >
                    + ADD
                  </button>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <button
                      onClick={() => removeFromCart(vinyl.id)}
                      style={{
                        backgroundColor: "#1a1a1a",
                        color: "#fff",
                        border: "1px solid #333",
                        width: "30px",
                        height: "30px",
                        borderRadius: "2px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: 700,
                      }}
                    >
                      −
                    </button>
                    <span style={{ fontWeight: 700, fontSize: "1rem", minWidth: "16px", textAlign: "center" }}>
                      {getQuantity(vinyl.id)}
                    </span>
                    <button
                      onClick={() => addToCart(vinyl)}
                      style={{
                        backgroundColor: "#e63946",
                        color: "#fff",
                        border: "none",
                        width: "30px",
                        height: "30px",
                        borderRadius: "2px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: 700,
                      }}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "#555", marginTop: "4rem", letterSpacing: "2px" }}>
          NO RECORDS FOUND
        </p>
      )}

    </main>
  );
}