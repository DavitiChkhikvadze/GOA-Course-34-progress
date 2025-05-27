import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
    };

    setExpenses([newExpense, ...expenses]);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">💸 Personal Expense Tracker</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="ხარჯის დასახელება"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="თანხა"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            დამატება
          </button>
        </form>

        <div className="mt-8 space-y-4">
          {expenses.length === 0 && (
            <p className="text-center text-gray-500">ჯერ ხარჯი არ არის დამატებული.</p>
          )}
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="bg-indigo-100 p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold text-indigo-800">{expense.title}</h2>
                <p className="text-gray-700">📅 {expense.date}</p>
              </div>
              <div className="text-right text-indigo-700 font-bold text-lg">
                ₾{expense.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
