function FilterTabs({ filter, setFilter }) {
  const buttons = ["All", "Active", "Inactive"];

  return (
    <div className="flex gap-2">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setFilter(btn)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
            ${
              filter === btn
                ? "bg-red-500 text-white"
                : "bg-neutral-200 text-neutral-700 hover:bg-red-400 hover:text-white"
            }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
