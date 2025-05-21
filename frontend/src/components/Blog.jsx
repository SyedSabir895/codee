import React, { useState, useEffect } from "react";

const Blog = () => {
  // Load posts from localStorage or use an empty array
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("blogPosts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const [newPost, setNewPost] = useState({ title: "", date: "", content: "" });

  useEffect(() => {
    // Save posts to localStorage whenever posts change
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }, [posts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };
``
  const handleAddPost = () => {
    if (newPost.title && newPost.date && newPost.content) {
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      setNewPost({ title: "", date: "", content: "" });
    }
  };

  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-blue-500">
      <h2 className="text-4xl font-bold text-white mb-8">Blog</h2>
      {posts.map((post, index) => (
        <div key={index} className="mb-8 p-4 bg-white rounded shadow-md">
          <h3 className="text-2xl font-semibold text-blue-500">{post.title}</h3>
          <p className="text-gray-600">{post.date}</p>
          <p className="text-gray-800 mt-4">{post.content}</p>
          <button
            onClick={() => handleDeletePost(index)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Delete
          </button>
        </div>
      ))}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-white mb-4">Add New Post</h3>
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="p-2 border rounded mb-4 w-full"
        />
        <input
          type="date"
          name="date"
          value={newPost.date}
          onChange={handleInputChange}
          className="p-2 border rounded mb-4 w-full"
        />
        <textarea
          name="content"
          value={newPost.content}
          onChange={handleInputChange}
          placeholder="Content"
          className="p-2 border rounded mb-4 w-full"
        />
        <button
          onClick={handleAddPost}
          className="bg-white text-blue-500 px-4 py-2 rounded cursor-pointer"
        >
          Add Post
        </button>
      </div>
    </div>
  );
};

export default Blog;
