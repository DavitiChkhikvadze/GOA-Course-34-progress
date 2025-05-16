import React from "react";
import PropTypes from "prop-types";

function Greeting({ name, age }) {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-white text-center">
      <h1 className="text-xl font-bold">Hello, {name}!</h1>
      <p className="text-gray-700">You are {age} years old.</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Greeting name="David" age={15} />
    </div>
  );
}
