import React from "react";
import { Link } from "react-router-dom";

const CorporateList = () => {
  const corporates = [
    {
      id: 1,
      caccountType: "Fixed Deposit",
      institutionType: "Sole Proprietorship",
      organizationName: "Olumide Enterprises",
      rcNo: "111111111",
      taxNo: "111111111",
      businessAddress: "Eleyele, Ibadan",
      email: "oeolumide@gmail.com",
      webAddress: "olumide.com",
      title: "Mr.",
      lastName: "Olajide",
      firstName: "Ebenezer",
      middleName: "Olumide",
      passportPhoto: null,
      dob: "11/02/1998",
      pob: "Ibadan",
      pemail: "oeolumide@gmail.com",
      phoneNumber: "08131223306",
      homeAddress: "Olopomewa, Ibadan",
      lga: "Ibadan North West",
      landmark: "Eleyele",
      bvn: "22288444777",
      meansofID: "NIN",
      idNumber: "61354861223",
      issueDate: "11/02/2024",
      expiryDate: "11/02/2029",
      stitle: "Mr.",
      slastName: "Doe",
      sfirstName: "John",
      smiddleName: "Oluwaseun",
      spassportPhoto: null,
      sdob: "17/10/1998",
      spob: "Ibadan",
      semail: "johndoe@example.com",
      sphoneNumber: "07084806812",
      shomeAddress: "Olopomewa, Ibadan",
      slga: "Ibadan North West",
      slandmark: "Eleyele",
      sbvn: "22288444777",
      smeansofID: "NIN",
      sidNumber: "61354861223",
      sissueDate: "17/10/2024",
      sexpiryDate: "17/10/2029",
      signature: null,
      secondSignature: null,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center bg-white px-12 border-b border-borderStroke h-28 shadow-investment">
        <p className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
          Corporate Account Opening Form
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
                    <th className="flex justify-start w-52 px-6">
                      Name of Organization
                    </th>
                    <th className="flex justify-start w-30 px-6">RC. No.</th>
                    <th className="flex justify-start w-30 px-6">Tax ID No.</th>
                    <th className="flex justify-start w-58 px-6">
                      Email Address
                    </th>
                    <th className="flex justify-start w-29 px-6">Action</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {corporates.map((corporate, index) => (
                    <tr
                      key={corporate.id}
                      className="flex flex-row justify-between bg-white h-16 w-full items-center text-sm text-mobileMenuColor"
                    >
                      <td className="flex justify-center items-center w-16">
                        {index + 1}
                      </td>
                      <td className="flex justify-start w-44 px-6">
                        {corporate.caccountType}
                      </td>
                      <td className="flex justify-start w-52 px-6">
                        {corporate.organizationName}
                      </td>
                      <td className="flex justify-start w-30 px-6">
                        {corporate.rcNo}
                      </td>
                      <td className="flex justify-start w-30 px-6">
                        {corporate.taxNo}
                      </td>
                      <td className="flex justify-start w-58 px-6">
                        {corporate.email}
                      </td>
                      <td className="flex justify-start text-menuHover w-29 px-6">
                        <Link
                          to={`/adminaccess/corporate/${corporate.id}`}
                          state={{ corporate }}
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

export default CorporateList;
