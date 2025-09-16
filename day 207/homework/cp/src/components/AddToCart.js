import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function AddToCart() {
  const { addProduct } = useContext(CartContext);

  const handleAdd = () => {
    const newProduct = { id: Date.now(), name: "Product " + Date.now() };
    addProduct(newProduct);
  };

  return (
    <button
      onClick={handleAdd}
      className="px-3 py-1 bg-green-500 text-white rounded"
    >
      Add Product
    </button>
  );
}
