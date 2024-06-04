import React, { useState, useEffect, useRef } from "react";
import timelinemobileone from "../../assets/timelinemobileone.png";
import timelinemobiletwo from "../../assets/timelinemobiletwo.png";
import timelinemobilethree from "../../assets/timelinemobilethree.png";
import one from "../../assets/one.svg";
import two from "../../assets/two.svg";
import three from "../../assets/three.svg";

const Timelines = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([false, false, false]);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.indexOf(entry.target);
            setVisibleIndexes((prevState) => {
              const newState = [...prevState];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.5 } // Adjust this value as needed
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const timelines = [
    {
      year: "2016",
      img: timelinemobileone,
      icon: one,
      title: "Canary Finance begins operation",
      description:
        "To provide our clients with exceptional financial services that meet their unique needs, while maintaining the highest standards of professionalism and integrity.",
    },
    {
      year: "2018",
      img: timelinemobiletwo,
      icon: two,
      title: "Canary Finance gets $1 million funding",
      description:
        "To provide our clients with exceptional financial services that meet their unique needs, while maintaining the highest standards of professionalism and integrity.",
    },
    {
      year: "2020",
      img: timelinemobilethree,
      icon: three,
      title: "Canary Finance makes $2 million in revenue",
      description:
        "To provide our clients with exceptional financial services that meet their unique needs, while maintaining the highest standards of professionalism and integrity.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-timelinebg bg-cover">
      <div className="flex flex-col w-107.5 md:w-200 lg:w-341.5 overflow-hidden">
        <div className="px-5 md:px-12 w-97.5 md:w-176 lg:w-300">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-12 py-12 md:py-16 lg:py-24">
            <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-timelineText-start to-timelineText-end">
              Timelines
            </span>
            <div className="grid grid-cols-1 gap-12 md:gap-6 md:w-176 lg:w-300">
              {timelines.map((timeline, index) => (
                <div
                  key={index}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  className={`flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10 transition-opacity duration-300 ${
                    visibleIndexes[index] ? "md:opacity-100" : "md:opacity-20"
                  }`}
                >
                  <div className="hidden md:block pt-6 pl-2">
                    <img src={timeline.icon} alt={`icon-${index}`} />
                  </div>
                  <div className="flex items-end relative">
                    <p className="text-5xl font-bold text-white/20 absolute p-2">
                      {timeline.year}
                    </p>
                    <img
                      src={timeline.img}
                      alt={`timeline-${index}`}
                      className="md:w-75 md:h-48 lg:w-90"
                    />
                  </div>
                  <div className="flex flex-col gap-1 md:w-80 lg:w-128 md:py-3 lg:py-3">
                    <span className="font-gotham text-lg md:text-xl lg:text-2xl text-menuHover">
                      {timeline.title}
                    </span>
                    <p className="text-sm md:text-base lg:text-base text-mobileMenuColor">
                      {timeline.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timelines;
