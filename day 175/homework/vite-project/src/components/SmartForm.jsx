import { useRef } from "react";

export default function SmartForm() {
  const nameRef = useRef();
  const ageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const age = ageRef.current.value.trim();

    if (!name && !age) {
      nameRef.current.focus();
    } else if (!name) {
      nameRef.current.focus();
    } else if (!age) {
      ageRef.current.focus();
    } else {
      alert(`Name: ${name}, Age: ${age}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 max-w-md mx-auto mt-10 rounded-lg shadow-lg flex flex-col gap-4 border border-gray-300"
    >
      <input
        ref={nameRef}
        type="text"
        placeholder="Enter name"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        ref={ageRef}
        type="number"
        placeholder="Enter age"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
      >
        Submit
      </button>
    </form>
  );
}
