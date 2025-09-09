import React, { useState } from "react";

export default function App() {
  // 1) Phone input formatter
  const [phoneDigits, setPhoneDigits] = useState("");

  function formatPhone(d) {
    const digits = d.slice(0, 9);
    const g1 = digits.slice(0, 3);
    const g2 = digits.slice(3, 6);
    const g3 = digits.slice(6, 9);

    let result = "+995";
    if (g1) result += " " + g1;
    if (g2) result += " " + g2;
    if (g3) result += " " + g3;
    return result;
  }

  function handlePhoneChange(e) {
    const raw = e.target.value.replace(/\D/g, "");
    let trimmed = raw;
    if (trimmed.startsWith("995")) trimmed = trimmed.slice(3);
    setPhoneDigits(trimmed.slice(0, 9));
  }

  const formattedPhone = phoneDigits ? formatPhone(phoneDigits) : "";

  // 2) Form with multiple inputs
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });

  function handleUserChange(e) {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  // 3) Textarea with limit
  const LIMIT = 100;
  const [text, setText] = useState("");
  const [limitReached, setLimitReached] = useState(false);

  function handleTextChange(e) {
    const val = e.target.value;
    if (val.length <= LIMIT) {
      setText(val);
      setLimitReached(false);
    } else {
      setLimitReached(true);
    }
  }

  // 4) Counter
  const [counter, setCounter] = useState(0);
  const counterStyle = {
    color: counter > 5 ? "green" : counter < 0 ? "red" : "black",
    fontWeight: "bold",
  };

  // 5) Card hover
  const [hovered, setHovered] = useState(false);
  const cardStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: hovered ? "#fbbf24" : "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "0.2s",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Level 204</h1>

      {/* 1) Phone input */}
      <section>
        <h2>1 - Phone Input</h2>
        <input
          value={formattedPhone}
          onChange={handlePhoneChange}
          placeholder="555123456"
        />
        <p>Raw: {phoneDigits}</p>
      </section>

      {/* 2) Form */}
      <section>
        <h2>2 - Form</h2>
        <input
          name="firstName"
          value={user.firstName}
          onChange={handleUserChange}
          placeholder="სახელი"
        />
        <input
          name="lastName"
          value={user.lastName}
          onChange={handleUserChange}
          placeholder="გვარი"
        />
        <input
          name="email"
          value={user.email}
          onChange={handleUserChange}
          placeholder="იმეილი"
        />
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </section>

      {/* 3) Textarea */}
      <section>
        <h2>3 - Textarea</h2>
        <textarea
          value={text}
          onChange={handleTextChange}
          rows="4"
          cols="40"
        />
        <p>{text.length}/{LIMIT}</p>
        {limitReached && <p style={{ color: "red" }}>Limit reached!</p>}
      </section>

      {/* 4) Counter */}
      <section>
        <h2>4 - Counter</h2>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <span style={counterStyle}> {counter} </span>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
      </section>

      {/* 5) Card */}
      <section>
        <h2>5 - Card</h2>
        <div
          style={cardStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? "Hovered!" : "Hover me"}
        </div>
      </section>
    </div>
  );
}
