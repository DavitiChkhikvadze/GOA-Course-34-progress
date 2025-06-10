import { useState, useEffect } from "react";

const InputWithLocalStorage = () => {
  const [text, setText] = useState("");

  // ჩავტვირთოთ მნიშვნელობა localStorage-დან
  useEffect(() => {
    const saved = localStorage.getItem("myInput");
    if (saved) {
      setText(saved);
    }
  }, []);

  // შევინახოთ localStorage-ში თითო ასოს ცვლილებაზე
  const handleChange = (e) => {
    setText(e.target.value);
    localStorage.setItem("myInput", e.target.value);
  };

  return (
    <div>
      <h2>ინფუთი (localStorage)</h2>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
};

export default InputWithLocalStorage;
