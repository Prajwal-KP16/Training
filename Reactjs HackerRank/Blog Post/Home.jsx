import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [posts, setPosts] = useState([]);
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (name, value) => {
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createPost = () => {
    if (inputData.title.trim() && inputData.description.trim()) {
      setPosts([
        ...posts,
        {
          id: Date.now(),
          title: inputData.title,
          description: inputData.description,
        },
      ]);
      setInputData({ title: "", description: "" }); // Clear inputs
    }
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input
          title={inputData.title}
          description={inputData.description}
          onInputChange={handleInputChange}
        />
        <button
          type="button"
          data-testid="create-button"
          className="mt-10"
          onClick={createPost}
        >
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} onDeletePost={handleDeletePost} />
      </div>
    </div>
  );
}

export default Home;
