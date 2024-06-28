import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const PrivacyModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2 max-h-full lg:max-h-3/4 overflow-y-auto">
          <div className="px-5 text-justify w-full">
            <div className="flex flex-col gap-6 md:gap-6 pt-12 pb-16">
              <span className="text-mobileMenuColor text-base">
                Canary Point Finance Limited is a Finance Company licensed by
                the Central Bank of Nigeria (CBN) to provide financial services
                through various channels, including our Website. This page
                informs you of our policies regarding the collection, use, and
                disclosure of personal data when you use our Services and the
                choices you have associated with that data.
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-blueBorderStroke text-xl">
                  Information We Collect
                </span>
                <p className="text-mobileMenuColor text-base">
                  We collect several types of information from you when you
                  provide it to us for various purposes to provide and improve
                  our services. All information supplied by you to us is
                  collected and processed in accordance with relevant data
                  protection laws and regulations. <br />
                  <br />
                  <div className="pl-1">
                    <li>
                      Personal Information: While using our services, we may ask
                      you to provide us with certain personally identifiable
                      information that can be used to contact or identify you
                      (“Personal Data”). This may include, but is not limited
                      to: Email address, First name and last name, Phone number,
                      Address, State of origin, Age, Gender, Religion, etc.
                    </li>{" "}
                    <br />
                    <li>
                      Service Usage Information: When you access our services,
                      we may collect certain information automatically,
                      including the type of device you use, your device's unique
                      ID, IP address, operating system, browser type, and other
                      diagnostic data (“Usage Data”).
                    </li>
                    <br />
                    <li>
                      Cookies: Our website uses cookies to provide you with a
                      good browsing experience and to improve our site. By
                      visiting our website, you consent to the placement of
                      cookies in your browser in accordance with this Privacy
                      Policy.
                    </li>
                  </div>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-blueBorderStroke text-xl">
                  How we use your information
                </span>
                <p className="text-mobileMenuColor text-base">
                  We may use your personal data for purposes including, but not
                  limited to:
                  <br />
                  <br />
                  <div className="pl-1">
                    <li>Conducting our business</li>
                    <li>Managing our relationship with you</li>
                    <li>Offering and providing tailored services</li>
                    <li>Providing customer care and support</li>
                    <li>Complying with internal policies</li>
                    <li>Providing analysis to improve our services</li>
                    <li>
                      Fulfilling terms of any contract you may have with us
                    </li>
                    <li>Communicating with you effectively</li>
                  </div>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-blueBorderStroke text-xl">
                  Transfer of Data
                </span>
                <p className="text-mobileMenuColor text-base">
                  Your information, including Personal Data, may be transferred
                  to and maintained on computers located outside of your
                  jurisdiction. By using our services, you consent to the
                  transfer of your data.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-blueBorderStroke text-xl">
                  Links to Third-Party Websites
                </span>
                <p className="text-mobileMenuColor text-base">
                  Our services may contain links to third-party websites. We
                  have no control over, and assume no responsibility for, the
                  content, privacy policies, or practices of any third-party
                  sites or services.
                  <br />
                  <br />
                  <div className="pl-1">
                    <li>
                      Service Providers: We may employ third-party companies and
                      individuals to facilitate our services, perform
                      Service-related services, or assist us in analyzing how
                      our services are used. These third parties have access to
                      your Personal Data only to perform these tasks on our
                      behalf and are obligated not to disclose or use it for any
                      other purpose.
                    </li>
                  </div>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-blueBorderStroke text-xl">
                  Information Sharing and Disclosure
                </span>
                <p className="text-mobileMenuColor text-base">
                  We may disclose your Personal Data in the good faith belief
                  that such action is necessary to: <br />
                  <br />
                  <div className="pl-1">
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend our rights or property</li>
                    <li>Prevent or investigate possible wrongdoing</li>
                    <li>Protect the personal safety of users or the public</li>
                  </div>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-blueBorderStroke text-xl">
                  Protecting Children's Privacy
                </span>
                <p className="text-mobileMenuColor text-base">
                  Our services do not address anyone under the age of 18
                  (“Children”). We do not knowingly collect personally
                  identifiable information from anyone under the age of 18. If
                  you are a parent or guardian and you are aware that your
                  Children has provided us with Personal Data, please contact
                  us.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-blueBorderStroke text-xl">
                  Personal Data Retention Period
                </span>
                <p className="text-mobileMenuColor text-base">
                  We will keep your personal information for as long as it is
                  necessary for the purposes set out in this Privacy Policy,
                  unless a longer retention period is required or permitted by
                  law.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-blueBorderStroke text-xl">
                  Your Data Privacy Rights
                </span>
                <p className="text-mobileMenuColor text-base">
                  You have the right to access, update, delete, or restrict the
                  processing of your Personal Data. You may also request a copy
                  of the information we hold about you, or correct any
                  inaccuracies.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-blueBorderStroke text-xl">
                  Changes to This Privacy Policy
                </span>
                <p className="text-mobileMenuColor text-base">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page. You are advised to review this Privacy Policy
                  periodically for any changes.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-blueBorderStroke text-xl">
                  Contact Us
                </span>
                <p className="text-mobileMenuColor text-base">
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact us at{" "}
                  <Link
                    className="text-menuHover underline underline-offset-4"
                    onClick={() =>
                      (window.location = "mailto:support@canaryfinance.com")
                    }
                  >
                    support@canaryfinance.com
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-6 py-4 flex justify-end">
            <button
              onClick={onClose}
              className="flex items-center justify-center text-lg border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-32 h-11 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PrivacyModal;
