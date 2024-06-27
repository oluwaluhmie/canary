import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center bg-white px-12 border-b border-borderStroke h-28">
        <p className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
          Home
        </p>
      </div>
      {/* Content */}
      <div className="flex flex-col px-12 py-8">
        <div className="flex flex-col gap-6">
          {/* First row */}
          <div className="flex flex-row gap-6">
            <div className="flex flex-col justify-between px-7 py-8 border border-adminBorder h-61 w-135 shadow-investment">
              <p className="text-menuTextColor text-xl">Corporate Accounts</p>
              <div className="flex flex-col gap-1">
                <span className="font-gotham text-5xl text-menuHover">0</span>
                <div className="flex gap-1 border border-countBorder rounded-full w-18 justify-center shadow-admin">
                  <p className="text-mobileMenuColor">0</p>
                  <p className="text-mobileMenuColor">New</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between px-7 py-8 border border-adminBorder h-61 w-135 shadow-investment">
              <p className="text-menuTextColor text-xl">Individual Accounts</p>
              <div className="flex flex-col gap-1">
                <span className="font-gotham text-5xl text-menuHover">0</span>
                <div className="flex gap-1 border border-countBorder rounded-full w-18 justify-center shadow-admin">
                  <p className="text-mobileMenuColor">0</p>
                  <p className="text-mobileMenuColor">New</p>
                </div>
              </div>
            </div>
          </div>
          {/* Second row */}
          <div className="flex flex-row gap-6">
            <div className="flex flex-col justify-between px-7 py-8 border border-adminBorder h-61 w-135 shadow-investment">
              <p className="text-menuTextColor text-xl">Email Subscribers</p>
              <div className="flex flex-col gap-1">
                <span className="font-gotham text-5xl text-menuHover">0</span>
                <div className="flex gap-1 border border-countBorder rounded-full w-18 justify-center shadow-admin">
                  <p className="text-mobileMenuColor">0</p>
                  <p className="text-mobileMenuColor">New</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between px-7 py-8 border border-adminBorder h-61 w-135 shadow-investment">
              <p className="text-menuTextColor text-xl">Messages</p>
              <div className="flex flex-col gap-1">
                <span className="font-gotham text-5xl text-menuHover">0</span>
                <div className="flex gap-1 border border-countBorder rounded-full w-18 justify-center shadow-admin">
                  <p className="text-mobileMenuColor">0</p>
                  <p className="text-mobileMenuColor">New</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
