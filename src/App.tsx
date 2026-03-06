import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import type { CartItem } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (vinyl: CartItem["vinyl"]) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.vinyl.id === vinyl.id);
      if (existing) {
        return prev.map((item) =>
          item.vinyl.id === vinyl.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { vinyl, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.vinyl.id !== id));
  };

  return (
    <Router>
      <Header cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />} />  
       <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;