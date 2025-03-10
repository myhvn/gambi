"use client";
import "@/styles/modal.css";
import React, { useState, useContext } from "react";
import { AppContext } from "@/context/app";

const SignModal = ({ show, onClose }) => {
  const { isModalOpen, toggleModal, modalType, setModalType, login, register } = useContext(AppContext);
  const [step, setStep] = useState(1);

  if (!isModalOpen) return null;

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSignIn = () => {
    login();
    toggleModal(); 
  };

  const handleSignUp = () => {
    register();
    toggleModal(); 
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-9999 overflow-y-auto">
      <div className="bg-[#182132] rounded-lg p-6 w-full max-w-xl mx-4 sm:mx-6 my-6 relative max-h-screen overflow-y-auto">
        <div
          className="hidden lg:flex flex-col items-center justify-center absolute left-0 top-0 h-full w-1/3 bg-cover bg-center p-6"
          style={{ backgroundImage: "url(/images/modal/signleft.webp)" }}
        >
          <img
            src="/images/modal/gdiamond.png"
            alt="Logo"
            className="w-16 h-16"
          />
        </div>
        <div className="lg:pl-48 text-white max-h-full overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setModalType(0);
                  setStep(1);
                }}
                className={`text-xl font-bold ${
                  modalType === 0 ? "text-green-500" : "text-gray-400"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setModalType(1);
                  setStep(1);
                }}
                className={`text-xl font-bold ${
                  modalType === 1 ? "text-green-500" : "text-gray-400"
                }`}
              >
                Sign Up
              </button>
            </div>
            <button
              onClick={toggleModal}
              className="text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
          </div>
          <form className="mt-4 max-h-full overflow-y-auto">
            {modalType === 0 ? (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email or Username
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 p-2 w-full border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#121826] border-gray-600 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 p-2 w-full border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#121826] border-gray-600 text-white"
                  />
                </div>
              </>
            ) : (
              <>
                {step === 1 && (
                  <>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 p-2 w-full border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#121826] border-gray-600 text-white"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="mt-1 p-2 w-full border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#121826] border-gray-600 text-white"
                      />
                      <p className="text-xs text-gray-400 mt-1">
                        Your username must be 3-14 characters long.
                      </p>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="mt-1 p-2 w-full border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#121826] border-gray-600 text-white"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="dob"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Date of Birth
                      </label>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          id="day"
                          placeholder="DD"
                          className="mt-1 p-2 w-1/3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#121826] border-gray-600 text-white"
                        />
                        <input
                          type="text"
                          id="month"
                          placeholder="Month"
                          className="mt-1 p-2 w-1/3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#121826] border-gray-600 text-white"
                        />
                        <input
                          type="text"
                          id="year"
                          placeholder="YYYY"
                          className="mt-1 p-2 w-1/3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#121826] border-gray-600 text-white"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Phone (Optional)
                      </label>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          id="countryCode"
                          placeholder="Country Code"
                          className="mt-1 p-2 w-1/3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#121826] border-gray-600 text-white"
                        />
                        <input
                          type="text"
                          id="phoneNumber"
                          placeholder="Phone Number"
                          className="mt-1 p-2 w-2/3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#121826] border-gray-600 text-white"
                        />
                      </div>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <div className="mb-4">
                    <label
                      htmlFor="terms"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Terms and Conditions
                    </label>
                    <div
                      id="terms"
                      className="text-gray-400 mt-1 p-2 w-full border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#121826] border-gray-600  h-64 overflow-y-scroll"
                    >
                      <p className="mb-2">
                        1. Gambi
                        <br />
                        1.1 Gambi is owned and operated by Medium Rare N.V.
                        (hereinafter Gambi, We or Us), a company with head
                        office at Korpaalweg 10, Willemstad, Curaçao. Gambul is
                        licensed and regulated by the Government of Curaçao
                        under the gaming license 8048/JAZ issued to
                        Antillephone. Some credit card payment processing are
                        handled by its wholly owned subsidiary, Medium Rare
                        Limited.
                      </p>
                      <p>
                        2. IMPORTANT NOTICE
                        <br />
                        2.1 By registering on www.gambul.com (the Website), you
                        enter into a contract with Medium Rare N.V. and agree to
                        be bound by these Terms and Conditions, in our Privacy
                        Policy, in our Cookies Policy and relevant rules
                        applicable to our betting or gaming products as further
                        referenced in these Terms and Conditions (Terms and
                        Conditions or Agreement), and the betting and/or gaming
                        specific rules, and are deemed to have accepted and
                        understood all the terms.
                      </p>
                      <p>
                        2.2 Please read this Agreement carefully to make sure
                        you fully understand the Agreement and accept its terms.
                      </p>
                    </div>
                    <div className="flex items-center mt-2">
                      <input type="checkbox" id="agree" className="mr-2" />
                      <label htmlFor="agree" className="text-sm text-gray-300">
                        I have read and agree to the terms and conditions
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={handleBack}
                      className="mt-2 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      Back to Sign Up
                    </button>
                  </div>
                )}
              </>
            )}
           <button type="button"onClick={modalType === 0 ? handleSignIn : step === 1 ? handleContinue : handleSignUp} className="w-full bg-green-500 hover:bg-green-600 text-black py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
            {modalType === 0 ? "Sign In" : step === 1 ? "Continue" : "Submit"}
          </button>
          </form>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="bg-[#121826] p-2 rounded-full shadow-md">
              <img
                src="/images/modal/google.svg"
                alt="Google"
                className="h-6 w-6"
              />
            </button>
            <button className="bg-[#121826] p-2 rounded-full shadow-md">
              <img
                src="/images/modal/facebook.svg"
                alt="Facebook"
                className="h-6 w-6"
              />
            </button>
          </div>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-gray-400 hover:underline">
              Forgot Password
            </a>
            <p className="text-sm text-gray-400 mt-2">
              {modalType === 0
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              {modalType === 0 ? (
                <a
                  href="#"
                  onClick={() => {
                    setModalType(1);
                    setStep(1);
                  }}
                  className="text-green-500 hover:underline"
                >
                  {modalType === 0 ? "Register an Account" : "Sign In"}
                </a>
              ) : (
                <a
                  href="#"
                  onClick={() => {
                    setModalType(0);
                    setStep(1);
                  }}
                  className="text-green-500 hover:underline"
                >
                  {modalType === 0 ? "Register an Account" : "Sign In"}
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignModal;
