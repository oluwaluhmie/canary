import React from "react";
import { Link } from "react-router-dom";

const SubscriptionList = () => {
  const subscriptions = [
    {
      id: 1,
      email: "oeolumide@gmail.com",
    },
    {
      id: 2,
      email: "johndoe@example.com",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center bg-white px-12 border-b border-borderStroke h-28 shadow-investment">
        <p className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
          Subscriptions
        </p>
      </div>
      {/* Content */}
      <div className="flex flex-col px-12 py-8">
        <div className="flex flex-col gap-6">
          {/* Download button */}
          <Link>
            <button className="flex items-center justify-center text-sm rounded-full border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-33.5 h-10 hover:from-orangeButton-start hover:to-orangeButton-end">
              Download List
            </button>
          </Link>
          {/* Table */}
          <div className="flex">
            <div className="flex flex-row w-full">
              <table className="border border-borderStroke w-full shadow-investment">
                <thead className="flex flex-row bg-tableHeader h-12 items-start">
                  <tr className="flex items-center w-full font-gotham text-sm h-full">
                    <td className="flex justify-center items-center w-18">
                      S/N
                    </td>
                    <td className="flex justify-start px-6">Email Address</td>
                  </tr>
                </thead>
                <tbody>
                  {subscriptions.map((subscription, index) => (
                    <tr
                      key={subscription.id}
                      className="flex flex-row w-full bg-white h-16 items-center text-sm text-mobileMenuColor"
                    >
                      <td className="flex justify-center items-center w-18">
                        {subscription.id}
                      </td>
                      <td className="flex justify-start items-center px-6">
                        {subscription.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-row justify-between w-full">
            <div className="flex gap-1">
              <p className="text-menuHover text-lg">1</p>
              <p className="text-textColor text-lg">/</p>
              <p className="text-textColor text-lg">2</p>
              <p className="text-textColor text-lg">/</p>
              <p className="text-textColor text-lg">....</p>
              <p className="text-textColor text-lg">/</p>
              <p className="text-textColor text-lg">25</p>{" "}
            </div>
            <div className="flex gap-5">
              <Link to="">
                <button className="flex justify-center items-center text-base rounded-full border border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-38 h-11 hover:from-orangeButton-start hover:to-orangeButton-end">
                  Previous
                </button>
              </Link>
              <Link to="">
                <button className="flex justify-center items-center text-base rounded-full border border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-38 h-11 hover:from-orangeButton-start hover:to-orangeButton-end">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionList;
