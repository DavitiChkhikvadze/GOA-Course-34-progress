import { Link } from "react-router-dom";

export default function CartPage({ cart, setCart }) {
  const removeItem = (id) => {
    setCart(cart.filter((item, idx) => idx !== id));
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Cart</h2>
      {cart.map((item, idx) => (
        <div key={idx} className="flex justify-between border p-2 mt-2">
          <span>
            {item.name} - ${item.price}
          </span>
          <button
            className="bg-red-500 text-white px-2"
            onClick={() => removeItem(idx)}
          >
            Remove
          </button>
        </div>
      ))}
      <Link to="/" className="block mt-4 underline text-blue-500">
        Back to Products
      </Link>
    </div>
  );
}
