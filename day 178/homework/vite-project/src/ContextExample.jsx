import { ColorProvider, useColor } from "./context/ColorContext";
import Level1 from "./components/Level1";

function InnerTree() {
  const { toggleColor } = useColor();

  return (
    <>
      <button
        onClick={toggleColor}
        className="mb-4 px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition"
      >
        შეცვალე ფერი (context)
      </button>
      <Level1 />
    </>
  );
}

function ContextExample() {
  return (
    <div className="border-2 p-5 rounded-xl w-full max-w-md bg-slate-800">
      <h2 className="text-xl font-semibold mb-4">Context API</h2>
      <ColorProvider>
        <InnerTree />
      </ColorProvider>
    </div>
  );
}

export default ContextExample;
