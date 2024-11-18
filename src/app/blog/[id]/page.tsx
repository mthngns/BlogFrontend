"use client";

import BlogContent from "@/app/components/BlogContent/BlogContent";
import BlogMetrics from "@/app/components/BlogMetrics/BlogMetrics";
import CommentCard from "@/app/components/CommentCard/CommentCard";
import Landing from "@/app/components/Landing/Landing";
import Spinner from "@/app/components/Spinner/Spinner";
import { useGetBlogByIdQuery, useUpdateBlogMutation } from "@/redux/features/blogs/services/blogs";
import { useGetUserByIdQuery } from "@/redux/features/user/services/user";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const BlogPostPage = () => {
  const { id } = useParams();
  
  const { data: post, isLoading, error, refetch } = useGetBlogByIdQuery(id as string);
  const {data: user,isLoading: isUserLoading,error: isUserError,} = useGetUserByIdQuery(post?.authorId as string);
  const [updateBlog] = useUpdateBlogMutation();

  useEffect(() => {
    if(post){
      updateBlog({ id:post.id, viewCount:post.viewCount+1})
      .unwrap()
      .then(() => {
        refetch();
      })
      .catch((error) => {
        console.error("Error updating blog views:", error);
      });
    }
  }, [])
  
  if (isLoading || isUserLoading) return (
    <Spinner size="12"/>
  );
  if (error || isUserError) return <p>Error loading blog post.</p>;


  return (
    <div className="grow self-center min-h-full text-slate-700 dark:text-slate-400 px-20 flex flex-col py-10">
      <Landing video={false} />
      <div className="flex gap-x-10">
        <div className="w-4/6 border dark:border-slate-700 p-10">
          <BlogContent blog={post!} user={user!}/>
        </div>
        <div className="w-2/6  border dark:border-slate-700 py-10 px-5 flex flex-col h-fit gap-y-5">
          <h2 className="text-sm font-bold">{post?.comments.length} Comments</h2>
            <CommentCard  blog={post!} refetch={refetch} />
            <BlogMetrics blog={post!}/>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
