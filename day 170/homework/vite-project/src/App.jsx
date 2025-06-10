import InputWithLocalStorage from "./components/InputWithLocalStorage";
import WindowWidth from "./components/WindowWidth";
// import WindowWidthNoCleanup from "./components/WindowWidthNoCleanup";
import StopWatch from "./components/StopWatch";
// import StopWatchNoCleanup from "./components/StopWatchNoCleanup";

function App() {
  return (
    <div className="p-4 space-y-6">
      <InputWithLocalStorage />
      <WindowWidth />
      <StopWatch />
      {/* შეგვიძლია დავაკომენტაროთ სხვა კომპონენტები და ვნახოთ სხვაობა */}
    </div>
  );
}

export default App;
