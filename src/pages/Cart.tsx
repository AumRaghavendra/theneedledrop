import { Link } from "react-router-dom";
import type { CartItem } from "../types";

interface CartProps {
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
}

export default function Cart({ cartItems, removeFromCart }: CartProps) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.vinyl.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main style={{
        backgroundColor: "#0d0d0d",
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
      }}>
        <p style={{ fontSize: "3rem" }}>🛒</p>
        <h2 style={{ letterSpacing: "3px", fontSize: "1.5rem" }}>YOUR CART IS EMPTY</h2>
        <p style={{ color: "#555", letterSpacing: "1px" }}>Looks like you haven't added any records yet.</p>
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
          BROWSE RECORDS
        </Link>
      </main>
    );
  }

  return (
    <main style={{
      backgroundColor: "#0d0d0d",
      minHeight: "100vh",
      color: "#fff",
      padding: "3rem 2rem",
    }}>
      <h1 style={{ textAlign: "center", letterSpacing: "4px", fontSize: "2rem", marginBottom: "3rem" }}>
        YOUR CART
      </h1>

      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}>
        {cartItems.map((item) => (
          <div key={item.vinyl.id} style={{
            backgroundColor: "#141414",
            border: "1px solid #222",
            borderRadius: "4px",
            padding: "1.2rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}>
            <img
              src={item.vinyl.cover}
              alt={item.vinyl.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/400x400/141414/555?text=No+Cover";
              }}
              style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "2px" }}
            />

            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>
                {item.vinyl.title}
              </p>
              <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "0.2rem" }}>
                {item.vinyl.artist}
              </p>
              <p style={{ color: "#555", fontSize: "0.8rem" }}>
                Qty: {item.quantity}
              </p>
            </div>

            <div style={{ textAlign: "right" }}>
              <p style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>
                ₹{(item.vinyl.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.vinyl.id)}
                style={{
                  backgroundColor: "transparent",
                  color: "#e63946",
                  border: "1px solid #e63946",
                  padding: "0.4rem 0.9rem",
                  borderRadius: "2px",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                }}
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}

        {/* Order Summary */}
        <div style={{
          backgroundColor: "#141414",
          border: "1px solid #222",
          borderRadius: "4px",
          padding: "1.5rem",
          marginTop: "1rem",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
            <p style={{ color: "#888", letterSpacing: "1px" }}>SUBTOTAL</p>
            <p style={{ fontWeight: 600 }}>₹{total.toFixed(2)}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
            <p style={{ color: "#888", letterSpacing: "1px" }}>SHIPPING</p>
            <p style={{ color: total >= 50 ? "#4caf50" : "#fff", fontWeight: 600 }}>
              {total >= 50 ? "FREE" : "₹5.99"}
            </p>
          </div>
          <div style={{
            borderTop: "1px solid #222",
            paddingTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}>
            <p style={{ fontWeight: 700, letterSpacing: "2px" }}>TOTAL</p>
            <p style={{ fontWeight: 700, fontSize: "1.2rem" }}>
              ₹{(total >= 50 ? total : total + 5.99).toFixed(2)}
            </p>
          </div>

          <button style={{
            width: "100%",
            backgroundColor: "#e63946",
            color: "#fff",
            border: "none",
            padding: "1rem",
            borderRadius: "2px",
            cursor: "pointer",
            fontWeight: 700,
            letterSpacing: "2px",
            fontSize: "0.95rem",
          }}>
            CHECKOUT
          </button>
        </div>
      </div>
    </main>
  );
}