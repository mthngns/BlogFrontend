import React from "react";
import Landing from "../components/Landing/Landing";
import BlogList from "../features/BlogList/BlogList";

const Blogs = () => {
  return (
    <div className="min-h-full flex px-20 flex-col items-stretch text-blue-200">
      <Landing />
      <BlogList/>
    </div>
  );
};

export default Blogs;
