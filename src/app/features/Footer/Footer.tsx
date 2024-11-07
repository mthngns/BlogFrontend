import Logo from "@/app/features/Header/components/Logo";
import React from "react";
import SubscribeForm from "./components/SubscribeForm";

const Footer = () => {
  return (
    <div className="flex p-10 bg-slate-950 text-white justify-between">
      <div className="flex flex-col gap-y-5">
        <Logo />
        <h4 className=" text-xl font-bold">Subscribe to Our New Content</h4>
        <SubscribeForm/>
      </div>
        <ul className="flex flex-col gap-y-5 mr-10 font-bold tracking-wider">
            <li className=" cursor-pointer hover:text-slate-400">Home</li>
            <li className=" cursor-pointer hover:text-slate-400">About</li>
            <li className=" cursor-pointer hover:text-slate-400">Blogs</li>
        </ul>
    </div>
  );
};

export default Footer;
