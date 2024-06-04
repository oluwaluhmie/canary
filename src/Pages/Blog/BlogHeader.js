import React from "react";

const BlogHeader = () => {
  return (
    <div className="flex flex-col items-center bg-blog-sm md:bg-blog-md lg:bg-blog-lg bg-cover">
      <div className="flex flex-col w-107.5 md:w-200 lg:w-341.5 h-40 md:h-60 lg:h-90">
        <div className="flex flex-col px-5 md:px-12 lg:px-12 py-5 md:py-12 lg:py-12 w-97.5 md:w-176 lg:w-300">
          <div className="flex items-end md:py-3 lg:py-8 h-30 md:h-36 lg:h-66">
            <span className="font-gotham text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-footerGradient-start to-footerGradient-end leading-tight lg:leading-snug">
              Blog
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
