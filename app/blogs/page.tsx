"use client"
import { useEffect, useState } from 'react';

type Blog = {
  id: string;
  title: string;
  content: string;
  createdAt?: { seconds: number; nanoseconds: number };
};

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  async function fetchBlogs() {
    try {
      const res = await fetch('/api/save-blog');
      if (!res.ok) throw new Error('Failed to load blogs');
      const data: Blog[] = await res.json();
      setBlogs(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }

  fetchBlogs();
}, []);


  if (loading) return <p className="text-lg text-gray-600 mt-6">Loading blogs...</p>;
  if (error) return <p className="text-lg text-red-500 mt-6">{error}</p>;
  if (blogs.length === 0) return <p className="text-lg text-gray-600 mt-6">No blogs posted yet.</p>;

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
        <span role="img" aria-label="Newspaper emoji" className="mr-2">📰</span>
        Latest Blog Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl w-full">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 p-6 pb-2 leading-snug">{blog.title}</h2>
              <p className="text-gray-700 px-6 py-2 text-base leading-relaxed">{blog.content}</p>
            </div>
            {blog.createdAt && (
              <p className="text-sm text-gray-400 mt-4 px-6 pb-6 border-t border-gray-100 pt-4">
                Published on: {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()} at {new Date(blog.createdAt.seconds * 1000).toLocaleTimeString()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}