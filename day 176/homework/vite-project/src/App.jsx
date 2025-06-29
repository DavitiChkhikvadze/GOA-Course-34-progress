import Counter from "./components/counter";
import NameForm from "./components/NameForm";
import ScrollDirection from "./components/ScrollDirection";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <ScrollDirection />
      <h1 className="text-center text-4xl font-bold text-gray-700 mb-6">React Assignments</h1>
      <Counter />
      <NameForm />
      <div className="h-[150vh]"></div> {/* რომ სქროლი მუშაობდეს */}
    </div>
  );
}
