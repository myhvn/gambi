"use client";
import "@/styles/mobilefooter.css"
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "@/context/app";

export default function Mobilefooter() {
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

  if (width > 768) {
    return null;
  }

  return (
    <div
      id="mobile-footer"
      data-layout=""
      className="wrap next-7mnbdr"
      style={{ zIndex: 1300 }}
    >
      <div
        className="button-wrap next-1wl0aiq"
        data-analytics="mobile-navbar-browser"
      >
        <button
          type="button"
          tabIndex="0"
          className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-xs leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white button"
          data-button-root=""
          onClick={toggleSidebar}
        >
          <div className="content next-1wl0aiq">
            {" "}
            <div className="mobile-icon-style next-1wl0aiq">
              <svg fill="currentColor" viewBox="0 0 64 64" className="svg-icon ">
                {" "}
                <title></title>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0h23.867c-3.947 3.173-7.014 7.333-8.827 12.107H0V0Zm0 51.867h41.707v12.106H0V51.867Zm13.36-25.92H0v12.106h17.867a28.537 28.537 0 0 1-4.48-12.106h-.027ZM57.014 38.32l6.987 10.96-8.08 5.173-7.12-11.146c-2.24.773-4.64 1.2-7.12 1.2-12.24 0-22.187-9.947-22.187-22.187 0-12.24 9.947-22.187 22.187-22.187 12.24 0 22.187 9.947 22.187 22.187 0 6.293-2.64 11.947-6.854 16ZM41.681 9.733c-6.933 0-12.587 5.654-12.587 12.587s5.654 12.587 12.587 12.587 12.587-5.654 12.587-12.587S48.614 9.733 41.68 9.733Z"
                ></path>
              </svg>
            </div>{" "}
            <span>Gözat</span>
          </div>
        </button>
      </div>{" "}
      <div
        className="button-wrap next-1wl0aiq active"
        data-analytics="mobile-navbar-casino-link"
      >
        <button
          type="button"
          tabIndex="0"
          className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-xs leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white button"
          data-button-root=""
        >
          <div className="content next-1wl0aiq">
            {" "}
            <div className="mobile-icon-style next-1wl0aiq active">
              <svg fill="currentColor" viewBox="0 0 64 64" className="svg-icon ">
                {" "}
                <title></title>{" "}
                <path d="M12.265 47.726.21 14.603a3.574 3.574 0 0 1 2.108-4.553l.024-.007 19.282-7.015a3.55 3.55 0 0 1 4.553 2.082l.008.024.694 1.92L12.69 46.073a8.9 8.9 0 0 0-.418 1.598l-.008.056ZM63.79 15.511 48.002 58.93a3.529 3.529 0 0 1-4.558 2.1l.024.009-21.948-8.001a3.58 3.58 0 0 1-2.124-4.585l-.008.024 15.787-43.39a3.555 3.555 0 0 1 4.559-2.126l-.024-.008 21.948 8a3.58 3.58 0 0 1 2.124 4.585l.008-.024v-.002ZM50.457 32.685l-1.386-3.254a1.789 1.789 0 0 0-2.333-.956l.012-.004-2.666 1.174a1.787 1.787 0 0 1-2.316-.948l-.004-.012-1.146-2.667a1.764 1.764 0 0 0-2.332-.93l.012-.004-3.28 1.386a1.738 1.738 0 0 0-.929 2.33l-.004-.01 3.92 9.255a1.816 1.816 0 0 0 2.359.928l-.012.005 9.227-3.947a1.737 1.737 0 0 0 .794-2.356l.004.01h.08Z"></path>
              </svg>
            </div>{" "}
            <span>Casino</span>
          </div>
        </button>
      </div>{" "}
      <div
        className="button-wrap next-1wl0aiq"
        data-analytics="mobile-navbar-betlist-board"
      >
        <button
          type="button"
          tabIndex="0"
          className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-xs leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white button"
          data-button-root=""
        >
          <div className="content next-1wl0aiq">
            {" "}
            <div className="mobile-icon-style next-1wl0aiq">
              <svg fill="currentColor" viewBox="0 0 64 64" className="svg-icon ">
                {" "}
                <title></title>{" "}
                <path d="M59.732 0H4.266A4.266 4.266 0 0 0 0 4.266V60c0 2.21 1.79 4 4 4h56c2.21 0 4-1.79 4-4V4.266A4.266 4.266 0 0 0 59.734 0h-.002ZM17.998 50.24l-8-8 4.266-4.266 3.866 3.894 9.734-9.866 4.266 4.266L17.998 50.24Zm0-20-8-8 4.134-4.374 3.866 3.894 9.866-9.894 4.266 4.266L17.998 30.24Zm36 14.774h-14v-6.026h14v6.026Zm0-20h-14v-6.026h14v6.026Z"></path>
              </svg>
            </div>{" "}
            <span>Bahisler</span>
          </div>
        </button>
      </div>{" "}
      <div
        className="button-wrap next-1wl0aiq"
        data-analytics="mobile-navbar-sports-link"
      >
        <button
          type="button"
          tabIndex="0"
          className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-xs leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white button"
          data-button-root=""
        >
          <div className="content next-1wl0aiq">
            {" "}
            <div className="mobile-icon-style next-1wl0aiq">
              <svg fill="currentColor" viewBox="0 0 96 96" className="svg-icon ">
                {" "}
                <title></title>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.287 13.917c16.599 6.854 30.869 15.965 43.231 27.143l-.001.002.126.11-.125-.112C64.262 31 65.501 17.31 60.63 1.865 56.773.739 52.34.092 47.758.092c-13.046 0-24.87 5.249-33.47 13.748v.077Zm79.997 46.514a46.803 46.803 0 0 1-7.907 15.996v-.003c-2.275-3.87-4.709-7.622-7.185-11.295l-.137.08c4.463-2.823 9.63-4.63 15.307-5.11l-.078.332ZM80.986 82.734c-4.75 4.553-10.46 8.116-17.124 10.458h-.003l.006-.108a38.977 38.977 0 0 1 9.137-22.842l-.281-.41c2.838 3.924 5.478 8.005 8.265 12.902Zm0 0 .016-.014-.015.015ZM12.017 64.772a83.99 83.99 0 0 0 9.697.599h.003l-.117-.006c.832.039 1.674.06 2.518.06 12.98 0 24.848-4.766 33.883-12.589a132.455 132.455 0 0 1 9.859 11.137 47.738 47.738 0 0 0-11.975 31.216l.284-.042c-2.68.49-5.44.751-8.269.76-21.022-.012-38.88-13.566-45.416-32.75 3.102.685 6.287 1.224 9.931 1.654l-.398-.039Zm-9.533-1.614c-.226-.05-.45-.1-.675-.152l.667.129.008.023Zm65.376.815.045-.051-.045.05ZM58 52.836l-.009-.009.01.01Zm-5.59-5.706A140.354 140.354 0 0 0 9.776 20.677l-.952-.332C3.305 28.021 0 37.61 0 47.97v.038c.018 2.3.192 4.539.512 6.733l-.033-.266c3.542.97 7.889 1.823 12.325 2.386l.488.05c16.526 1.797 30.138-1.637 39.12-9.78Zm21.58 11.182a149.73 149.73 0 0 0-10.601-11.7c7.864-10.897 10.059-25.19 6.466-41.155l.267.126C85.46 13.537 95.953 29.542 96 48.007c0 .604-.048 1.247-.097 1.904-.051.688-.104 1.393-.104 2.087h-.042c-8.002.159-15.445 2.596-21.552 6.586l-.215-.272Zm-10.601-11.7-.003-.003.003.003Z"
                ></path>
              </svg>
            </div>{" "}
            <span>Spor</span>
          </div>
        </button>
      </div>{" "}
      <div
        className="button-wrap next-1wl0aiq"
        data-analytics="mobile-navbar-chat"
      >
        <button
          type="button"
          tabIndex="0"
          className="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-xs leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white button"
          aria-label="mobile chat toggle button"
          data-button-root=""
          onClick={toggleRightbar}
        >
          <div className="content next-1wl0aiq">
            {" "}
            <div className="mobile-icon-style next-1wl0aiq">
              <svg fill="currentColor" viewBox="0 0 64 64" className="svg-icon ">
                {" "}
                <title></title>{" "}
                <path d="M32 1.916c-.288-.01-.628-.016-.97-.016C14.254 1.9.586 15.206.002 31.84L0 31.894A28.655 28.655 0 0 0 7.476 51.15l-.02-.024c-.688 4.028-1.89 7.636-3.552 10.974l.102-.228c4.634-.396 8.878-1.73 12.654-3.81l-.164.082c4.474 2.35 9.774 3.728 15.398 3.728h.112H32c.3.01.654.016 1.008.016 16.768 0 30.428-13.31 30.99-29.942l.002-.052C63.414 15.206 49.746 1.902 32.97 1.902c-.342 0-.68.006-1.018.016l.05-.002H32ZM16.138 37.604a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Zm15.862 0a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Zm15.862 0a5.948 5.948 0 1 1 0-11.896 5.948 5.948 0 0 1 0 11.896Z"></path>
              </svg>
            </div>{" "}
            <span>Sohbet</span>
          </div>
        </button>
      </div>
    </div>
  );
}
