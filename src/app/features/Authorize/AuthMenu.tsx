"use client";

import React, { useState } from "react";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";

const AuthMenu = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
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
