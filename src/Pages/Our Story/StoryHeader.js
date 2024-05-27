import React from "react";

const StoryHeader = () => {
  return (
    <div className="flex flex-col bg-story-sm md:bg-story-md lg:bg-story-lg bg-cover w-full">
      <div className="flex flex-col w-107.5 md:w-200 lg:w-480">
        <div className="flex flex-col px-5 md:px-12 lg:px-32 py-5 md:py-12 lg:py-12 h-full">
          <div className="flex h-40 md:h-60 lg:h-90">
            <div className="flex items-end md:py-3 lg:py-8 w-97.5">
              <span className="font-gotham text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-footerGradient-start to-footerGradient-end">
                Our Story
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryHeader;
