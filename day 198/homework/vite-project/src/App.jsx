import LiveInput from "./components/LiveInput";
import ColorChanger from "./components/ColorChanger";
import Timer from "./components/Timer";
import Form from "./components/Form";
import PostApp from "./components/PostApp";

function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <LiveInput />
      <ColorChanger />
      <Timer />
      <Form />
      <PostApp />
    </div>
  );
}

export default App;
