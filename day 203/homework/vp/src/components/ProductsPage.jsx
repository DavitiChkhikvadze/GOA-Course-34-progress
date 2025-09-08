import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Apple", price: 1 },
  { id: 2, name: "Banana", price: 2 },
  { id: 3, name: "Orange", price: 3 },
];

export default function ProductsPage({ cart, setCart }) {
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Products</h2>
      {products.map((p) => (
        <div key={p.id} className="flex justify-between border p-2 mt-2">
          <span>
            {p.name} - ${p.price}
          </span>
          <button
            className="bg-green-500 text-white px-2"
            onClick={() => addToCart(p)}
          >
            Add to Cart
          </button>
        </div>
      ))}
      <Link to="/cart" className="block mt-4 underline text-blue-500">
        Go to Cart
      </Link>
    </div>
  );
}
