import React from "react";
import { Link } from "react-router-dom";
import arrowright from "../../assets/arrowright.svg";
import investmob from "../../assets/investmob.png";
import investtab from "../../assets/investtab.png";
import investweb from "../../assets/investweb.png";
import inmob from "../../assets/inmob.png";
import intab from "../../assets/intab.png";
import inweb from "../../assets/inweb.png";
import intwomob from "../../assets/intwomob.png";
import intwotab from "../../assets/intwotab.png";
import intwoweb from "../../assets/intwoweb.png";
import inthreeweb from "../../assets/inthreeweb.png";
import check from "../../assets/check.svg";
import minus from "../../assets/minus.svg";
import arrowrighttwo from "../../assets/arrowrighttwo.svg";

const InvestmentsContent = () => {
  return (
    <div className="flex flex-col items-center bg-servicesbgwhite bg-cover">
      <div className="flex flex-col w-full md:w-200 lg:w-341.5">
        <div className="flex flex-col items-center">
          <div className="flex flex-col px-5 pt-12 pb-16 bg-investmentsone bg-cover">
            <div className="flex flex-col gap-12 w-97.5 md:w-176 lg:w-300">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="font-gotham text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                    Invest in Your Future
                  </span>
                  <p className="text-mobileMenuColor text-lg">
                    We believe that every journey towards financial freedom
                    begins with a single step—a decision to invest in your
                    future. That's why we offer a range of investment solutions
                    designed to help you achieve your financial goals. Start
                    building wealth and securing your future with confidence
                    today.
                  </p>
                </div>
                <Link
                  to=""
                  className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                >
                  <p className="text-lg text-menuHover">Start Investing now</p>
                  <img src={arrowright} alt="arrowright" />
                </Link>
              </div>
              <div>
                <img
                  src={investmob}
                  alt="investmob"
                  className="block md:hidden lg:hidden object-cover"
                />
                <img
                  src={investtab}
                  alt="investtab"
                  className="hidden md:block lg:hidden object-cover"
                />
                <img
                  src={investweb}
                  alt="investweb"
                  className="hidden md:hidden lg:block object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full bg-investmentstwo bg-cover">
            <div className="flex flex-col px-5 py-12">
              <div className="flex flex-col gap-8 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                      Target Investment Plan
                    </span>
                    <p className="text-mobileMenuColor text-base">
                      The Target Investment Plan is a goal-oriented investment
                      product designed to help investors build savings towards
                      specific financial objectives. Whether it's purchasing a
                      home, funding education, or planning for retirement, this
                      investment plan provides a structured approach to
                      achieving your goals.
                    </p>
                  </div>
                  <div className="flex flex-col border border-textHeaderColor shadow-investment">
                    <div className="flex flex-col gap-2 px-5 py-5 bg-white">
                      <p className="text-menuHover text-lg">Benefits</p>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Tailored savings approach for specific financial goals
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Flexibility in contribution intervals and amounts
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Access to accumulated savings at the target end date
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Potential for growth through accrued interest
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-5 py-5 bg-white border-t border-textHeaderColor">
                      <p className="text-menuHover text-lg">Terms</p>
                      <div className="flex gap-1">
                        <img src={minus} alt="minus" />
                        <p className="text-mobileMenuColor text-sm">
                          Tailored savings approach for specific financial goals
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={minus} alt="minus" />
                        <p className="text-mobileMenuColor text-sm">
                          Flexibility in contribution intervals and amounts
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={minus} alt="minus" />
                        <p className="text-mobileMenuColor text-sm">
                          Access to accumulated savings at the target end date
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={minus} alt="minus" />
                        <p className="text-mobileMenuColor text-sm">
                          Potential for growth through accrued interest
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center text-lg md:text-base border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-97.5 md:w-60 lg:w-66 gap-2 md:gap-1.5 lg:gap-2 px-9 md:px-8 lg:px-9 py-3 h-12 md:h-11 lg:h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                  <p>Invest Now</p>
                  <img src={arrowrighttwo} alt="arrowrighttwo" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full bg-investmentsthree bg-cover">
            <div className="flex flex-col px-5 py-12">
              <div className="flex flex-col gap-8 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                      Fixed Investment Plan
                    </span>
                    <p className="text-mobileMenuColor text-base">
                      The Fixed Investment product offers investors the
                      opportunity to earn stable returns on their capital over a
                      fixed period. By committing a sum for a specific duration,
                      investors can enjoy the certainty of a fixed interest rate
                      and receive a lump sum payout upon maturity.
                    </p>
                  </div>
                  <div className="flex flex-col border border-textHeaderColor shadow-investment">
                    <div className="flex flex-col gap-2 px-5 py-5 bg-white">
                      <p className="text-menuHover text-lg">Benefits</p>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Certainty of fixed returns over the investment period
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Potential for higher returns compared to traditional
                          savings accounts
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Flexibility to top up investment amounts as needed
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Option to reinvest accumulated sum upon maturity for
                          continued growth
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-5 py-5 bg-white border-t border-textHeaderColor">
                      <p className="text-menuHover text-lg">Terms</p>
                      <div className="flex gap-1">
                        <img src={minus} alt="minus" />
                        <p className="text-mobileMenuColor text-sm">
                          Minimum investment amount: N1,000,000
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={minus} alt="minus" />
                        <p className="text-mobileMenuColor text-sm">
                          Tenure options: 3 months to 1 year, renewable
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={minus} alt="minus" />
                        <p className="text-mobileMenuColor text-sm">
                          Fixed interest rate throughout the investment period
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center text-lg md:text-base border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-97.5 md:w-60 lg:w-66 gap-2 md:gap-1.5 lg:gap-2 px-9 md:px-8 lg:px-9 py-3 h-12 md:h-11 lg:h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                  <p>Invest Now</p>
                  <img src={arrowrighttwo} alt="arrowrighttwo" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full bg-investmentsfour bg-cover">
            <div className="flex flex-col px-5 py-12">
              <div className="flex flex-col gap-8 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                      Canary Vault
                    </span>
                    <p className="text-mobileMenuColor text-base">
                      Canary Vault is an investment product designed to instil
                      financial discipline and encourage long-term saving
                      habits. Funds invested in the Canary Vault are locked away
                      until a predetermined maturity date, helping investors
                      resist the temptation of premature withdrawals and stay
                      focused on their financial goals.
                    </p>
                  </div>
                  <div className="flex flex-col border border-textHeaderColor shadow-investment">
                    <div className="flex flex-col gap-2 px-5 py-5 bg-white">
                      <p className="text-menuHover text-lg">Benefits</p>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Encourages disciplined saving habits
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Protects funds from impulsive spending
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Potential for higher returns through longer lock-in
                          periods
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={check} alt="check" />
                        <p className="text-mobileMenuColor text-sm">
                          Option to reinvest funds upon maturity for continued
                          growth
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-5 py-5 bg-white border-t border-textHeaderColor">
                      <p className="text-menuHover text-lg">Terms</p>
                      <div className="flex gap-1">
                        <img src={minus} alt="minus" />
                        <p className="text-mobileMenuColor text-sm">
                          Minimum investment amount: N100,000
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={minus} alt="minus" />
                        <p className="text-mobileMenuColor text-sm">
                          Lock-in period: Determined by chosen tenure (e.g., 3
                          months to multiple years)
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={minus} alt="minus" />
                        <p className="text-mobileMenuColor text-sm">
                          Option to roll over investment upon maturity
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <img src={minus} alt="minus" />
                        <p className="text-mobileMenuColor text-sm">
                          Potential for growth through accrued interest
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center text-lg md:text-base border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-97.5 md:w-60 lg:w-66 gap-2 md:gap-1.5 lg:gap-2 px-9 md:px-8 lg:px-9 py-3 h-12 md:h-11 lg:h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                  <p>Invest Now</p>
                  <img src={arrowrighttwo} alt="arrowrighttwo" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full bg-investmentsfive bg-cover">
            <div className="flex flex-col gap-12 px-5 py-12">
              <div className="flex flex-col gap-6 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col gap-1">
                  <p className="text-menuHover text-base">
                    Investment Insights
                  </p>
                  <span className="font-gotham text-xl text-transparent bg-clip-text bg-gradient-to-b from-timelineText-start to-timelineText-end leading-tight lg:leading-snug">
                    Read our resources providing valuable insights into
                    investment strategies, market trends, and financial
                    planning.
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col shadow-culture">
                    <div>
                      <img
                        src={inmob}
                        alt="inmob"
                        className="block md:hidden lg:hidden object-cover"
                      />
                      <img
                        src={intab}
                        alt="intab"
                        className="hidden md:block lg:hidden object-cover"
                      />
                      <img
                        src={inweb}
                        alt="inweb"
                        className="hidden md:hidden lg:block object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between px-4 pt-4 pb-6 bg-teamsBg h-32">
                      <p className="text-mobileMenuColor text-base">
                        Canary Point Finance Launches Small Business Support
                        Platform
                      </p>
                      <Link
                        to=""
                        className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                      >
                        <p className="text-base text-menuHover">Read article</p>
                        <img src={arrowright} alt="arrowright" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col shadow-culture">
                    <div>
                      <img
                        src={intwomob}
                        alt="intwomob"
                        className="block md:hidden lg:hidden object-cover"
                      />
                      <img
                        src={intwotab}
                        alt="intwotab"
                        className="hidden md:block lg:hidden object-cover"
                      />
                      <img
                        src={intwoweb}
                        alt="intwoweb"
                        className="hidden md:hidden lg:block object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between px-4 pt-4 pb-6 bg-teamsBg h-32">
                      <p className="text-mobileMenuColor text-base">
                        Insights: Exploring Nigerian Financial Market Trends
                      </p>
                      <Link
                        to=""
                        className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                      >
                        <p className="text-base text-menuHover">Read article</p>
                        <img src={arrowright} alt="arrowright" />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link>
                  <button className="flex items-center justify-center gap-2 text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-55.75 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                    Read more on our blog
                    <img src={arrowright} alt="arrowright" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsContent;
