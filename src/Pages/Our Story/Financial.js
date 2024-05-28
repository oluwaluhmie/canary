import React from "react";
import financialicon from "../../assets/financialicon.svg";
import financialoneweb from "../../assets/financialoneweb.png";
import financialtwoweb from "../../assets/financialtwoweb.png";
import financialthreeweb from "../../assets/financialthreeweb.png";

const Financial = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex flex-col w-107.5 md:w-200 lg:w-341.5">
        <div className="flex flex-col md:gap-16 lg:gap-24 pt-12 lg:pt-24 pb-17 lg:pb-0">
          <div className="flex flex-col gap-2 md:gap-3 lg:gap-5 px-5 md:px-12">
            <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
              Empowering Financial Futures
            </span>
            <div className="lg:flex lg:gap-24 lg:w-300">
              <p className="text-mobileMenuColor text-lg lg:text-xl lg:w-200">
                Canary Point Finance Limited is a Central Bank of Nigeria (CBN)
                licensed Finance House offering financial solutions that assist
                clients in achieving their objectives. Our Finance House is led
                by experienced professionals with decades of industry experience
                in local and international financial transactions. <br />
                <br />
                As a Finance Company, we complement banks in bridging financing
                and investing gaps. <br />
                <br />
                At Canary Point Finance, we leverage our deep understanding of
                the Nigerian financial markets, macro-economic trends and
                customer expectations to proffer bespoke workable solutions to
                clients' funding requirements, provide structured investable
                products, and deliver best-in-class financial intermediation
                services.
              </p>
              <div className="hidden lg:block lg:w-76 lg:h-77.5 lg:overflow-visible">
                <img src={financialicon} alt="financialicon" className="h-160 w-138.9375 overflow-visible" />
              </div>
            </div>
          </div>
          <div className="hidden md:grid md:grid-cols-3 md:px-4 md:py-4 md:gap-x-4 lg:px-6 lg:py-6 lg:gap-x-6">
            <div><img src={financialoneweb} alt="financialone" /></div>
            <div><img src={financialtwoweb} alt="financialtwo" /></div>
            <div><img src={financialthreeweb} alt="financialthree" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
