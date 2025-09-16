import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="mt-4 p-4 border rounded w-60">
      <h2 className="text-lg font-bold">Cart</h2>
      <p>Products in cart: {cart.length}</p>
    </div>
  );
}
