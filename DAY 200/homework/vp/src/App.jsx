import PasswordInput from "./components/PasswordInput";
import Counter from "./components/Counter";
import ProductSearch from "./components/ProductSearch";
import ThemeToggle from "./components/ThemeToggle";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen p-6">
      <ThemeToggle />
      <h1 className="text-2xl font-bold mb-4">Level 200 (YIPPE) 🚀</h1>
      <PasswordInput />
      <Counter />
      <ProductSearch />
      <ProductList />
    </div>
  );
}

export default App;
