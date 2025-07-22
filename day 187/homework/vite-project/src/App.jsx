import React from "react";
import FilterWords from "./components/FilterWords";
import Tabs from "./components/Tabs";
import Comments from "./components/Comments";

export default function App() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto mt-8">
      <FilterWords />
      <hr />
      <Tabs />
      <hr />
      <Comments />
    </div>
  );
}
