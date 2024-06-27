import React from "react";
import { Link } from "react-router-dom";

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      firstName: "Ebenezer",
      lastName: "Olajide",
      phoneNumber: "08030000000",
      email: "oeolumide@gmail.com",
      message: "I am interested and I want to discuss over a call",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "08030000001",
      email: "johndoe@example.com",
      message: "This is another message",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center bg-white px-12 border-b border-borderStroke h-28 shadow-investment">
        <p className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
          Contact us Form
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
                {/* Table Body */}
                <tbody>
                  {contacts.map((contact, index) => (
                    <tr
                      key={contact.id}
                      className="flex flex-row justify-between bg-white h-16 w-full items-center text-sm text-mobileMenuColor"
                    >
                      <td className="flex justify-center items-center w-16">
                        {index + 1}
                      </td>
                      <td className="flex justify-start w-31  px-6">
                        {contact.firstName}
                      </td>
                      <td className="flex justify-start w-31 px-6">
                        {contact.lastName}
                      </td>
                      <td className="flex justify-start w-37.5 px-6">
                        {contact.phoneNumber}
                      </td>
                      <td className="flex justify-start w-48 px-6">
                        {contact.email}
                      </td>
                      <td className="flex justify-start w-67 px-6">
                        <p className="h-5 overflow-hidden">{contact.message}</p>
                      </td>
                      <td className="flex justify-start text-menuHover w-29 px-6">
                        <Link
                          to={`/adminaccess/contactus/${contact.id}`}
                          state={{ contact }}
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

export default ContactList;
