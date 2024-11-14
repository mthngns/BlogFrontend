"use client";

import ImageGallery from "@/app/components/ImageGallery/ImageGallery";
import Landing from "@/app/components/Landing/Landing";
import UserCard from "@/app/features/Authors/components/UserCard";
import { useGetBlogByIdQuery } from "@/redux/features/blogs/services/blogs";
import { useGetUserByIdQuery } from "@/redux/features/user/services/user";
import { useParams } from "next/navigation";

const BlogPostPage = () => {
  const { id } = useParams(); // Use useParams instead of useRouter

  const { data: post, isLoading, error } = useGetBlogByIdQuery(id as string);
  const {
    data: user,
    isLoading: isUserLoading,
    error: isUserError,
  } = useGetUserByIdQuery(post?.authorId as string);
  if (isLoading || isUserLoading) return <p>Loading...</p>;
  if (error || isUserError) return <p>Error loading blog post.</p>;

  const formattedDate = new Date (post?.createdAt!).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="grow self-center min-h-full px-20 flex flex-col gap-y-10 py-10">
      <Landing video={false} />
      <div className="w-4/6 self-center border p-20 flex flex-col gap-y-10">
        <div>
          <div className="flex w-full justify-between">
            <p>{user?.name} {post?.category}</p>
            <p>{formattedDate} </p>
          </div>
          <h1 className="text-5xl font-black border-t dark:border-slate-700">
            {post?.title}
          </h1>
          <ImageGallery images={post?.images} />
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: post?.content?.replace(/\n/g, "<br />") || "",
          }}
        />
      </div>
    </div>
  );
};

export default BlogPostPage;
