"use client";

import React, { useState } from "react";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";
import ImageWithLoader from "../BlogList/components/ImageWithLoader";
import { User } from "@/app/lib/types";
import { IoMdLogOut } from "react-icons/io";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/features/user/store/user";
import useLogout from "@/app/utils/logout";

const AuthMenu = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const user: User | null = useSelector(getUser);
  const logout = useLogout();
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
            <p className="text-xs truncate text-slate-400">{user.bio}</p>
          </div>
          <IoMdLogOut className="text-red-600 hover:text-red-400 rounded-full"
            size={24}
            onClick={()=>logout()}
          />
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
