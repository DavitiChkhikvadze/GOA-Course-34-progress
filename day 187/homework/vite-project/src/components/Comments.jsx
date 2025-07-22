import React, { useState, useTransition } from "react";

const initialComments = Array.from({ length: 500 }, (_, i) => ({
  id: i,
  text: `კომენტარი #${i + 1}`,
}));

export default function Comments() {
  const [comments, setComments] = useState(initialComments);
  const [isPending, startTransition] = useTransition();

  const deleteComment = (id) => {
    startTransition(() => {
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">კომენტარები</h2>
      {isPending && <p className="text-sm text-gray-500">მუშაობს...</p>}
      <ul className="max-h-60 overflow-auto border p-2 space-y-1">
        {comments.map((comment) => (
          <li key={comment.id} className="flex justify-between items-center border p-1">
            <span>{comment.text}</span>
            <button onClick={() => deleteComment(comment.id)} className="text-red-500 hover:underline">
              წაშლა
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
