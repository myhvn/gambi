"use client";
import "@/styles/rightbar.css";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "@/context/app";
import { Bitcoin } from "@/components/icons";

const messages = [
  {
    type: "normal",
    date: "18.06.2024 13:56",
    username: "Dougles",
    text: "xd",
    userImage: "images/badges/rank1.webp",
  },
  {
    type: "normal",
    date: "18.06.2024 14:00",
    username: "Dark",
    text: "Hello, everyone!",
    userImage: "images/badges/rank2.webp",
  },
  {
    type: "normal",
    date: "18.06.2024 14:00",
    username: "Dougles",
    text: "Hello, everyone!",
    userImage: "images/badges/rank2.webp",
  },
  {
    type: "win",
    date: "18.06.2024 14:05",
    username: "Dougles",
    text: "null",
    userImage: "images/badges/rank3.webp",
    game: "images/slot/sweet-bonanza.jpg",
    gameName: "Sweet Bonanza",
    bet: 0.2515999,
    win: 13.837999,
    multiplier: 55.0,
    icon: Bitcoin,
  },
  {
    type: "normal",
    date: "18.06.2024 14:00",
    username: "Dark",
    text: "Hello, everyone!",
    userImage: "images/badges/rank2.webp",
  },
  {
    type: "coupon",
    date: "18.06.2024 14:05",
    username: "Dougles",
    text: "null",
    userImage: "images/badges/rank3.webp",
    count: 4,
    rate: 38,
    payout: 54.54899,
    stake: 12.32,
  },
];

