"use client";

import React, { ReactNode } from "react";
import Header from "@/app/features/Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"w-screen flex flex-col min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white"}>
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;
