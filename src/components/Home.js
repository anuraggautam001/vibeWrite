import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [latestBlog, setLatestBlog] = useState(null);

  useEffect(() => {
    // Retrieve the latest blog data from local storage
    const fetchLatestBlog = () => {
      const storedBlogs = localStorage.getItem('blogs');
      if (storedBlogs) {
        const blogsData = JSON.parse(storedBlogs);
        const latest = blogsData[blogsData.length - 1];
        setLatestBlog(latest);
      }
    };

    fetchLatestBlog();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex justify-center">Latest Blog</h2>
      <div className="flex justify-center">
        <div className="w-2/3">
          {latestBlog ? (
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{latestBlog.title}</h3>
              <p className="text-gray-700">{latestBlog.content}</p>
            </div>
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/blogs" className="text-blue-500 hover:underline">
          View All Blogs
        </Link>
      </div>
    </div>
  );
};

export default Home;