export default function Rightbar() {
  const [messageText, setMessageText] = useState("");
  const maxCharacters = 160;
  const {
    width,
    isSidebarOpen,
    toggleSidebar,
    sideBarName,
    isRightbarOpen,
    toggleRightbar,
    rightBarName,
    getRightBarName,
  } = useContext(AppContext);
  const getDynamicWidth = (rightBarName) => {
    switch (rightBarName) {
      case "desktop":
        return "370px";
      case "tablet":
        return "320px";
      case "mobile":
        return "100%";
      default:
        return "370px";
    }
  };

  const [shouldRender, setShouldRender] = useState(isRightbarOpen);
  const [_width, _setWidth] = useState('0px');

  useEffect(() => {
    let timeoutId;
    if (isRightbarOpen) {
      setShouldRender(true);
      setTimeout(() => {
        _setWidth(getDynamicWidth(rightBarName));
      }, 10);
    } else {
      _setWidth('0px');
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }

    return () => clearTimeout(timeoutId);
  }, [isRightbarOpen, rightBarName]);

  if (!shouldRender && _width === '0px') {
    return null;
  }

  const truncateUsername = (username) => {
    if (username.length > 6) {
      return `${username.substring(0, 6)}...`;
    }
    return username;
  };

  const MessageComponent = ({ message }) => {
    switch (message.type) {
      case "normal":
        return (
          <div className="d-message wrap nextjs-1cy824e">
            <div className="content nextjs-1cy824e">
              <p className="weight-normal line-height-default align-left size-default text-size-default variant-highlighted nextjs-17v69ua">
                <div className="wrap nextjs-z6sq38">
                  <div className="user-tags nextjs-smmarv">
                    <span className="nextjs-smmarv">
                      <div className="hoverable nextjs-bbyuql">
                        <span className="wrap nextjs-nc081s">
                          <img
                            width={18}
                            height={18}
                            src={message.userImage}
                            alt={`${message.username}'s badge`}
                          />
                        </span>
                      </div>
                    </span>
                    <button
                      type="button"
                      tabIndex="0"
                      className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none text-sm leading-normal"
                      data-analytics="global-betsBoard-user-button"
                      data-button-root=""
                    >
                      {message.username}
                    </button>
                  </div>
                </div>
                : {message.text}
              </p>
            </div>
          </div>
        );

      case "win":
        return (
          <div className="d-message win-message">
            <div className="win-label">
              <div className="flex">
                <img
                  width={18}
                  height={18}
                  src={message.userImage}
                  alt={`${message.username}'s badge`}
                  className="rotated-image"
                />
                <span className="mr-1 mt-1">
                  {truncateUsername(message.username)} Slot Win
                </span>
              </div>
            </div>
            <div className="win-content">
              <img
                src={message.game}
                alt={message.gameName}
                className="game-image"
              />
              <div className="win-details">
                <p>
                  Bets: {message.bet.toFixed(6)}{" "}
                  <span className="coin-icon">
                    <message.icon className="svg-icon" />
                  </span>
                </p>
                <p>
                  Win: {message.win.toFixed(6)}{" "}
                  <span className="coin-icon">
                    <message.icon className="svg-icon" />
                  </span>
                </p>
                <p className="multiplier">{message.multiplier.toFixed(2)}x</p>
              </div>
            </div>
          </div>
        );

      case "coupon":
        return (
          <div className="d-message coupon-message">
            <div className="coupon-label">
              <div className="flex">
                <img
                  width={18}
                  height={18}
                  src={message.userImage}
                  alt={`${message.username}'s badge`}
                  className="rotated-image"
                />
                <span className="mr-1 mt-1">
                  {truncateUsername(message.username)} Coupon
                </span>
              </div>
            </div>
            <div className="coupon-content">
              <div className="win-details">
                <p className="!mb-4">{message.date}</p>
                <p className="!mb-4">
                  {message.count} Match
                  <span className="ml-4">{message.rate.toFixed(2)}</span>
                </p>
                <p>
                  <span className="coin-icon brown"></span>
                  Est. Payout: {message.payout.toFixed(8)}{" "}
                </p>
                <p>
                  <span className="coin-icon green"></span>
                  Total Stake: {message.stake.toFixed(8)}{" "}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };


  const handleInputChange = (e) => {
    if (e.target.value.length <= maxCharacters) {
      setMessageText(e.target.value);
    }
  };

  return (
    <div
      data-layout=""
      id="right-sidebar"
      className={`right-sidebar sidebar ${rightBarName} next-77505k ${isRightbarOpen ? 'opening' : 'closing'}`}
      style={{
        "--z-index": 900,
        "--header-height": "60px",
        "--width": _width,
      }}
    >
      <div className="content next-77505k">
        <div className="header next-1g9csv6">
          <div className="dropdown next-1iau4lg transparent">
            <button
              type="button"
              tabIndex="0"
              className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white"
              spacing="normal"
              aria-label="Open Dropdown"
              data-button-root=""
            >
              <svg fill="none" viewBox="0 0 96 96" className="svg-icon ">
                {" "}
                <title></title>{" "}
                <path
                  d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48Z"
                  fill="#F0F0F0"
                ></path>
                <path
                  d="M9.922 18.777a47.826 47.826 0 0 0-8.268 16.702h24.97L9.923 18.777Zm84.424 16.702a47.829 47.829 0 0 0-8.269-16.702L69.376 35.479h24.97ZM1.654 60.522a47.83 47.83 0 0 0 8.268 16.702l16.702-16.702H1.654ZM77.223 9.923a47.828 47.828 0 0 0-16.701-8.27v24.971L77.223 9.923ZM18.777 86.077a47.828 47.828 0 0 0 16.701 8.27V69.375L18.777 86.077ZM35.478 1.654a47.83 47.83 0 0 0-16.701 8.268l16.701 16.702V1.654Zm25.044 92.692a47.83 47.83 0 0 0 16.701-8.269L60.522 69.376v24.97Zm8.854-33.824 16.701 16.702a47.827 47.827 0 0 0 8.27-16.702H69.375Z"
                  fill="#0052B4"
                ></path>
                <path
                  d="M95.594 41.74H54.26V.405a48.48 48.48 0 0 0-12.522 0V41.74H.406a48.48 48.48 0 0 0 0 12.522H41.74v41.333a48.478 48.478 0 0 0 12.522 0V54.26h41.333a48.478 48.478 0 0 0 0-12.522Z"
                  fill="#D80027"
                ></path>
                <path
                  d="m60.522 60.522 21.42 21.42a48.176 48.176 0 0 0 2.82-3.082L66.426 60.522h-5.903Zm-25.044 0-21.42 21.42a48.148 48.148 0 0 0 3.082 2.82l18.338-18.338v-5.902Zm0-25.043-21.42-21.42a48.148 48.148 0 0 0-2.82 3.081l18.338 18.338h5.902Zm25.044 0 21.42-21.42a48.114 48.114 0 0 0-3.082-2.821L60.522 29.576v5.903Z"
                  fill="#D80027"
                ></path>
              </svg>{" "}
              <span>Gambi: English</span>{" "}
              <svg
                fill="currentColor"
                viewBox="0 0 64 64"
                className="svg-icon "
                style={{
                  transform: "rotate(0deg)",
                }}
              >
                {" "}
                <title></title>{" "}
                <path d="M32.271 49.763 9.201 26.692l6.928-6.93 16.145 16.145 16.144-16.144 6.93 6.929-23.072 23.07h-.005Z"></path>
              </svg>{" "}
            </button>{" "}
          </div>{" "}
          <div className="right-header next-1g9csv6">
            {" "}
            <div className="hoverable next-bbyuql">
              <button
                type="button"
                tabIndex="0"
                className="inline-flex relative items-center gap-2 justify-center font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-900 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] rounded-full"
                data-analytics="popout-chat-button"
                data-button-root=""
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 64 64"
                  className="svg-icon "
                >
                  {" "}
                  <title>Açılır Pencerede Sohbet</title>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z"
                  ></path>
                </svg>
              </button>{" "}
            </div>{" "}
            <div className="hoverable next-bbyuql">
              <button
                onClick={toggleRightbar}
                type="button"
                tabIndex="0"
                className="inline-flex relative items-center gap-2 justify-center font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-900 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] rounded-full"
                aria-label="Close Right Sidebar"
                data-button-root=""
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 64 64"
                  className="svg-icon "
                >
                  {" "}
                  <title></title>{" "}
                  <path d="m54.827 16.187-7.014-7.014L32 24.987 16.187 9.173l-7.014 7.014L24.987 32 9.173 47.813l7.014 7.014L32 39.013l15.813 15.814 7.014-7.014L39.013 32l15.814-15.813Z"></path>
                </svg>
              </button>{" "}
            </div>
          </div>
        </div>{" "}
        <div className="messages next-1g9csv6">
          <div className="message-content scrollY nextjs-g1f16q">
            {messages.map((message, index) => (
              <MessageComponent key={index} message={message} />
            ))}
          </div>
        </div>{" "}
        <div className="footer next-1g9csv6">
          {" "}
          <div className="chat-input next-15zhun5">
            <div className="ctainer next-771rdx">
              <textarea
                className="scrollY with-button next-771rdx"
                placeholder="Mesajınızı yazın"
                value={messageText}
                onChange={handleInputChange}
              ></textarea>{" "}
              <div className="input-button-wrap next-771rdx">
                <button
                  type="button"
                  tabIndex="0"
                  className="inline-flex relative items-center gap-2 justify-center font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-xs leading-none py-[0.75rem] px-[0.75rem] rounded-full"
                  data-button-root=""
                  style={{
                    padding: "var(--space-2)",
                    fontSize: "var(--text-size-base)",
                    borderRadius: "var(--space-1)",
                  }}
                >
                  😀
                </button>
              </div>
            </div>
          </div>{" "}
          <span className="online next-fspnwy">
            <div className="scale-up next-tgp09d is-relative"></div>{" "}
            <span className="ml-1  weight-semibold line-height-default is-inline align-left size-sm text-size-sm variant-subtle with-icon-space next-17v69ua">
              <span>Online: </span>
              <span className="weight-semibold line-height-default align-left size-sm text-size-sm variant-subtle numeric with-icon-space next-17v69ua">
                0
              </span>
            </span>
          </span>{" "}
          <div className="actions next-49slp7">
            <span className="weight-semibold line-height-default align-left size-sm text-size-sm variant-subtle with-icon-space next-17v69ua">
              {maxCharacters - messageText.length}
            </span>{" "}
            <button
              type="button"
              tabIndex="0"
              className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-grey-400 text-white betterhover:hover:bg-grey-300 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]"
              data-button-root=""
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
                  d="M22.8 8.547h36.774c0 .028.026.054.026.054h-.016a6.75 6.75 0 0 0-6.384 6.586v33.04l-.002-.02a6.8 6.8 0 0 1-6.786 7.246 6.8 6.8 0 0 1-6.786-7.226v-3.094H16V15.347a6.8 6.8 0 0 1 6.8-6.8Zm-.828 27.894h15.494V31.8H21.972v4.64Zm.002-12.4h24.8V19.4h-24.8v4.64Zm38.052-13.574h-.052A3.974 3.974 0 0 0 56 14.44v6.426h8V14.44a3.974 3.974 0 0 0-3.974-3.974ZM36.8 48.256H0a6.8 6.8 0 0 0 6.8 6.8h34.026c-2.694 0-4.026-3.04-4.026-6.8Z"
                ></path>
              </svg>
            </button>{" "}
            <button
              type="button"
              tabIndex="0"
              className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-green-500 text-neutral-black betterhover:hover:bg-green-400 betterhover:hover:text-neutral-black focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]"
              data-button-root=""
            >
              {" "}
              <div data-loader-content="" className="contents">
                Send
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
