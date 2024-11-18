import { Blog } from "@/app/lib/types";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

interface BlogMetricsProps {
    blog:Blog
}

const BlogMetrics:React.FC<BlogMetricsProps> = ({blog}) => {
  return (
    <div className="flex gap-x-2 border-t dark:border-slate-700 pt-2 w-full">
      <div className="flex items-center text-sm gap-x-1">
        <IoEyeOutline size={16} />
        <p>{blog?.viewCount}</p>
      </div>
      <div className="flex items-center text-sm gap-x-1">
        <GoComment size={16} />
        <p>{blog?.comments.length}</p>
      </div>
      <div className="flex items-center ml-auto text-sm gap-x-1">
        <p>{blog?.totalLikes}</p>
        <CiHeart className="ml-auto text-red-500" size={16} />
      </div>
    </div>
  );
};

export default BlogMetrics;
