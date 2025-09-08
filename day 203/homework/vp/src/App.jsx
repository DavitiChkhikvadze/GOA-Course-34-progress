import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LocationCard from "./components/LocationCard";
import MovementTracker from "./components/MovementTracker";
import TodoApp from "./components/TodoApp";
import ProductsPage from "./components/ProductsPage";
import CartPage from "./components/CartPage";
import SearchJoke from "./components/SearchJoke";
import NetworkStatus from "./components/NetworkStatus";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold">Level 203 Tasks</h1>

        <LocationCard />
        <MovementTracker />
        <TodoApp />

        <Routes>
          <Route path="/" element={<ProductsPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        </Routes>

        <SearchJoke />
        <NetworkStatus />
      </div>
    </Router>
  );
}
