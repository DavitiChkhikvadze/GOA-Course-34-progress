import UserProfile from "./UserProfile";
import { UserProvider } from "./UserContext";

import { CartProvider } from "./CartContext";
import AddToCart from "./AddToCart";
import Cart from "./Cart";

export default function App() {
  return (
    <div className="p-6 space-y-6">
      {/* UserContext ნაწილი */}
      <UserProvider>
        <UserProfile />
      </UserProvider>

      {/* CartContext ნაწილი */}
      <CartProvider>
        <AddToCart />
        <Cart />
      </CartProvider>
    </div>
  );
}
