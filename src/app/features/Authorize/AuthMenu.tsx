"use client";

import React, { useState } from "react";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";
import ImageWithLoader from "../BlogList/components/ImageWithLoader";
import { User } from "@/app/lib/types";
import { IoLogOut } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const AuthMenu = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const [user, setUser] = useState<User>({
    "id": "8",
    "name": "Savannah Larson",
    "email": "savannah.larson@example.com",
    "password": "password123",
    "avatar": "https://randomuser.me/api/portraits/women/8.jpg",
    "bio": "Health and fitness enthusiast.",
    "posts": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "totalPosts": 6,
    "totalLikes": 200,
    "followers": 90
  })
  if(user){
    return (
        <div className="flex items-center gap-x-2 cursor-pointer">
          <div className="relative w-8 rounded-full overflow-hidden bg-emeral-400 p-0" style={{ aspectRatio: "1" }}>
              <ImageWithLoader
                  src={user.avatar}
                  alt={user.name}
                  fill={true}
                  priority={true}
                  isLoading={user.avatar ? false : true}
              />
          </div>
          <div className="max-w-32 sm:hidden lg:block">
            <h3 className="text-sm">{user.name}</h3>
            <p className="text-xs truncate text-slate-400">{user.bio} asdasdas</p>
          </div>
          <IoMdLogOut className="text-red-600" size={24}/>
        </div>
    );
  }
  return (
    <div className="flex">
      <div className="flex w-fit text-xs gap-x-0 font-semibold tracking-wide">
        <button
          className="min-w-12 hover:text-slate-400 hover:font-bold"
          onClick={() => setIsLoginFormOpen(true)}
        >
          <span className="">Log In</span>
        </button>
        <button
          className="min-w-16 border border-slate-700 dark:border-slate-600 px-2 py-1 rounded-md ml-2 hover:text-slate-400 hover:font-bold"
          onClick={() => setIsSignUpFormOpen(true)}
        >
          <span className="">Sign Up</span>
        </button>
      </div>
      {isLoginFormOpen && <LogInForm setIsLoginFormOpen={setIsLoginFormOpen} />}
      {isSignUpFormOpen && <SignUpForm setIsSignUpFormOpen={setIsSignUpFormOpen}/>}
    </div>
  );
};

export default AuthMenu;
