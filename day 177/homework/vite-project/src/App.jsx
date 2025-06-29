import ClickTracker from "./components/ClickTracker";
import InputClickCounter from "./components/InputClickCounter";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-center text-4xl font-bold text-gray-700 mb-6">
        Click Tracking App
      </h1>
      <ClickTracker />
      <InputClickCounter />
      <div className="h-[150vh]"></div> {/* რომ სქროლი იყოს */}
    </div>
  );
}
