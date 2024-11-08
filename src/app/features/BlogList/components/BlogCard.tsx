import { Blog, User } from "@/app/lib/types";
import React from "react";
import ImageWithLoader from "./ImageWithLoader";
import { IoEyeOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

type BlogCardProps = {
  blogData: Blog;
  author:User
};

const BlogCard: React.FC<BlogCardProps> = ({ ...data }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 h-full flex gap-y-5 flex-col justify-between p-4 border dark:border-slate-700 text-black dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-950">
        <div className="flex items-center gap-x-2">
            <div
            className="relative w-8 rounded-full overflow-hidden bg-emeral-400 p-0"
            style={{ aspectRatio: "1" }}
            >
            <ImageWithLoader
                src={data.author.avatar}
                alt={data.blogData.title}
                fill={true}
                priority={true}
                isLoading={data.blogData.images[0] ? false : true}
            />
            </div>
            <div className="">
            <h2 className="dark:text-white font-bold">{data.author.name}</h2>
            <p className="text-xs dark:text-slate-500">{data.author.bio}</p>
            </div>
        </div>
      <div className=" flex w-full flex-col gap-y-5 cursor-pointer">
        <div
          className="relative p-0"
          style={{ aspectRatio: "4/3" }}
        >
          <ImageWithLoader
            src={data.blogData.images[0]}
            alt={data.blogData.title}
            fill={true}
            priority={true}
            isLoading={data.blogData.images[0] ? false : true}
          />
        </div>
        <h2 className=" text-lg font-black tracking-wide truncate hover:text-blue-500">
          {data.blogData.title}
        </h2>
      </div>
      <div className="flex gap-x-2 border-t pt-2 w-full">
        <div className="flex items-center text-sm gap-x-1">
          <IoEyeOutline size={16} />
          <p>{data.blogData.viewCount}</p>
        </div>
        <div className="flex items-center text-sm gap-x-1">
          <GoComment size={16} />
          <p>{data.blogData.comments.length}</p>
        </div>
        <div className="flex items-center ml-auto text-sm gap-x-1">
          <p>{data.blogData.totalLikes}</p>
          <CiHeart className="ml-auto text-red-500" size={16} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
