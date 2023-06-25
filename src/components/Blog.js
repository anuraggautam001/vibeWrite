import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      content,
    };

    setBlogs([...blogs, newBlog]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Your Blogs</h2>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Write a Blog</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-800 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-800 font-semibold mb-2">
            Content
          </label>
          <textarea
            id="content"
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            value={content}
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Post Blog
        </button>
      </form>

      
    </div>
  );
};

export default Blog;
