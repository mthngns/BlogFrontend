import ImageWithLoader from "@/app/features/BlogList/components/ImageWithLoader";
import React from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Blog, User } from "@/app/lib/types";

interface BlogContentProps {
  blog: Blog;
  user: User;
}

const BlogContent: React.FC<BlogContentProps> = ({
  blog: blog,
  user: user,
}) => {

  const blogDate = new Date(blog?.createdAt!).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex w-full justify-between py-2 items-end">
        <div className="flex items-center gap-x-2">
          <div className="relative w-10 rounded-full overflow-hidden bg-emeral-400 p-0"
            style={{ aspectRatio: "1" }}>
            <ImageWithLoader
              src={user?.avatar!}
              alt={user?.name!}
              fill={true}
              priority={true}
              isLoading={user?.avatar ? false : true}
            />
          </div>
          <p>{user?.name} / {blog?.category}</p>
        </div>
        <p>{blogDate} </p>
      </div>
      <h1 className="text-5xl font-black border-t dark:border-slate-700">{blog?.title}</h1>
      <ImageGallery images={blog?.images} />
      <p dangerouslySetInnerHTML={{__html: blog?.content?.replace(/\n/g, "<br />") || "",}}/>
    </div>
  );
};

export default BlogContent;
