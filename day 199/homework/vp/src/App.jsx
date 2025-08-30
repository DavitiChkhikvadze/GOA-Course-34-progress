import UsersLoader from "./components/UsersLoader";
import PostsManager from "./components/PostsManager";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">Day 199 Project</h1>
      <UsersLoader />
      <PostsManager />
    </div>
  );
}
