import { useEffect, useState } from "react";

export default function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
  ];

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Products</h2>
      <ul className="space-y-2 mt-2">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center border p-2 rounded-lg"
          >
            <span>
              {p.name} - ${p.price}
            </span>
            <button
              onClick={() => addToCart(p)}
              className="bg-blue-500 text-white px-3 py-1 rounded-lg"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <ul className="space-y-2 mt-2">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border p-2 rounded-lg"
            >
              <span>
                {item.name} - ${item.price}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
