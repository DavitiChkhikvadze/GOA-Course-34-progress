import { useState } from "react";
import Header from "./components/Header";
import FilterTabs from "./components/FilterTabs";
import ExtensionCard from "./components/ExtensionCard";
import { extensions as initialExtensions } from "./data/extensions";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [filter, setFilter] = useState("All");
  const [extensions, setExtensions] = useState(initialExtensions);
  const { theme } = useTheme();

  const handleToggle = (id) => {
    setExtensions(prev =>
      prev.map(ext =>
        ext.id === id ? { ...ext, active: !ext.active } : ext
      )
    );
  };

  const handleRemove = (id) => {
    setExtensions(prev => prev.filter(ext => ext.id !== id));
  };

  const filteredExtensions = extensions.filter(ext =>
    filter === "All" ? true : filter === "Active" ? ext.active : !ext.active
  );

  return (
    <div
      className={`min-h-screen px-4 py-6 transition-all ${
        theme === "dark"
          ? "bg-dark-gradient text-neutral-0"
          : "bg-light-gradient text-neutral-900"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-6">
        <Header />
        <h1 className="text-3xl font-bold">Extensions List</h1>
        <FilterTabs filter={filter} setFilter={setFilter} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExtensions.map((ext) => (
            <ExtensionCard
              key={ext.id}
              extension={ext}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
