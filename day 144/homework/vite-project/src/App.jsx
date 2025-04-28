import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleOperation = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("გთხოვთ შეიყვანოთ რიცხვები");
      return;
    }

    let res;
    switch (op) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "ნულზე გაყოფა არ შეიძლება";
        break;
      case "reset":
        setNum1("");
        setNum2("");
        setResult(null);
        return;
      default:
        return;
    }

    setResult(res);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-blue-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">მარტივი კალკულატორი</h1>
        <div className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="შეიყვანე პირველი რიცხვი"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="p-3 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="number"
            placeholder="შეიყვანე მეორე რიცხვი"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="p-3 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <button
              onClick={() => handleOperation("+")}
              className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-xl shadow-md"
            >
              +
            </button>
            <button
              onClick={() => handleOperation("-")}
              className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-xl shadow-md"
            >
              -
            </button>
            <button
              onClick={() => handleOperation("*")}
              className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-xl shadow-md"
            >
              *
            </button>
            <button
              onClick={() => handleOperation("/")}
              className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-xl shadow-md"
            >
              /
            </button>
            <button
              onClick={() => handleOperation("reset")}
              className="bg-red-400 hover:bg-red-500 text-white px-5 py-2 rounded-xl shadow-md"
            >
              Reset
            </button>
          </div>
          {result !== null && (
            <div className="mt-6 text-center text-xl font-semibold text-blue-700">
              შედეგი: {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
