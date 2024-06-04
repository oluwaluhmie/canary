import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogHeader from "./Blog/BlogHeader";
import BlogContent from "./Blog/BlogContent";

const Blog = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <BlogHeader />
      <BlogContent />
      <Footer />
    </div>
  );
};

export default Blog;