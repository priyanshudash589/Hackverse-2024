import React from "react";

const Venue = () => {
  return (
    <div
      className="h-fix flex items-center flex-col justify-center"
      style={{
        backgroundImage: `url('./images/hero-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="sm:w-[50rem] w-[22rem] bg-black border border-[#D8B4FF] rounded-3xl pt-[3rem] p-[4rem] relative flex flex-col justify-center">
          <p className="sm:text-5xl text-3xl text-left font-bold bg-gradient bg-clip-text text-transparent mb-8">
            VENUE
          </p>
          <p className="text-white sm:m-2 m-1 sm:text-2xl text-xl text-left">
            Yet to be disclosed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venue;
