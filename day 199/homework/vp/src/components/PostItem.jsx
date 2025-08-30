export default function PostItem({ post, index, onDelete, onMoveUp, onMoveDown }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow flex flex-col gap-2">
      <h3 className="font-bold text-lg">{post.title}</h3>
      <p className="text-gray-700">{post.body}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onMoveUp(index)}
          className="bg-blue-500 text-white px-3 py-1 rounded-xl hover:bg-blue-600"
        >
          ↑ Up
        </button>
        <button
          onClick={() => onMoveDown(index)}
          className="bg-purple-500 text-white px-3 py-1 rounded-xl hover:bg-purple-600"
        >
          ↓ Down
        </button>
        <button
          onClick={() => onDelete(post.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
