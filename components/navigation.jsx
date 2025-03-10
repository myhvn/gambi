"use client";
import "@/styles/navigation.css";
import React, { useContext } from "react";
import { AppContext } from "@/context/app";
import { MessageCircleMore } from "lucide-react";
import { Bitcoin, Logo, LogoIcon } from "@/components/icons";
import { MdNotifications } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import SearchModal from "@/components/modalsearch";

export default function Navigation() {
  const {
    auth,
    width,
    toggleSidebar,
    toggleRightbar,
    toggleModal,
    toggleSearchModal,
  } = useContext(AppContext);

  return (
    <div
    data-nosnippet=""
    data-layout=""
    className={`navigation next-14p7hqp ${width < 768 ? "mobile" : ""}`}
    style={{
      "--header-zIndex": 100,
      paddingRight: "6px",
    }}
  >
    <div
      className="group variant-undefined next-ntdiml"
      style={{
        height: "100%",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div className="ctainer next-ntdiml">
        <div
          className={`navigation-container next-14p7hqp ${
            auth.isLoggedin === false ? "" : "authenticated"
          }`}
        >
          {" "}
          <div className="stack x-flex-start y-center gap-smaller padding-none direction-horizontal padding-left-auto padding-top-auto padding-bottom-auto padding-right-auto next-1cd1boi">
            <div className="">
              <div className="image-focus next-1bax0ph">
                <a data-test="home-button" href="/tr" aria-label="Home">
                  <div className="wrap normal next-1y9pixq" data-content="">
                    {width < 768 ? (
                      <LogoIcon className="svg-icon svg-green min-h-[45px] min-w-[28px]" />
                    ) : (
                      <Logo />
                    )}
                  </div>
                </a>
              </div>
            </div>{" "}
          </div>{" "}
          {auth.isLoggedin === false ? (
            <></>
          ) : (
            <div
              className="balance-toggle next-51jofe"
              data-test="balance-toggle"
            >
              <div className="coin-toggle next-1hjozqf">
                <div className="wrapper currency-view-compact next-1hjozqf">
                  {" "}
                  <div className="dropdown next-1iau4lg">
                    <button
                      type="button"
                      tabIndex="0"
                      className="inline-flex relative items-center gap-2 justify-center font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-700 text-white betterhover:hover:bg-grey-900 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] rounded-sm"
                      aria-label="Open Dropdown"
                      data-test="coin-toggle"
                      data-active-currency="btc"
                      data-button-root=""
                      style={{
                        borderRadius: "0 var(--radius-lg) var(--radius-lg) 0",
                      }}
                    >
                      <div className="wrap next-lnje3m">
                        <div
                          className="currency next-141qgpc"
                          role="presentation"
                        >
                          {" "}
                          <span className="content next-141qgpc">
                            <span
                              className="weight-semibold line-height-default align-left size-default text-size-default variant-highlighted numeric with-icon-space is-truncate next-17v69ua"
                              style={{ maxWidth: "16ch" }}
                            >
                              0.00000000
                            </span>
                          </span>{" "}
                          <span
                            className="weight-normal line-height-default align-left size-default text-size-default variant-subtle is-truncate next-17v69ua"
                            style={{ maxWidth: "16ch" }}
                          >
                            <Bitcoin className="svg-icon ml-1" />
                          </span>{" "}
                        </div>
                      </div>{" "}
                      <span className="dropdown-icon next-9n45i2">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 64 64"
                          className="svg-icon "
                          style={{ transform: "rotate(0deg)" }}
                        >
                          {" "}
                          <title></title>{" "}
                          <path d="M32.271 49.763 9.201 26.692l6.928-6.93 16.145 16.145 16.144-16.144 6.93 6.929-23.072 23.07h-.005Z"></path>
                        </svg>
                      </span>
                    </button>{" "}
                  </div>
                </div>
              </div>{" "}
              <button
                type="button"
                tabIndex="0"
                className="navbar-wallet-button inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-blue-500 text-white betterhover:hover:bg-blue-600 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]"
                data-testid="wallet"
                data-test="wallet"
                data-analytics="global-navbar-wallet-button"
                data-content=""
                data-button-root=""
                style={{
                  borderRadius: "0 var(--radius-lg) var(--radius-lg) 0",
                }}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 64 64"
                  className="svg-icon "
                >
                  {" "}
                  <title></title>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45.71 13.349v.024c0 4.316-2.076 8.146-5.32 10.57H24.61l-.034-.024a13.19 13.19 0 0 1-5.286-10.57c0-7.296 5.914-13.21 13.21-13.21 7.296 0 13.21 5.914 13.21 13.21Zm4.806 22.844H62.23v-3.19a5.31 5.31 0 0 0-5.3-5.31H10.14a5.624 5.624 0 0 1-5.24-5.608v-.014a4.914 4.914 0 0 1 0-.522v.012a5.546 5.546 0 0 1 5.51-5.11h3.85a17.489 17.489 0 0 1-.26-2.88v-.01H7.06A7.07 7.07 0 0 0 0 20.63v37.1a6.14 6.14 0 0 0 6.13 6.13h50.79a5.31 5.31 0 0 0 5.31-5.31v-3.19H50.5c-.092.004-.2.006-.31.006-5.296 0-9.59-4.294-9.59-9.59s4.294-9.59 9.59-9.59c.108 0 .218.002.326.006Zm4.733-22.63v2.89h-4.516a18.36 18.36 0 0 0 .267-2.89h4.25Zm-4.516 2.89-.02.11.017-.11h.003ZM8.66 21.983c0-.98.792-1.774 1.77-1.78h4.91l.044.122a17.843 17.843 0 0 0 1.956 3.618h-6.91a1.77 1.77 0 0 1-1.77-1.77v-.19ZM64 39.943v11.67l-13.488-.002a5.84 5.84 0 0 1-6.094-5.834 5.84 5.84 0 0 1 6.082-5.834H64Zm-13.06 8.5a2.67 2.67 0 0 0 2.67-2.66v-.01a2.67 2.67 0 1 0-2.67 2.67Zm-1.26-28.24a18.188 18.188 0 0 1-1.998 3.74h-.002l-.038.058.04-.058H58v-3.74h-8.32Z"
                  ></path>
                </svg>
              </button>
            </div>
          )}
          <section>
            <div className="stack x-flex-end y-center gap-none padding-none direction-horizontal padding-left-auto padding-top-auto padding-bottom-auto padding-right-auto next-1cd1boi">
            <button
                    onClick={toggleSearchModal}
                    type="button"
                    tabIndex="0"
                    className="modal-icon inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-sm leading-none py-[0.9375rem] px-[1.25rem]"
                    data-testid="find-button"
                    data-test="find-button"
                    data-analytics="global-navbar-find-button"
                    data-content=""
                    data-button-root=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M3 11a8 8 0 1116 0 8 8 0 01-16 0z"
                      />
                    </svg>
                  </button>
              {" "}
              {auth.isLoggedin === false ? (
               
                
                <>
                  <button
                    onClick={() => toggleModal(0)}
                    type="button"
                    tabIndex="0"
                    className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-sm leading-none py-[0.9375rem] px-[1.25rem]"
                    data-testid="login-link"
                    data-test="login-link"
                    data-analytics="global-navbar-signin-button"
                    data-button-root=""
                  >
                    SIGN IN
                  </button>{" "}
                  <button
                    onClick={() => toggleModal(1)}
                    type="button"
                    tabIndex="0"
                    className="text-[#121826] next-register rounded-2xl inline-flex relative items-center gap-2 justify-center font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-[#0ee182] betterhover:hover:bg-blue-600 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.5rem] px-[1.25rem]"
                    data-testid="register-link"
                    data-test="register-link"
                    data-analytics="global-navbar-register-button"
                    data-content=""
                    data-button-root=""
                  >
                    REGISTER
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    tabIndex="0"
                    className="inline-flex relative items-center  ml-2 gap-2 justify-center rounded-full font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] text-white betterhover:hover:bg-blue-600 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.5rem] px-[0.5rem]"
                    data-testid="register-link"
                    data-test="register-link"
                    data-analytics="global-navbar-register-button"
                    data-content=""
                    data-button-root=""
                  >
                    <MdNotifications className="w-[24px] h-[24px]" />
                  </button>
                  <button
                    type="button"
                    tabIndex="0"
                    className="inline-flex relative items-center  ml-2 gap-2 justify-center rounded-full font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] text-white betterhover:hover:bg-blue-600 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.5rem] px-[0.5rem]"
                    data-testid="register-link"
                    data-test="register-link"
                    data-analytics="global-navbar-register-button"
                    data-content=""
                    data-button-root=""
                  >
                    <FaUser className="w-[24px] h-[24px]" />
                  </button>
                </>
              )}
              <button
                onClick={toggleRightbar}
                type="button"
                tabIndex="0"
                className="hidden md:block inline-flex relative items-center  ml-2 gap-2 justify-center rounded-full font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] text-white betterhover:hover:bg-blue-600 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.5rem] px-[0.5rem]"
                data-testid="register-link"
                data-test="register-link"
                data-analytics="global-navbar-register-button"
                data-content=""
                data-button-root=""
              >
                <MessageCircleMore className="w-[24px] h-[24px]" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>{" "}
    <SearchModal />
  </div>
  );
}
