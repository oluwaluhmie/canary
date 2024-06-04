import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import arrowleft from "../../assets/arrowleft.svg";
import blogone from "../../assets/blogarticlemob.png";
import blogtab from "../../assets/blogarticletab.png";
import blogweb from "../../assets/blogarticleweb.png";
import blogmainone from "../../assets/blogmainmob.png";
import blogmaintab from "../../assets/blogmaintab.png";
import blogmainweb from "../../assets/blogmainweb.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
import mail from "../../assets/mail.png";
import InputWithLabel from "../../Components/inputWithLabel";
import OrangeButtonWoutIcon from "../../Components/orangeButtonWoutIcon";
import arrowright from "../../assets/arrowright.svg";
import Header from "../Header";
import BlogHeader from "./BlogHeader";
import Footer from "../Footer";

const BlogArticle = ({ onFormChange }) => {
  return (
    <div className="flex flex-col items-center bg-white lg:bg-articlebg lg:bg-cover">
      <div className="flex flex-col w-full overflow-hidden">
        <Header />
        <BlogHeader />
        <div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-8 md:gap-12 pt-12 pb-16 lg:py-24 w-97.5 md:w-176 lg:w-300">
              <div className="flex flex-col gap-3 pb-3 transition-all duration-300 ease-out">
                <div className="flex justify-between md:justify-normal md:gap-8">
                  <Link
                    to="/blog"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <img src={arrowleft} alt="arrowleft" />
                    <p className="text-base text-menuHover">Back</p>
                  </Link>
                  <div className="flex gap-1.5">
                    <p className="text-footerText text-sm md:text-base">Blog</p>
                    <p className="text-footerText text-sm md:text-base">/</p>
                    <p className="text-footerText text-sm md:text-base">
                      Bringing out the best of businesses
                    </p>
                  </div>
                </div>
                <hr className="border-t-2 border-menuHover" />
              </div>
              <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
                <div className="flex flex-col gap-2">
                  <span className="font-gotham text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
                    Bringing out the best of businesses
                  </span>
                  <p className="text-footerText text-sm lg:text-base">
                    16 April, 2024
                  </p>
                </div>
                <img
                  src={blogmainone}
                  alt="blogmainone"
                  className="block md:hidden lg:hidden"
                />
                <img
                  src={blogmaintab}
                  alt="blogmaintab"
                  className="hidden md:block lg:hidden"
                />
                <img
                  src={blogmainweb}
                  alt="blogmainweb"
                  className="hidden md:hidden lg:block"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-16 lg:justify-between">
                <p className="text-mobileMenuColor md:text-lg lg:w-192">
                  In today's competitive business landscape, maximizing your
                  company's potential is essential for long-term success. Here
                  are some actionable strategies to help you unlock the full
                  potential of your business: <br />
                  <br /> Assess Your Strengths and Weaknesses: Begin by
                  conducting a thorough assessment of your business's strengths
                  and weaknesses. Understanding where you excel and where
                  there's room for improvement is crucial for strategic
                  planning. <br />
                  <br /> Set Clear Goals and Objectives: Define specific,
                  achievable goals that align with your company's vision and
                  values. Clear objectives provide focus and direction for your
                  team, guiding them towards success. <br />
                  <br /> Foster a Culture of Innovation: Encourage creativity
                  and innovation among your employees. Embrace new ideas and
                  approaches to problem-solving, and create an environment where
                  experimentation is encouraged. <br />
                  <br /> Invest in Talent Development: Your employees are your
                  most valuable asset. Invest in their development through
                  training and growth opportunities to build a skilled and
                  motivated workforce. <br />
                  <br /> Embrace Technology and Digital Transformation: Leverage
                  technology to streamline processes, improve efficiency, and
                  enhance the customer experience. Embrace digital
                  transformation to stay agile and competitive in today's
                  fast-paced business world. <br />
                  <br /> Measure Progress and Celebrate Success: Track your
                  progress towards your goals and celebrate achievements along
                  the way. Recognizing and rewarding success boosts morale and
                  motivates your team to continue striving for excellence.{" "}
                  <br />
                  <br /> By implementing these strategies, you can unlock the
                  full potential of your business and position yourself for
                  sustained growth and success in the marketplace.
                </p>
                <div className="flex flex-col md:flex-row lg:flex-col gap-6">
                  <div className="border-b-2 border-productsBorder w-80 h-36 shadow-blog">
                    <div className="font-gotham bg-menuTextHover w-80 p-4">
                      <span className="text-menuHover text-lg">
                        Share This Post
                      </span>
                    </div>
                    <div className="flex flex-row gap-2 p-4 w-80 justify-center bg-white">
                      <Link to="">
                        <img src={facebook} alt="facebook" />
                      </Link>
                      <Link to="">
                        <img src={twitter} alt="twitter" />
                      </Link>
                      <Link to="">
                        <img src={linkedin} alt="linkedin" />
                      </Link>
                      <Link to="">
                        <img src={whatsapp} alt="whatsapp" />
                      </Link>
                      <Link to="">
                        <img src={mail} alt="mail" />
                      </Link>
                    </div>
                  </div>
                  <div className="border-b-2 border-productsBorder w-97.5 shadow-blog">
                    <div className="font-gotham bg-menuTextHover w-97.5 p-4">
                      <span className="text-menuHover text-lg">
                        Stay Updated
                      </span>
                    </div>
                    <div className="flex flex-col p-4">
                      <Formik
                        initialValues={{
                          firstName: "",
                          email: "",
                        }}
                        validationSchema={Yup.object({
                          firstName: Yup.string().required(
                            "First name is required"
                          ),
                          email: Yup.string()
                            .email("Invalid email address")
                            .required("Email Address is required"),
                        })}
                        onSubmit={(values, { resetForm }) => {
                          console.log(values); // Handles form submission here
                          resetForm(); // Clear form after submission
                        }}
                      >
                        {({ values, errors, handleChange }) => (
                          <Form className="flex flex-col gap-8">
                            <div className="grid gap-6">
                              <InputWithLabel
                                labelName="First Name"
                                inputType="text"
                                inputName="firstName"
                                placeholder="Enter first name"
                                inputValue={values.firstName}
                                inputOnChange={(event) => {
                                  handleChange(event);
                                  onFormChange({
                                    firstName: event.target.value,
                                  });
                                }}
                                InputError={errors.firstName}
                              />
                              <InputWithLabel
                                labelName="Email"
                                inputType="email"
                                inputName="email"
                                placeholder="Enter your email address"
                                inputValue={values.email}
                                inputOnChange={(event) => {
                                  handleChange(event);
                                  onFormChange({ email: event.target.value });
                                }}
                                InputError={errors.email}
                              />
                            </div>
                            <OrangeButtonWoutIcon buttonText="Get Started" />
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-latestbg bg-cover px-5 pt-12 pb-16 lg:py-24 w-full">
            <div className="flex flex-col gap-8 w-97.5 md:w-176 lg:w-300">
              <span className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
                Latest Articles
              </span>
              <div className="grid md:grid-cols-2 lg:hidden gap-6 md:gap-x-6">
                <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                  <img
                    src={blogone}
                    alt="blogone"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={blogtab}
                    alt="blogtab"
                    className="hidden md:block lg:hidden"
                  />
                  <div className="flex flex-col gap-5 px-5 pt-5 pb-6 h-50 md:h-55">
                    <div className="flex flex-col gap-0.5 h-28 md:h-33">
                      <p className="text-footerText text-sm">16 April, 2024</p>
                      <span className="font-gotham text-menuTextColor text-lg">
                        Bringing out the best of businesses
                      </span>
                      <p className="h-10 overflow-hidden text-mobileMenuColor text-sm">
                        Grow your wealth with our investment opportunities. We
                        offer investment plans designed to suit your short or
                        long term financial goals and objectives.
                      </p>
                    </div>
                    <Link
                      to="/article"
                      className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                    >
                      <p className="text-base md:text-base lg:text-base text-menuHover">
                        Read More
                      </p>
                      <img src={arrowright} alt="arrowright" />
                    </Link>
                  </div>
                </div>
                <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out w-97.5 md:w-85">
                  <img
                    src={blogone}
                    alt="blogone"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={blogtab}
                    alt="blogtab"
                    className="hidden md:block lg:hidden"
                  />
                  <div className="flex flex-col gap-5 px-5 pt-5 pb-6">
                    <div className="flex flex-col gap-0.5 h-28 md:h-33">
                      <p className="text-footerText text-sm">16 April, 2024</p>
                      <span className="font-gotham text-menuTextColor text-lg">
                        Canary Finance Launch. Here we go!
                      </span>
                      <p className="h-10 overflow-hidden text-mobileMenuColor text-sm">
                        Grow your wealth with our investment opportunities. We
                        offer investment plans designed to suit your short or
                        long term financial goals and objectives.
                      </p>
                    </div>
                    <Link
                      to="/article"
                      className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                    >
                      <p className="text-base md:text-base lg:text-base text-menuHover">
                        Read More
                      </p>
                      <img src={arrowright} alt="arrowright" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden lg:grid lg:grid-cols-3">
                <div className="flex gap-x-6 w-300">
                  <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                    <img
                      src={blogweb}
                      alt="blogweb"
                      className="hidden md:hidden lg:block"
                    />
                    <div className="flex flex-col gap-5 lg:gap-6 px-5 lg:px-6 pt-5 lg:pt-6 pb-6 lg:pb-9 h-50 md:h-55 lg:h-68">
                      <div className="flex flex-col gap-0.5 lg:gap-1 h-28 md:h-33 lg:h-40">
                        <p className="text-footerText text-sm">
                          16 April, 2024
                        </p>
                        <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                          How to Survive with 2k
                        </span>
                        <p className="h-10 lg:h-12 overflow-hidden text-mobileMenuColor text-sm lg:text-base lg:w-84">
                          Grow your wealth with our investment opportunities. We
                          offer investment plans designed to suit your short or
                          long term financial goals and objectives.
                        </p>
                      </div>
                      <Link
                        to="/article"
                        className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                      >
                        <p className="text-base md:text-base lg:text-lg text-menuHover">
                          Read More
                        </p>
                        <img src={arrowright} alt="arrowright" />
                      </Link>
                    </div>
                  </div>
                  <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                    <img
                      src={blogweb}
                      alt="blogweb"
                      className="hidden md:hidden lg:block"
                    />
                    <div className="flex flex-col gap-5 lg:gap-6 px-5 lg:px-6 pt-5 lg:pt-6 pb-6 lg:pb-9 h-50 md:h-55 lg:h-68">
                      <div className="flex flex-col gap-0.5 lg:gap-1 h-28 md:h-33 lg:h-40">
                        <p className="text-footerText text-sm">
                          16 April, 2024
                        </p>
                        <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                          No gree for Anybody. 2024's anthem
                        </span>
                        <p className="h-10 lg:h-12 overflow-hidden text-mobileMenuColor text-sm lg:text-base lg:w-84">
                          Grow your wealth with our investment opportunities. We
                          offer investment plans designed to suit your short or
                          long term financial goals and objectives.
                        </p>
                      </div>
                      <Link
                        to="/article"
                        className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                      >
                        <p className="text-base md:text-base lg:text-lg text-menuHover">
                          Read More
                        </p>
                        <img src={arrowright} alt="arrowright" />
                      </Link>
                    </div>
                  </div>
                  <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                    <img
                      src={blogweb}
                      alt="blogweb"
                      className="hidden md:hidden lg:block"
                    />
                    <div className="flex flex-col gap-5 lg:gap-6 px-5 lg:px-6 pt-5 lg:pt-6 pb-6 lg:pb-9 h-50 md:h-55 lg:h-68">
                      <div className="flex flex-col gap-0.5 lg:gap-1 h-28 md:h-33 lg:h-40">
                        <p className="text-footerText text-sm">
                          16 April, 2024
                        </p>
                        <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                          Bringing out the best of businesses
                        </span>
                        <p className="h-10 lg:h-12 overflow-hidden text-mobileMenuColor text-sm lg:text-base lg:w-84">
                          Grow your wealth with our investment opportunities. We
                          offer investment plans designed to suit your short or
                          long term financial goals and objectives.
                        </p>
                      </div>
                      <Link
                        to="/article"
                        className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                      >
                        <p className="text-base md:text-base lg:text-lg text-menuHover">
                          Read More
                        </p>
                        <img src={arrowright} alt="arrowright" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogArticle;
