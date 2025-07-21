function ToggleSwitch({ checked, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-neutral-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-400 
          rounded-full peer dark:bg-neutral-700 peer-checked:bg-red-500 transition-all"></div>
    </label>
  );
}

export default ToggleSwitch;
