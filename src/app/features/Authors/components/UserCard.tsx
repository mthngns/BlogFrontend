import { User } from "@/app/lib/types";
import React from "react";
import ImageWithLoader from "../../BlogList/components/ImageWithLoader";
import { GoComment } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { RiBloggerLine } from "react-icons/ri";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="flex-shrink-0 w-full cursor-default hover:bg-slate-200 dark:hover:bg-slate-900 sm:w-1/3 lg:w-1/4 min-h-full flex border border-slate-300 dark:border-slate-700 p-3 rounded-md ">
      <div className="flex items-center gap-x-2">
        <div
          className="relative w-16 rounded-full overflow-hidden bg-emeral-400 p-0"
          style={{ aspectRatio: "1" }}
        >
          <ImageWithLoader
            src={user.avatar}
            alt={user.name}
            fill={true}
            priority={true}
            isLoading={user.avatar ? false : true}
          />
        </div>
        <div className="">
          <h2 className="dark:text-white font-bold">{user.name}</h2>
          <p className="text-xs dark:text-slate-500">{user.bio}</p>
          <div className="flex items-center text-sm gap-x-1">
            <RiBloggerLine size={16} />
            <p>{user.totalPosts}</p>
            <CiHeart className="ml-auto text-red-500" size={16} />
            <p>{user.totalLikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
