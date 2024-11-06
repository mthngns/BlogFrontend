import React from "react";

const NavigationList = () => {
  return (
    <ul className={`md:flex hidden w-fit text-sm tracking-wide gap-x-3 cursor-pointer`}>
      <li>Home</li>
      <li>About</li>
      <li>Blogs</li>
    </ul>
  );
};

export default NavigationList;
