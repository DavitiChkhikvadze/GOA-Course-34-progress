import { useState, useEffect } from "react";
import PostItem from "./PostItem";

export default function PostsManager() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Error loading posts:", err);
      }
    };
    fetchPosts();
  }, []);

  const addPost = () => {
    if (!title.trim() || !body.trim()) return;
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([newPost, ...posts]);
    setTitle("");
    setBody("");
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newPosts = [...posts];
    [newPosts[index - 1], newPosts[index]] = [newPosts[index], newPosts[index - 1]];
    setPosts(newPosts);
  };

  const moveDown = (index) => {
    if (index === posts.length - 1) return;
    const newPosts = [...posts];
    [newPosts[index], newPosts[index + 1]] = [newPosts[index + 1], newPosts[index]];
    setPosts(newPosts);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Posts Manager</h2>

      <div className="flex flex-col gap-2 mb-6">
        <input
          type="text"
          placeholder="Post title"
          className="border rounded-lg p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post body"
          className="border rounded-lg p-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          onClick={addPost}
          className="bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700"
        >
          Add Post
        </button>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostItem
            key={post.id}
            post={post}
            index={index}
            onDelete={deletePost}
            onMoveUp={moveUp}
            onMoveDown={moveDown}
          />
        ))}
      </div>
    </div>
  );
}
