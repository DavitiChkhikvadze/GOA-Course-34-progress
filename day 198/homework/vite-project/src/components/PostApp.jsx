import { useState } from "react";

export default function PostApp() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    if (!title || !desc) return;
    setPosts([...posts, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-md m-4">
      <h2 className="text-lg font-bold mb-2">Post Creator</h2>
      <input
        type="text"
        placeholder="პოსტის სათაური"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />
      <textarea
        placeholder="პოსტის აღწერა"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      ></textarea>
      <button onClick={addPost} className="w-full bg-green-500 text-white py-2 rounded">Add Post</button>

      <div className="mt-4">
        {posts.map((post, i) => (
          <div key={i} className="p-3 bg-white shadow rounded mb-2">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
