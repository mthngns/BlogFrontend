"use client";

import React, { useState } from "react";
import { MdOutlineManageSearch } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import AuthMenu from "./AuthMenu";
import SearchBar from "./SearchBar";
import ThemeSwitcher from "./ThemeSwitcher";

const MobileMenu = () => {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);
  return (
    <div className="flex items-center gap-x-3 sm:hidden cursor-pointer dark:text-slate-400 text-slate-700">
            <ThemeSwitcher/>

      {!sideMenuIsOpen ? (
        <MdOutlineManageSearch
        className="text-white"
          size={30}
          onClick={() => setSideMenuIsOpen(true)}
        />
      ) : (
        <IoIosClose className="text-white" size={30} onClick={() => setSideMenuIsOpen(false)} />
      )}
      <div
        className={`absolute z-50 top-12 right-0 min-h-screen w-3/4 ${
          sideMenuIsOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-y-5 bg-slate-100/90 dark:bg-slate-950/80 w-full h-screen p-4 border-x border-l border-slate-700">
          <div className="flex w-full justify-between">
           <h2 className="text-xl font-bold dark:text-slate-200 ">Menu</h2>
            <AuthMenu/>
          </div>   
          <ul className="text-sm">
            <li className="py-2 border-b dark:border-slate-700 border-slate-400">Home</li>
            <li className="py-2 border-b dark:border-slate-700 border-slate-400">About</li>
            <li className="py-2 border-b dark:border-slate-700 border-slate-400">Blogs</li>
          </ul>
          <div className="border border-slate-400 dark:border-slate-700">
            <SearchBar/>
          </div>       
        </div>
      </div>

    </div>
  );
};

export default MobileMenu;
