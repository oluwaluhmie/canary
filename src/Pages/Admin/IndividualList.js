import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const IndividualList = () => {
  const [individuals, setIndividuals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchIndividuals = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "https://api.canaryfinance.canarypointfcl.com/v1/api/list_individual_account",
          headers: {
            "x-api-key": "22062024",
          },
        };

        const response = await axios.request(config);

        if (response.data && response.data.result) {
          setIndividuals(response.data.result);
          setTotalPages(Math.ceil(response.data.result.length / 10)); // Assuming 10 items per page
        } else {
          console.error("API response does not contain result property");
        }
      } catch (error) {
        console.error("Error fetching individuals:", error);
      }
    };

    fetchIndividuals();
  }, [currentPage]);

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center bg-white px-12 border-b border-borderStroke h-28 shadow-investment">
        <p className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
          Individual Account Opening Form
        </p>
      </div>
      {/* Content */}
      <div className="flex flex-col justify-center px-12 py-8">
        <div className="flex flex-col gap-12">
          {/* Table */}
          <div className="flex">
            <div className="flex flex-row w-full">
              <table className="border border-borderStroke w-full shadow-investment">
                {/* Table Head */}
                <thead className="flex flex-row items-start bg-tableHeader h-12">
                  <tr className="flex justify-between items-center font-gotham text-sm h-full w-full text-menuTextColor">
                    <th className="flex justify-center items-center w-16">
                      S/N
                    </th>
                    <th className="flex justify-start w-44 px-6">
                      Type of Account
                    </th>
                    <th className="flex justify-start w-34 px-6">Last name</th>
                    <th className="flex justify-start w-34 px-6">First name</th>
                    <th className="flex justify-start w-40 px-6">
                      Phone Number
                    </th>
                    <th className="flex justify-start w-62 px-6">
                      Email Address
                    </th>
                    <th className="flex justify-start w-29 px-6">Action</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {individuals
                    .slice((currentPage - 1) * 10, currentPage * 10)
                    .map((individual, index) => (
                      <tr
                        key={individual.id}
                        className="flex flex-row justify-between bg-white h-16 w-full items-center text-sm text-mobileMenuColor"
                      >
                        <td className="flex justify-center items-center w-16">
                          {index + 1}
                        </td>
                        <td className="flex justify-start w-44 px-6">
                          {individual.account_type}
                        </td>
                        <td className="flex justify-start w-34 px-6">
                          {individual.surname}
                        </td>
                        <td className="flex justify-start w-34 px-6">
                          {individual.firstname}
                        </td>
                        <td className="flex justify-start w-40 px-6">
                          {individual.phone_number}
                        </td>
                        <td className="flex justify-start w-62 px-6">
                          {individual.email_address}
                        </td>
                        <td className="flex justify-start text-menuHover w-29 px-6">
                          <Link
                            to={`/adminaccess/individual/${individual.id}`}
                            state={{ individual }}
                          >
                            view more
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-row justify-between">
            <div className="flex gap-1">
              <p className="text-menuHover text-lg">{currentPage}</p>
              <p className="text-textColor text-lg">/</p>
              <p className="text-textColor text-lg">{totalPages}</p>
            </div>
            <div className="flex gap-5">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="flex justify-center items-center text-base rounded-full border border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-38 h-11 hover:from-orangeButton-start hover:to-orangeButton-end"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="flex justify-center items-center text-base rounded-full border border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-38 h-11 hover:from-orangeButton-start hover:to-orangeButton-end"
                disabled={currentPage === totalPages}
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

export default IndividualList;
