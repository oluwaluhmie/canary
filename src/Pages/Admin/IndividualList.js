import React from "react";
import { Link } from "react-router-dom";

const IndividualList = () => {
  const individuals = [
    {
      id: 1,
      accountType: "Single Account",
      title: "Mr.",
      lastName: "Olajide",
      firstName: "Ebenezer",
      middleName: "Olumide",
      passportPhoto: null,
      dob: "11/02/1998",
      pob: "Ibadan",
      gender: "Male",
      email: "oeolumide@gmail.com",
      phoneNumber: "08030000000",
      homeAddress: "6, Alhaji Lasisi Ogo-oluwa street, Olopomewa, Eleyele, Ibadan",
      lga: "Ibadan North West",
      landmark: "Eleyele",
      bvn: "22289444777",
      maritalStatus: "Single",
      soo: "Osun State",
      lgaoo: "Ilesa West",
      occupation: "Frontend Developer",
      moi: "NIN",
      idNumber: "1234567890",
      issueDate: "11/02/1924",
      expiryDate: "11/02/2029",
      ntitle: "Mr.",
      nsurname: "Doe",
      nfirstName: "John",
      nmiddleName: "Oluwaseun",
      nphoneNumber: "07084806812",
      relationship: "Senior man",
      nemail: "oluwaseunfj@gmail.com",
      noccupation: "Product Designer",
      signature: null,
      secondSignature: null,
    },
  ];

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
                  {individuals.map((individual, index) => (
                    <tr
                      key={individual.id}
                      className="flex flex-row justify-between bg-white h-16 w-full items-center text-sm text-mobileMenuColor"
                    >
                      <td className="flex justify-center items-center w-16">
                        {index + 1}
                      </td>
                      <td className="flex justify-start w-44 px-6">
                        {individual.accountType}
                      </td>
                      <td className="flex justify-start w-34 px-6">
                        {individual.lastName}
                      </td>
                      <td className="flex justify-start w-34 px-6">
                        {individual.firstName}
                      </td>
                      <td className="flex justify-start w-40 px-6">
                        {individual.phoneNumber}
                      </td>
                      <td className="flex justify-start w-62 px-6">
                        {individual.email}
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

export default IndividualList;
