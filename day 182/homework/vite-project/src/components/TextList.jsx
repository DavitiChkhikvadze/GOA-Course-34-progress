export default function TextList({ items }) {
  if (items.length === 0) {
    return <p className="text-gray-500 italic mt-4">No items yet.</p>;
  }

  return (
    <ul className="mt-4 space-y-2">
      {items.map((text, idx) => (
        <li
          key={idx}
          className="px-4 py-2 bg-white rounded-lg shadow-sm border"
        >
          {text}
        </li>
      ))}
    </ul>
  );
}
