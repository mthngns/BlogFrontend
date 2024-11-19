'use client';

import { Blog, User } from '@/app/lib/types';
import { useCreateBlogMutation } from '@/redux/features/blogs/services/blogs';
import { getBlogs } from '@/redux/features/blogs/store/blogs';
import { getUser } from '@/redux/features/user/store/user';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const NewPost = () => {
  const user: User | null = useSelector(getUser);
  const blogs: Blog[] = useSelector(getBlogs) || [];
  const [createBlog] = useCreateBlogMutation();
  const [newBlog, setNewBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (user && blogs) {
      setNewBlog({
        id: (blogs.length + 1).toString(),
        title: '',
        category: '',
        content: '',
        authorId: user.id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        totalLikes: 0,
        viewCount: 0,
        images: [
          `https://picsum.photos/800/600?random=${Math.floor(
            Math.random() * 99
          )}`,
        ],
        comments: [],
      });
    }
  }, [user, blogs]);

  const handleCreateNewBlog = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!newBlog) return;

    try {
      const createdBlog = await createBlog(newBlog).unwrap().then((res)=>window.location.href=`/blog/${res.id}`);
      console.log('Blog başarıyla oluşturuldu:', createdBlog);
    } catch (error) {
      console.error('Blog oluşturulurken bir hata oluştu:', error);
    }
  };

  if (!user) {
    return (
      <div className="text-red-500">
        You need to be logged in to create a new blog post.
      </div>
    );
  }

  return (
    <div className="mt-10 flex w-3/5 self-center grow p-10 dark:text-slate-300">
      <div className="w-full flex flex-col gap-y-4">
        <h2 className="text-3xl font-bold">New Post</h2>
        <form className="flex flex-col gap-y-4">
          <input
            className="p-2 border dark:border-slate-700 rounded-md dark:bg-slate-800"
            type="text"
            placeholder="Title"
            value={newBlog?.title || ''}
            onChange={(e) => {
              if (newBlog) {
                setNewBlog({ ...newBlog, title: e.target.value });
              }
            }}
          />
          <textarea
            placeholder="Content"
            className="p-2 min-h-96 border dark:border-slate-700 rounded-md dark:bg-slate-800"
            value={newBlog?.content || ''}
            onChange={(e) => {
              if (newBlog) {
                setNewBlog({ ...newBlog, content: e.target.value });
              }
            }}
          />
          <button
            className="p-2 border border-green-600/50 font-bold text-green-600 rounded-md"
            onClick={handleCreateNewBlog}
            disabled={!newBlog}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
