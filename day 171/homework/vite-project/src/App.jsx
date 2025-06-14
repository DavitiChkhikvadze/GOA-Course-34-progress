import RegisterForm from "./components/RegisterForm";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        React ფორმა და ტაიმერი
      </h1>
      <RegisterForm />
      <Timer />
    </div>
  );
}

export default App;
