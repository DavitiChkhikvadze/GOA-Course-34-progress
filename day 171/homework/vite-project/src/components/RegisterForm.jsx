import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("მონაცემები წარმატებით შეინახა!");
    setFormData({ username: "", email: "" });
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto my-6">
      <h2 className="text-xl font-bold mb-4 text-center">რეგისტრაცია</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="მომხმარებლის სახელი"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="ელფოსტა"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          რეგისტრაცია
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
