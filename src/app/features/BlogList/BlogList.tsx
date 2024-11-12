'use client'

import React from "react";
import BlogCard from "./components/BlogCard";
import { Blog, BlogCategories, User } from "@/app/lib/types";
import { FaArrowRight } from "react-icons/fa";
import { useGetAllBlogsQuery } from "@/redux/features/blogs/services/blogs";
import { useGetAllUsersQuery } from "@/redux/features/user/services/user";

const BlogList = () => {

  const { data: posts, error: blogError, isLoading: isBlogLoading } = useGetAllBlogsQuery();
  const { data: users, error: userError, isLoading: isUserLoading } = useGetAllUsersQuery();

  if (blogError || userError) {
    return <div>Bir hata oluştu</div>;
  }

  if (isBlogLoading || isUserLoading) {
    return <div>Yükleniyor...</div>;
  }

  if (!posts || !users) {
    return <div>Gösterilecek gönderi yok</div>;
  }

  const categorizeBlogs = (category:BlogCategories) => posts.filter((blog) => blog.category === category);

  const blogCategories = [
    { name: "Technology", blogs: categorizeBlogs("Technology") },
    { name: "Health", blogs: categorizeBlogs("Health") },
    { name: "Nature", blogs: categorizeBlogs("Nature") },
    { name: "Life", blogs: categorizeBlogs("Life") },
    { name: "Cooking", blogs: categorizeBlogs("Cooking") },
    { name: "Travel", blogs: categorizeBlogs("Travel") },
    { name: "Economy", blogs: categorizeBlogs("Economy") },
    { name: "Fashion", blogs: categorizeBlogs("Fashion") }
  ];


  return (
    <div className="flex flex-col gap-y-10 w-full lg:w-5/6 text-slate-600 dark:text-slate-400 self-center pb-10">
      {blogCategories.map(({ name, blogs }) => (
        <div key={name} className="w-full border p-4 sm:p-10 dark:border-slate-700">
          <h2 className="mb-3 dark:text-slate-200 text-3xl font-extrabold underline">
            {name} ({blogs.length})
          </h2>
          <p className="mb-3">Latest {name} Blogs</p>
          <div className="flex gap-10 overflow-x-auto">
            {blogs.map((blog: Blog) => {
              const author = users.find((user) => user.id === blog.authorId);
              return <BlogCard key={blog.id} blogData={blog} author={author!} />;
            })}
          </div>
          <div className="flex items-center mt-5 text-xs gap-x-1">
            <p>Scroll for more...</p>
            <FaArrowRight size={10} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;


