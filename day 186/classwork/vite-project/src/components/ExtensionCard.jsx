import ToggleSwitch from "./ToggleSwitch";

function ExtensionCard({ extension, onToggle, onRemove }) {
  return (
    <div
      className={`rounded-xl p-4 shadow-md transition-colors flex flex-col justify-between gap-3 ${extension.color}`}
    >
      <div className="flex items-start gap-3">
        <img
          src={`./src/assets/images/${extension.icon}`}
          alt={extension.name}
          className="w-10 h-10"
        />
        <div>
          <h2 className="font-semibold text-lg">{extension.name}</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            {extension.desc}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <button
          onClick={() => onRemove(extension.id)}
          className="text-sm px-3 py-1.5 bg-neutral-600 text-white rounded-md hover:bg-red-500 transition"
        >
          Remove
        </button>
        <ToggleSwitch
          checked={extension.active}
          onChange={() => onToggle(extension.id)}
        />
      </div>
    </div>
  );
}

export default ExtensionCard;
