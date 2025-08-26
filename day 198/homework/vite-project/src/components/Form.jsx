import { useState } from "react";

export default function Form() {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.password) {
      setErrors("ყველა ველი აუცილებელია!");
      return;
    }

    localStorage.setItem("formData", JSON.stringify(values));
    setErrors("");
    alert("მონაცემები შენახულია!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-xl shadow-md m-4">
      <h2 className="text-lg font-bold mb-2">Register Form</h2>
      {errors && <p className="text-red-500 mb-2">{errors}</p>}
      <input name="name" type="text" placeholder="სახელი" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
      <input name="email" type="email" placeholder="ელ-ფოსტა" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
      <input name="password" type="password" placeholder="პაროლი" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
    </form>
  );
}
