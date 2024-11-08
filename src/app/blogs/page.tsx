import React from "react";
import Landing from "../components/Landing/Landing";
import BlogList from "../features/BlogList/BlogList";
import AuthorsList from "../features/Authors/AuthorsList";

const Blogs = () => {
  return (
    <div className="min-h-full flex px-2 sm:px-10 md:px-20 flex-col items-stretch text-slate-700 dark:text-slate-400">
      <Landing />
      <AuthorsList/>
      <BlogList/>
    </div>
  );
};

export default Blogs;
