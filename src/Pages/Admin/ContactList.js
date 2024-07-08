import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchContacts = async (page) => {
    try {
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://api.canaryfinance.canarypointfcl.com/v1/api/list_messages?page=${page}`,
        headers: {
          "x-api-key": "22062024",
        },
      };

      const response = await axios.request(config);
      const { result, total = 1, per_page = result.length } = response.data;
      setContacts(result || []);
      setTotalPages(Math.ceil(total / per_page));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchContacts(currentPage);
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center bg-white px-12 border-b border-borderStroke h-28 shadow-investment">
        <p className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
          Contact us Form
        </p>
      </div>
      <div className="flex flex-col justify-center px-12 py-8">
        <div className="flex flex-col gap-12">
          <div className="flex">
            <div className="flex flex-row w-full">
              <table className="border border-borderStroke w-full shadow-investment">
                <thead className="flex flex-row items-start bg-tableHeader h-12">
                  <tr className="flex justify-between items-center font-gotham w-full text-sm h-full text-menuTextColor">
                    <th className="flex justify-center items-center w-16">
                      S/N
                    </th>
                    <th className="flex justify-start w-31 px-6">First name</th>
                    <th className="flex justify-start w-31 px-6">Last name</th>
                    <th className="flex justify-start w-37.5 px-6">
                      Phone number
                    </th>
                    <th className="flex justify-start w-48 px-6">
                      Email address
                    </th>
                    <th className="flex justify-start w-67 px-6">Message</th>
                    <th className="flex justify-start w-29 px-6">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, index) => (
                    <tr
                      key={contact.id}
                      className="flex flex-row justify-between bg-white h-16 w-full items-center text-sm text-mobileMenuColor"
                    >
                      <td className="flex justify-center items-center w-16">
                        {index + 1}
                      </td>
                      <td className="flex justify-start w-31 px-6">
                        {contact.firstname}
                      </td>
                      <td className="flex justify-start w-31 px-6">
                        {contact.lastname}
                      </td>
                      <td className="flex justify-start w-37.5 px-6">
                        {contact.phone_number}
                      </td>
                      <td className="flex justify-start w-48 px-6">
                      <p className="overflow-hidden">{contact.email_address}</p>
                      </td>
                      <td className="flex justify-start w-67 px-6">
                        <p className="h-5 overflow-hidden">{contact.message}</p>
                      </td>
                      <td className="flex justify-start text-menuHover w-29 px-6">
                        <Link
                          to={`/adminaccess/contactus/${contact.id}`}
                          state={{ contactId: contact.id }}
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
          <div className="flex flex-row justify-between">
            <div className="flex gap-1">
              <p className="text-menuHover text-lg">{currentPage}</p>
              <p className="text-textColor text-lg">/</p>
              <p className="text-textColor text-lg">{totalPages}</p>
            </div>
            <div className="flex gap-5">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="flex justify-center items-center text-base rounded-full border border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-38 h-11 hover:from-orangeButton-start hover:to-orangeButton-end disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="flex justify-center items-center text-base rounded-full border border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-38 h-11 hover:from-orangeButton-start hover:to-orangeButton-end disabled:opacity-50"
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

export default ContactList;
