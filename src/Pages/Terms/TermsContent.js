import React from "react";

const TermsContent = () => {
  return (
    <div className="flex flex-col items-center bg-white lg:bg-termsbg lg:bg-cover">
      <div className="flex flex-col w-107.5 md:w-200 lg:w-341.5">
        <div className="px-5 md:px-12">
          <div className="flex flex-col gap-12 md:gap-12 lg:gap-16 pt-12 pb-16 md:py-12 lg:py-24">
            <div className="flex flex-col gap-1 md:gap-5 lg:gap-5">
              <span className="text-blueBorderStroke text-xl md:text-2xl">
                General Information
              </span>
              <p className="text-mobileMenuColor text-sm md:text-base">
                1. The Finance House is under no obligation to open, create or
                permit the operation of the requested account until receipt of
                all specific document for the account. <br />
                <br /> 2. The Finance House shall honour all
                cheque/orders/instrument on your account provided such
                instrument are duly signed by you in line with your mandate and
                to debit such to your account where applicable. <br />
                <br />
                3. I/we authorize the Finance House to undertake all 'Know Your
                Customer' procedure as stated by government regulation, laws and
                Finance House policies. <br />
                <br /> 4. I/we agree that the Finance House may at its sole
                discretion and without prior notice, change the minimum balance
                requirement, charges or interest rate on any account i/we
                operate with you. <br />
                <br /> 5. The Finance House has the right of set-off, or to
                transfer balances from my various account to settle a particular
                account of to close my account. <br />
                <br />
                6. We shall be solely responsible for the safe keep and
                confidentiality of my/our debit card/PIN/User ID, password and
                any other valid information regarding my account with the
                Finance House.
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-5 lg:gap-5">
              <span className="text-blueBorderStroke text-xl md:text-2xl">
                Credit Check Consent
              </span>
              <p className="text-mobileMenuColor text-sm md:text-base">
                I understand that by opening this account, I authorise Canary
                Finance to conduct credit inquiries with authorized credit
                bureaus for the purposes of assessing my financial standing and
                creditworthiness. This may impact future loan applications or
                access to certain financial products. <br />
                <br />I understand that Canary Finance is committed to
                safeguarding my personal information and will use my credit
                report in compliance with applicable Nigerian data protection
                regulations.
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-5 lg:gap-5">
              <span className="text-blueBorderStroke text-xl md:text-2xl">Indemnity</span>
              <p className="text-mobileMenuColor text-sm md:text-base">
                The Customer hereby agrees that the Customer shall, at his/its
                own expense, indemnify, defend and hold harmless Canary Point
                Finance Ltd from and against any and all liability any other
                loss that may occur, arising from or relating to the operation
                or use of the Account or the Services or breach, non-performance
                or inadequate performance by the Customer of any of these Terms
                or the acts, errors, representations, misrepresentations,
                misconduct or negligence of the Customer in performance of its
                obligations. <br />
                <br /> The Customer shall keep Canary Point Finance Ltd
                indemnified at all times against, and save Canary Point Finance
                Ltd harmless from all actions, proceedings, claims, losses,
                damages, costs, interest (both before and after judgement) and
                expenses (including legal costs on a solicitor and client basis)
                which may be brought against or suffered or incurred by Canary
                Point Finance Ltd in resolving any dispute relating to the
                Customer's Account with Canary Point Finance Ltd or in enforcing
                Canary Point Finance Ltd rights under or in connection with
                these Terms and conditions contained herein, or which may have
                arisen either directly or indirectly out of or in connection
                with Canary Point Finance Ltd performing its obligations
                hereunder or accepting instructions, including but not limited
                to, fax and other telecommunications or electronic instructions,
                and acting or failing to act thereon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsContent;
