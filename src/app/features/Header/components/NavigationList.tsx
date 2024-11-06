import React from "react";

const NavigationList = () => {
  return (
    <ul className={`md:flex hidden w-fit text-sm tracking-wide gap-x-7 cursor-pointer`}>
      <li className="hover:text-slate-400 hover:font-bold">Home</li>
      <li className="hover:text-slate-400 hover:font-bold">About</li>
      <li className="hover:text-slate-400 hover:font-bold">Blogs</li>
    </ul>
  );
};

export default NavigationList;
