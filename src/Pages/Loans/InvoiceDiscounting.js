import React from "react";
import invoicediscountingmob from "../../assets/invoicediscountingmob.png";
import invoicediscountingtab from "../../assets/invoicediscountingtab.png";
import invoicediscountingweb from "../../assets/invoicediscountingweb.png";
import { Link } from "react-router-dom";
import check from "../../assets/check.svg";
import arrowright from "../../assets/arrowright.svg";

const InvoiceDiscounting = () => {
  return (
    <div className="flex flex-col items-center w-97.5 md:w-176 lg:w-300">
      <div className="py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <img
              src={invoicediscountingmob}
              alt="invoicediscountingmob"
              className="block md:hidden lg:hidden object-cover"
            />
            <img
              src={invoicediscountingtab}
              alt="invoicediscountingtab"
              className="hidden md:block lg:hidden object-cover"
            />
            <img
              src={invoicediscountingweb}
              alt="invoicediscountingweb"
              className="hidden md:hidden lg:block object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                Invoice Discounting
              </span>
              <p className="text-mobileMenuColor text-base">
                Our Invoice Discounting Facility (IDF) is aimed at supporting
                contractors and suppliers working with reputable companies in
                Nigeria. Our service allows customers to access up to 70% of the
                invoice value, providing crucial working capital to meet
                immediate financial needs while awaiting payment for goods
                supplied or services rendered.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-menuHover text-lg">Benefits</p>
              <div className="flex flex-col gap-1">
                <div className="flex gap-3">
                  <img src={check} alt="check" />
                  <p className="text-mobileMenuColor text-base">
                    Access funds against accepted invoices
                  </p>
                </div>
                <div className="flex gap-3">
                  <img src={check} alt="check" />
                  <p className="text-mobileMenuColor text-base">
                    Improve working capital management
                  </p>
                </div>
              </div>
            </div>
            <Link>
              <button className="flex items-center justify-center gap-2 text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-70.25 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                Apply Now
                <img src={arrowright} alt="arrowright" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDiscounting;
