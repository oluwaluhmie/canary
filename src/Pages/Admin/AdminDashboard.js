import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [data, setData] = useState({
    corporateAccounts: 0,
    individualAccounts: 0,
    emailSubscribers: 0,
    messages: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://api.canaryfinance.canarypointfcl.com/v1/api/admin_summary",
        headers: {
          "x-api-key": "22062024",
        },
      };

      try {
        const response = await axios.request(config);
        console.log("Response data:", response.data); // Log response data

        // Adjust this according to your actual API response structure
        const responseData = response.data.result; // Access 'result' object
        setData({
          corporateAccounts: responseData.noOfCorporateAccounts || 0,
          individualAccounts: responseData.noOfIndividualAccounts || 0,
          emailSubscribers: responseData.noOfEmailSubscribers || 0,
          messages: responseData.noOfMessages || 0,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
                <span className="font-gotham text-5xl text-menuHover">
                  {data.corporateAccounts}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between px-7 py-8 border border-adminBorder h-61 w-135 shadow-investment">
              <p className="text-menuTextColor text-xl">Individual Accounts</p>
              <div className="flex flex-col gap-1">
                <span className="font-gotham text-5xl text-menuHover">
                  {data.individualAccounts}
                </span>
              </div>
            </div>
          </div>
          {/* Second row */}
          <div className="flex flex-row gap-6">
            <div className="flex flex-col justify-between px-7 py-8 border border-adminBorder h-61 w-135 shadow-investment">
              <p className="text-menuTextColor text-xl">Email Subscribers</p>
              <div className="flex flex-col gap-1">
                <span className="font-gotham text-5xl text-menuHover">
                  {data.emailSubscribers}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between px-7 py-8 border border-adminBorder h-61 w-135 shadow-investment">
              <p className="text-menuTextColor text-xl">Messages</p>
              <div className="flex flex-col gap-1">
                <span className="font-gotham text-5xl text-menuHover">
                  {data.messages}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
