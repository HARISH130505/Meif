'use client';

import { useUser } from '@clerk/nextjs';
import { useState, FormEvent } from 'react';

export default function PostPage() {
  const { isSignedIn } = useUser();

  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleBlogSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/save-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: blogTitle, content: blogContent }),
      });

      alert(res.ok ? 'Blog posted!' : 'Blog error!');
    } catch (err) {
      console.error('Blog submission failed:', err);
      alert('Something went wrong!');
    }
  };

  if (!isSignedIn) {
    return <p className="text-center p-4">Please sign in to post content.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white shadow my-5 p-6 rounded">
        <h2 className="text-xl font-bold mb-4">📝 Post a Blog</h2>
        <form onSubmit={handleBlogSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="Content"
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            className="w-full border p-2 rounded h-40"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
}
