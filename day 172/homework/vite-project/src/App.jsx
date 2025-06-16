import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  const [dropdown, setDropdown] = useState("");

  // Event object testing
  const handleClick = (e) => {
    console.log("CLICK EVENT", e.type, e.target.name || e.target.innerText);
  };

  const handleMouseOver = (e) => {
    console.log("MOUSE OVER EVENT", e.type, e.target.name || e.target.innerText);
  };

  const handleFocus = (e) => {
    console.log("FOCUS EVENT", e.type, e.target.name || e.target.placeholder);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 space-y-8">
      <h1 className="text-2xl font-bold text-blue-600">React 19 Form Test</h1>

      <div
        className="p-6 bg-white shadow-md rounded-xl space-y-6 w-full max-w-md"
        onMouseOver={handleMouseOver}
      >
        {/* Text Input */}
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={handleFocus}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Radio buttons */}
        <div className="space-y-1">
          <p className="font-medium">Choose a radio:</p>
          {["Radio 1", "Radio 2", "Radio 3"].map((label, idx) => (
            <label key={idx} className="block">
              <input
                type="radio"
                name="radioGroup"
                value={label}
                checked={selectedRadio === label}
                onChange={(e) => setSelectedRadio(e.target.value)}
                className="mr-2"
              />
              {label}
            </label>
          ))}
        </div>

        {/* Checkboxes */}
        <div className="space-y-1">
          <p className="font-medium">Select checkboxes:</p>
          {["option1", "option2", "option3"].map((opt, idx) => (
            <label key={idx} className="block">
              <input
                type="checkbox"
                name={opt}
                checked={checkboxes[opt]}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>

        {/* Dropdown */}
        <div>
          <p className="font-medium">Select from dropdown:</p>
          <select
            value={dropdown}
            onChange={(e) => setDropdown(e.target.value)}
            className="w-full p-2 mt-1 border rounded-lg"
          >
            <option value="">-- Select --</option>
            <option value="Choice 1">Choice 1</option>
            <option value="Choice 2">Choice 2</option>
            <option value="Choice 3">Choice 3</option>
          </select>
        </div>

        {/* Event Button */}
        <button
          onClick={handleClick}
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
        >
          Click Me (Event Test)
        </button>
      </div>

      {/* Output */}
      <div className="mt-6 p-4 bg-white shadow rounded-lg w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Live Output:</h2>
        <p><strong>Text:</strong> {text}</p>
        <p><strong>Selected Radio:</strong> {selectedRadio}</p>
        <p><strong>Checkboxes:</strong> {Object.entries(checkboxes).map(([key, val]) => `${key}: ${val ? "✅" : "❌"}`).join(", ")}</p>
        <p><strong>Dropdown:</strong> {dropdown}</p>
      </div>
    </div>
  );
}
