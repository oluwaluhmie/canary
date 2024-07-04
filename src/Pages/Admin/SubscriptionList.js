import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const SubscriptionList = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set the number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.canaryfinance.canarypointfcl.com/v1/api/list_subscriber",
          {
            headers: {
              "x-api-key": "22062024",
            },
          }
        );
        if (Array.isArray(response.data.result)) {
          setSubscriptions(response.data.result);
        } else {
          console.error("API returned non-array data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    const doc = new jsPDF();
    const columns = ["S/N", "Email Address"]; // Change "ID" to "S/N" for sequential numbering
    const rows = subscriptions.map((subscription, index) => [
      index + 1, // Start numbering from 1
      subscription.email_address,
    ]);
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text("Email Subscription List", 14, 15);
    doc.autoTable({
      head: [columns],
      body: rows,
      startY: 20,
    });
    doc.save("subscription_list.pdf");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSubscriptions = subscriptions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(subscriptions.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center bg-white px-12 border-b border-borderStroke h-28 shadow-investment">
        <p className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
          Subscriptions
        </p>
      </div>
      <div className="flex flex-col px-12 py-8">
        <div className="flex flex-col gap-6">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center text-sm rounded-full border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-33.5 h-10 hover:from-orangeButton-start hover:to-orangeButton-end"
          >
            Download List
          </button>
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
                  {currentSubscriptions.map((subscription, index) => (
                    <tr
                      key={subscription.id}
                      className="flex flex-row w-full bg-white h-16 items-center text-sm text-mobileMenuColor"
                    >
                      <td className="flex justify-center items-center w-18">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td className="flex justify-start items-center px-6">
                        {subscription.email_address}
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
              <p className="text-menuHover text-lg">{currentPage}</p>
              <p className="text-textColor text-lg">/</p>
              <p className="text-textColor text-lg">{totalPages}</p>
            </div>
            <div className="flex gap-5">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="flex justify-center items-center text-base rounded-full border border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white cursor-pointer w-38 h-11 hover:from-orangeButton-start hover:to-orangeButton-end disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="flex justify-center items-center text-base rounded-full border border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white cursor-pointer w-38 h-11 hover:from-orangeButton-start hover:to-orangeButton-end disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionList;
