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
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full md:w-200 lg:w-full">
        <div className="flex flex-col items-center w-full">
          {/* Invest in your future */}
          <div className="flex flex-col w-full bg-investmentsone bg-cover">
            <div className="flex flex-col items-center px-5 md:px-12 pt-12 pb-16 lg:py-24">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-x-16 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col gap-5 lg:w-142 lg:py-12 lg:justify-between">
                  <div className="flex flex-col gap-2 md:gap-3 lg:gap-5">
                    <span className="font-gotham text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                      Invest in Your Future
                    </span>
                    <p className="text-mobileMenuColor text-lg lg:text-xl">
                      We believe that every journey towards financial freedom
                      begins with a single step—a decision to invest in your
                      future. That's why we offer a range of investment
                      solutions designed to help you achieve your financial
                      goals. Start building wealth and securing your future with
                      confidence today.
                    </p>
                  </div>
                  <Link
                    to=""
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-lg text-menuHover">
                      Start Investing now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
                <div className="flex flex-col items-center lg:w-142">
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
          </div>
          {/* Target Investment Plan */}
          <div className="flex flex-col items-center w-full bg-investmentstwo bg-cover">
            <div className="flex flex-col px-5 md:px-12 py-12 md:py-16 lg:py-24">
              <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col gap-6 lg:gap-12">
                  <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                    <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug lg:w-160">
                      Target Investment Plan
                    </span>
                    <p className="text-mobileMenuColor text-base lg:text-lg lg:w-160">
                      The Target Investment Plan is a goal-oriented investment
                      product designed to help investors build savings towards
                      specific financial objectives. Whether it's purchasing a
                      home, funding education, or planning for retirement, this
                      investment plan provides a structured approach to
                      achieving your goals.
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row border border-textHeaderColor shadow-investment lg:w-256">
                    <div className="flex flex-col gap-2 md:gap-3 px-5 py-5 md:py-6 bg-white md:w-88 lg:w-128">
                      <p className="text-menuHover text-lg lg:text-xl">Benefits</p>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Tailored savings approach for specific financial
                            goals
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Flexibility in contribution intervals and amounts
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Access to accumulated savings at the target end date
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Potential for growth through accrued interest
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3 px-5 py-5 md:py-6 bg-white border-t md:border-l md:border-t-0 border-textHeaderColor md:w-88 lg:w-128">
                      <p className="text-menuHover text-lg lg:text-xl">Terms</p>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-3">
                          <img src={minus} alt="minus" />
                          <p className="text-mobileMenuColor text-sm">
                            Tailored savings approach for specific financial
                            goals
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={minus} alt="minus" />
                          <p className="text-mobileMenuColor text-sm">
                            Flexibility in contribution intervals and amounts
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={minus} alt="minus" />
                          <p className="text-mobileMenuColor text-sm">
                            Access to accumulated savings at the target end date
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={minus} alt="minus" />
                          <p className="text-mobileMenuColor text-sm">
                            Potential for growth through accrued interest
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center text-lg md:text-base border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-97.5 md:w-47.75 lg:w-47.75 gap-2 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                  <p>Invest Now</p>
                  <img src={arrowrighttwo} alt="arrowrighttwo" />
                </button>
              </div>
            </div>
          </div>
          {/* Fixed Investment Plan */}
          <div className="flex flex-col items-center w-full bg-investmentsthree bg-cover">
            <div className="flex flex-col px-5 md:px-12 py-12 md:py-16 lg:py-24">
              <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col gap-6 lg:gap-12">
                  <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                    <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug lg:w-160">
                      Fixed Investment Plan
                    </span>
                    <p className="text-mobileMenuColor text-base lg:text-lg lg:w-160">
                      The Fixed Investment product offers investors the
                      opportunity to earn stable returns on their capital over a
                      fixed period. By committing a sum for a specific duration,
                      investors can enjoy the certainty of a fixed interest rate
                      and receive a lump sum payout upon maturity.
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row border border-textHeaderColor shadow-investment lg:w-256">
                    <div className="flex flex-col gap-2 md:gap-3 px-5 py-5 md:py-6 bg-white md:w-88 lg:w-128">
                      <p className="text-menuHover text-lg lg:text-xl">Benefits</p>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Certainty of fixed returns over the investment
                            period
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Potential for higher returns compared to traditional
                            savings accounts
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Flexibility to top up investment amounts as needed
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Option to reinvest accumulated sum upon maturity for
                            continued growth
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3 px-5 py-5 md:py-6 bg-white border-t md:border-l md:border-t-0 border-productsText md:w-88 lg:w-128">
                      <p className="text-menuHover text-lg lg:text-xl">Terms</p>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-3">
                          <img src={minus} alt="minus" />
                          <p className="text-mobileMenuColor text-sm">
                            Minimum investment amount: N1,000,000
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={minus} alt="minus" />
                          <p className="text-mobileMenuColor text-sm">
                            Tenure options: 3 months to 1 year, renewable
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={minus} alt="minus" />
                          <p className="text-mobileMenuColor text-sm">
                            Fixed interest rate throughout the investment period
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center text-lg md:text-base border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-97.5 md:w-47.75 lg:w-47.75 gap-2 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                  <p>Invest Now</p>
                  <img src={arrowrighttwo} alt="arrowrighttwo" />
                </button>
              </div>
            </div>
          </div>
          {/* Canary Vault */}
          <div className="flex flex-col items-center w-full bg-investmentsfour bg-cover">
            <div className="flex flex-col px-5 md:px-12 py-12 md:py-16 lg:py-24">
              <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col gap-6 lg:gap-12">
                  <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                    <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug lg:w-160">
                      Canary Vault
                    </span>
                    <p className="text-mobileMenuColor text-base lg:text-lg lg:w-160">
                      Canary Vault is an investment product designed to instil
                      financial discipline and encourage long-term saving
                      habits. Funds invested in the Canary Vault are locked away
                      until a predetermined maturity date, helping investors
                      resist the temptation of premature withdrawals and stay
                      focused on their financial goals.
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row border border-textHeaderColor shadow-investment lg:w-256">
                    <div className="flex flex-col gap-2 md:gap-3 px-5 py-5 md:py-6 bg-white md:w-88 lg:w-128">
                      <p className="text-menuHover text-lg lg:text-xl">Benefits</p>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Encourages disciplined saving habits
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Protects funds from impulsive spending
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Potential for higher returns through longer lock-in
                            periods
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={check} alt="check" />
                          <p className="text-mobileMenuColor text-sm">
                            Option to reinvest funds upon maturity for continued
                            growth
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3 px-5 py-5 md:py-6 bg-white border-t md:border-l md:border-t-0 border-canaryBorder md:w-88 lg:w-128">
                      <p className="text-menuHover text-lg lg:text-xl">Terms</p>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-3">
                          <img src={minus} alt="minus" />
                          <p className="text-mobileMenuColor text-sm">
                            Minimum investment amount: N100,000
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={minus} alt="minus" />
                          <p className="text-mobileMenuColor text-sm">
                            Lock-in period: Determined by chosen tenure (e.g., 3
                            months to multiple years)
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={minus} alt="minus" />
                          <p className="text-mobileMenuColor text-sm">
                            Option to roll over investment upon maturity
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <img src={minus} alt="minus" />
                          <p className="text-mobileMenuColor text-sm">
                            Potential for growth through accrued interest
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center text-lg md:text-base border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-97.5 md:w-47.75 lg:w-47.75 gap-2 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                  <p>Invest Now</p>
                  <img src={arrowrighttwo} alt="arrowrighttwo" />
                </button>
              </div>
            </div>
          </div>
          {/* Investment Insights */}
          <div className="flex flex-col items-center w-full bg-investmentsfive bg-cover">
            <div className="flex flex-col px-5 md:px-12 py-12 md:py-16 lg:py-24">
              <div className="flex flex-col gap-6 md:gap-8 lg:gap-16 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                  <p className="text-menuHover text-base md:text-lg lg:text-xl">
                    Investment Insights
                  </p>
                  <span className="font-gotham text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-timelineText-start to-timelineText-end leading-tight lg:leading-snug lg:w-256">
                    Read our resources providing valuable insights into
                    investment strategies, market trends, and financial
                    planning.
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-6">
                  <div className="flex flex-col shadow-culture md:w-85 lg:w-96">
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
                    <div className="flex flex-col justify-between px-4 lg:px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 bg-teamsBg h-32 lg:h-40">
                      <p className="text-mobileMenuColor text-base lg:text-lg">
                        Canary Point Finance Launches Small Business Support
                        Platform
                      </p>
                      <Link
                        to="/article"
                        className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                      >
                        <p className="text-base text-menuHover">Read article</p>
                        <img src={arrowright} alt="arrowright" />
                      </Link>
                    </div>
                  </div> 
                  <div className="flex flex-col shadow-culture md:w-85 lg:w-96">
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
                    <div className="flex flex-col justify-between px-4 lg:px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 bg-teamsBg h-32 lg:h-40">
                      <p className="text-mobileMenuColor text-base lg:text-lg">
                        Insights: Exploring Nigerian Financial Market Trends
                      </p>
                      <Link
                        to="/article"
                        className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                      >
                        <p className="text-base text-menuHover">Read article</p>
                        <img src={arrowright} alt="arrowright" />
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:flex lg:flex-col lg:shadow-culture md:w-85 lg:w-96">
                    <div>
                      <img
                        src={inthreeweb}
                        alt="inthreeweb"
                        className="hidden md:hidden lg:block object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between px-4 lg:px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 bg-teamsBg h-32 lg:h-40">
                      <p className="text-mobileMenuColor text-base lg:text-lg">
                        Canary Point Finance Partners for Financial Inclusion
                      </p>
                      <Link
                        to="/article"
                        className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                      >
                        <p className="text-base text-menuHover">Read article</p>
                        <img src={arrowright} alt="arrowright" />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/blog">
                  <button className="flex items-center justify-center gap-2 text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-70.25 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
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
