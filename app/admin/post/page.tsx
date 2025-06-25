'use client';

import { useUser } from '@clerk/nextjs';
import { useState } from 'react';

export default function PostPage() {
  const { user, isSignedIn } = useUser();

  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/save-blog', {
      method: 'POST',
      body: JSON.stringify({ title: blogTitle, content: blogContent }),
      headers: { 'Content-Type': 'application/json' },
    });
    alert(res.ok ? 'Blog posted!' : 'Blog error!');
  };

  if (!isSignedIn) return <p className="text-center p-4">Please sign in to post content.</p>;

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
          <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">Post Blog</button>
        </form>
      </div>
    </div>
  );
}
