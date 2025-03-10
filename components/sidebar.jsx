"use client";
import "@/styles/sidebar.css";
import React, { useState, useContext } from "react";
import { AppContext } from "@/context/app";
import {
  Home,
  SlotPopularGames,
  SlotNewGames,
  SlotFreespinGames,
  SlotJackpotGames,
  SlotBonusbuyGames,
  LiveTableGames,
  LiveRouletteGames,
  LiveBlackjackGames,
  LivePokerGames,
  SportLiveGames,
  SportUpcomingGames,
  GambiOriginals,
  OtherVip,
  OtherPromotion,
  LiveSupport,
  Language,
  Slot,
  Lobby,
  SlotInstantWinGames,
  SlotEnchancedRTPGames,
  Live,
  LiveBaccaratGames,
  SportAmericanFootball,
  SportBaseball,
  SportBasketball,
  SportFootball,
  SportIceHockey,
  SportMMA,
  SportTableTennis,
  SportTennis,
  SportVolleyball,
  Sport,
  Empty,
  PromotionRace,
  PromotionWeekly,
  LanguageEnglish,
  LanguageTurkish,
  FortuneWheel,
} from "@/components/icons";

const sidebar_slot_links = [
  {
    label: "Popular Games",
    icon: SlotPopularGames,
    active: false,
  },
  {
    label: "New Releases",
    icon: SlotNewGames,
    active: false,
  },
  {
    label: "Free Spins",
    icon: SlotFreespinGames,
    active: false,
  },
  {
    label: "Jackpot Games",
    icon: SlotJackpotGames,
    active: false,
  },
  {
    label: "Bonus Buy",
    icon: SlotBonusbuyGames,
    active: false,
  },
];

const sidebar_live_links = [
  {
    label: "Table Games",
    icon: LiveTableGames,
    active: false,
  },
  {
    label: "Roulette Games",
    icon: LiveRouletteGames,
    active: false,
  },
  {
    label: "Blackjack Games",
    icon: LiveBlackjackGames,
    active: false,
  },
  {
    label: "Poker Games",
    icon: LivePokerGames,
    active: false,
  },
];

const sidebar_sport_links = [
  {
    label: "Live Games",
    icon: SportLiveGames,
    active: false,
  },
  {
    label: "Upcoming Games",
    icon: SportUpcomingGames,
    active: false,
  },
];

const sidebar_other_links = [
  {
    label: "Vip Club",
    icon: OtherVip,
    active: false,
  },
  {
    label: "Promotions",
    icon: OtherPromotion,
    active: false,
  },
];

const sidebar_dropdowns = {
  slot: {
    label: "Slot",
    icon: Slot,
    alts: [
      {
        label: "Lobby",
        icon: Lobby,
      },
      {
        label: "Popular Games",
        icon: SlotPopularGames,
      },
      {
        label: "New Releases",
        icon: SlotNewGames,
      },
      {
        label: "Free Spins",
        icon: SlotFreespinGames,
      },
      {
        label: "Enhanced RTP",
        icon: SlotEnchancedRTPGames,
      },
      {
        label: "Instant Win",
        icon: SlotInstantWinGames,
      },
      {
        label: "Jackpot Games",
        icon: SlotJackpotGames,
      },
      {
        label: "Bonus Buy",
        icon: SlotBonusbuyGames,
      },
    ],
  },
  live: {
    label: "Live Casino",
    icon: Live,
    alts: [
      {
        label: "Table Games",
        icon: LiveTableGames,
      },
      {
        label: "Roulette",
        icon: LiveRouletteGames,
      },
      {
        label: "LiveBaccaratGames",
        icon: LiveBaccaratGames,
      },
      {
        label: "Blackjack",
        icon: LiveBlackjackGames,
      },
      {
        label: "Poker",
        icon: LivePokerGames,
      },
    ],
  },
  sport: {
    label: "Sports",
    icon: Sport,
    alts: [
      {
        label: "Football",
        icon: SportFootball,
      },
      {
        label: "Basketball",
        icon: SportBasketball,
      },
      {
        label: "Volleyball",
        icon: SportVolleyball,
      },
      {
        label: "American Football",
        icon: SportAmericanFootball,
      },
      {
        label: "Baseball",
        icon: SportBaseball,
      },
      {
        label: "Tennis",
        icon: SportTennis,
      },
      {
        label: "Table Tennis",
        icon: SportTableTennis,
      },
      {
        label: "MMA",
        icon: SportMMA,
      },
      {
        label: "Ice Hockey",
        icon: SportIceHockey,
      },
    ],
  },
  promotion: {
    label: "Promotions",
    icon: OtherPromotion,
    alts: [
      {
        label: "100K Race-24 Hours",
        icon: PromotionRace,
      },
      {
        label: "75K Weekly Raffle",
        icon: PromotionWeekly,
      },
    ],
  },
  language: {
    label: "Language",
    icon: Language,
    alts: [
      {
        label: "English",
        icon: LanguageEnglish,
      },
      {
        label: "Turkish",
        icon: LanguageTurkish,
      },
    ],
  },
};

const IconLink = ({ IconComponent, className }) => (
  <IconComponent className={className} />
);

const SidebarDropdown = ({ dropdownObject }) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div id="profile" className="sidebar-accordion next-st4gv1">
      <div className="accordion next-1womt0u accordion-stacked">
        <div className="header next-1womt0u header-stacked">
          <button
            onClick={toggle}
            type="button"
            tabIndex="0"
            className="relative gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] flex justify-between items-center w-full !translate-x-0 rounded-sm"
            aria-label="Show Content"
            data-button-root=""
          >
            <div className="header-title next-1womt0u">
              <span
                className="sidebar-accordion-title next-st4gv1"
                slot="title"
              >
                <IconLink
                  IconComponent={dropdownObject.icon}
                  className="svg-icon svg-disable"
                />
                <span
                  style={{
                    maxWidth: "100%",
                    display: "block",
                  }}
                  className="next-17o987 is-truncate"
                >
                  {dropdownObject.label}
                </span>
              </span>
            </div>
            <div className="next-1womt000 flex w-4 h-4 -my-1 rounded-full items-center justify-center text-xs bg-grey-300 bg-opacity-50 next-1womt0u">
              <svg
                fill="currentColor"
                viewBox="0 0 64 64"
                className="svg-icon "
                style={{
                  transform: `rotate(${isOpen ? "0deg" : "270deg"})`,
                  color: "var(--color-neutral-white)",
                  marginRight: "0",
                }}
              >
                <title></title>
                <path d="M32.271 49.763 9.201 26.692l6.928-6.93 16.145 16.145 16.144-16.144 6.93 6.929-23.072 23.07h-.005Z"></path>
              </svg>
            </div>
          </button>
        </div>
        <div
          className={`content next-1womt0u render-content ${
            isOpen ? "content-stacked-open" : ""
          }`}
        >
          {isOpen ? (
            <div className="line-wrapper next-1sfce85">
              <hr className="next-1sfce85" />
            </div>
          ) : null}
          <div className="sidebar-content next-1womt001">
            {dropdownObject.alts.map((object) => (
              <button
                key={object.label}
                type="button"
                tabIndex="0"
                className="inline-flex relative items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full justify-start max-w-full rounded-none"
                data-analytics="sidebar-profile-wallet-button"
                data-button-root=""
              >
                <IconLink
                  IconComponent={object.icon}
                  className="svg-icon svg-disable"
                />
                <span
                  style={{
                    maxWidth: "100%",
                    display: "block",
                  }}
                  className="next-17o987 is-truncate"
                >
                  {object.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Sidebar() {
  const { width, isSidebarOpen, toggleSidebar, sideBarName } =
    useContext(AppContext);

  if (width < 768 && !isSidebarOpen) {
    return null;
  }

  if (width < 768 && isSidebarOpen) {
    return (
      <div
        data-nosnippet=""
        data-layout=""
        data-test="left-sidebar"
        className="sidebar fullsize next-12qp7by"
        style={{
          "--z-index": 900,
          "--header-height": "60px",
          "--width": "240px",
        }}
      >
        <div>
          <div className="search-wrap next-12b0zpm">
            <div className="input-wrap next-17iva6n mobile">
              <div className="search-icon next-17iva6n">
                <svg
                  fill="currentColor"
                  viewBox="0 0 64 64"
                  className="svg-icon "
                >
                  <title></title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.266 3.893a23.1 23.1 0 1 1 25.668 38.414A23.1 23.1 0 0 1 10.266 3.893Zm5.112 30.764a13.9 13.9 0 1 0 15.444-23.114 13.9 13.9 0 0 0-15.444 23.114ZM38.55 46.33a28.002 28.002 0 0 0 7.78-7.78L64 56.22 56.22 64 38.55 46.33Z"
                  ></path>
                </svg>
              </div>
              <input
                data-testid="search"
                data-analytics="undefined mobile search"
                placeholder="Oyun Arayın"
                className="next-17iva6n"
              />
            </div>
          </div>
        </div>
        <div className="header-buttons next-1hvoy0v">
          <a
            className="header-button casino mobile next-jby8ge"
            data-sveltekit-preload-data="hover"
            data-test="header-casino-link"
            data-analytics="header-casino-link"
            draggable="false"
            href="/tr/casino/home"
          >
            <span>CASINO</span>
          </a>
          <div className="image-loader next-jby8ge"></div>
          <a
            className="header-button sports mobile next-jby8ge"
            data-sveltekit-preload-data="hover"
            data-test="header-sports-link"
            data-analytics="header-sports-link"
            draggable="false"
            href="/tr/sports/home"
          >
            <span>SPORTS</span>
          </a>
          <div className="image-loader next-jby8ge"></div>
        </div>
        <div className="content next-12qp7by">
          <div
            className="inner-content scrollY scroll-contain scrollable-content next-12qp7by scrollable-content-mobile"
            data-block-touch-pan="true"
          >
            <div className="section-wrapper next-oc0lpzts">
              {" "}
              <a
                className="littleBox base-sidebar-anchor maxWidth25 w-full next-1ih38ux"
                data-sveltekit-reload="off"
                data-sveltekit-preload-data="off"
                href="/"
              >
                <button
                  type="button"
                  tabIndex="0"
                  className="inline-flex relative justify-center items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full rounded-sm justify-start max-w-full"
                  data-analytics="affiliate-link"
                  data-button-root=""
                >
                  <IconLink
                    IconComponent={Home}
                    className="svg-icon svg-disable"
                  />
                </button>
              </a>{" "}
              <a
                className="ml-2 littleBox base-sidebar-anchor max-w-full w-full next-1ih38ux"
                data-sveltekit-reload="off"
                data-sveltekit-preload-data="off"
                href="/"
              >
                <button
                  type="button"
                  tabIndex="0"
                  className="inline-flex relative justify-center items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full rounded-sm justify-start max-w-full"
                  data-analytics="affiliate-link"
                  data-button-root=""
                >
                  <IconLink
                    IconComponent={FortuneWheel}
                    className="svg-icon svg-disable"
                  />
                  <span
                    style={{
                      maxWidth: "100%",
                      display: "block",
                    }}
                    className="next-17o987 is-truncate"
                  >
                    Fortune Wheel
                  </span>{" "}
                </button>
              </a>{" "}
            </div>
            <div className="section-wrapper next-oc0lpz">
              {" "}
              <a
                className="base-sidebar-anchor max-w-full next-1ih38ux"
                data-sveltekit-reload="off"
                data-sveltekit-preload-data="off"
                href="/"
              >
                <button
                  type="button"
                  tabIndex="0"
                  className="inline-flex relative items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full rounded-sm justify-start max-w-full"
                  data-analytics="affiliate-link"
                  data-button-root=""
                >
                  <IconLink
                    IconComponent={GambiOriginals}
                    className="svg-icon svg-disable"
                  />
                  <span
                    style={{
                      maxWidth: "100%",
                      display: "block",
                    }}
                    className="next-17o987 is-truncate"
                  >
                    Gambi Originals
                  </span>{" "}
                </button>
              </a>{" "}
            </div>{" "}
            <div className="section-wrapper next-oc0lpz">
              <SidebarDropdown dropdownObject={sidebar_dropdowns.slot} />
            </div>
            <div className="section-wrapper next-oc0lpz">
              <SidebarDropdown dropdownObject={sidebar_dropdowns.live} />
            </div>
            <div className="section-wrapper next-oc0lpz">
              <SidebarDropdown dropdownObject={sidebar_dropdowns.sport} />
            </div>
            <div className="section-wrapper next-oc0lpz">
              <a
                className="base-sidebar-anchor max-w-full next-1ih38ux"
                data-sveltekit-reload="off"
                data-sveltekit-preload-data="off"
                href="/tr/vip-club"
              >
                <button
                  type="button"
                  tabIndex="0"
                  className="inline-flex relative items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full rounded-sm justify-start max-w-full"
                  data-analytics="vip-club-link"
                  data-button-root=""
                >
                  <IconLink
                    IconComponent={OtherVip}
                    className="svg-icon svg-disable"
                  />
                  <span
                    style={{
                      maxWidth: "100%",
                      display: "block",
                    }}
                    className="next-17o987 is-truncate"
                  >
                    VIP Club
                  </span>{" "}
                </button>
              </a>
              <SidebarDropdown dropdownObject={sidebar_dropdowns.promotion} />
            </div>
            <div className="section-wrapper next-oc0lpz">
              <a
                className="base-sidebar-anchor max-w-full next-1ih38ux"
                data-sveltekit-reload="off"
                data-sveltekit-preload-data="off"
                href="/tr/vip-club"
              >
                <button
                  type="button"
                  tabIndex="0"
                  className="inline-flex relative items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full rounded-sm justify-start max-w-full"
                  data-analytics="vip-club-link"
                  data-button-root=""
                >
                  <IconLink
                    IconComponent={LiveSupport}
                    className="svg-icon svg-disable"
                  />
                  <span
                    style={{
                      maxWidth: "100%",
                      display: "block",
                    }}
                    className="next-17o987 is-truncate"
                  >
                    Live Support
                  </span>{" "}
                </button>
              </a>
              <SidebarDropdown dropdownObject={sidebar_dropdowns.language} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isSidebarOpen ? (
        <div
          data-nosnippet=""
          data-layout=""
          data-test="left-sidebar"
          className={`sidebar ${sideBarName} next-1qc86l4`}
          style={{
            "--z-index": 900,
            "--header-height": "60px",
            "--width": "60px",
          }}
        >
          <div className="header next-1hoeywl collapsed">
            <button
              onClick={toggleSidebar}
              className="menu-button next-1hoeywl collapsed"
              aria-label="Toggle Sidebar"
              data-test="left-sidebar-close"
              data-analytics="left-sidebar-close-button"
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
                  d="M0 0h64v13H0V0Zm0 25.5h64v13H0v-13ZM64 51H0v13h64V51Z"
                ></path>
              </svg>
            </button>{" "}
            <div className="link-wrap next-1hoeywl collapsed">
              <a
                data-tooltip-id="tooltip"
                data-tooltip-content="Casino"
                className="header-button casino collapsed next-jby8ge"
                data-nextkit-preload-data="hover"
                data-test="header-casino-link"
                data-analytics="header-casino-link"
                draggable="false"
                href="/tr/casino/home"
              ></a>{" "}
              <div className="image-loader next-jby8ge"></div>{" "}
              <a
                data-tooltip-id="tooltip"
                data-tooltip-content="Sports"
                className="header-button sports collapsed next-jby8ge"
                data-nextkit-preload-data="hover"
                data-test="header-sports-link"
                data-analytics="header-sports-link"
                draggable="false"
                href="/tr/sports/home"
              ></a>{" "}
              <div className="image-loader next-jby8ge"></div>
            </div>
          </div>{" "}
          <div className="content next-1qc86l4">
            <div
              className="invisible-scrollbar overflow-x-hidden overflow-y-auto scrollable-content next-1qc86l4"
              data-block-touch-pan="true"
            >
              {" "}
              <div className="section-wrapper next-oc0lpz">
                <div className="hoverable next-bbyuql">
                  <a
                    className="base-sidebar-anchor max-w-full next-1ih38ux"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    href="/casino"
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Fortune Wheel"
                  >
                    <button
                      type="button"
                      tabIndex="0"
                      className="inline-flex relative gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white rounded-sm max-w-full w-11 h-11 p-1 items-center justify-center"
                      data-analytics="affiliate-link"
                      data-button-root=""
                    >
                      <IconLink
                        IconComponent={FortuneWheel}
                        className="svg-icon svg-disable svg-big"
                      />
                    </button>
                  </a>{" "}
                </div>
              </div>{" "}
              <div className="section-wrapper next-oc0lpz">
                <div className="hoverable next-bbyuql">
                  <a
                    className="base-sidebar-anchor max-w-full next-1ih38ux"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    href="/casino"
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Gambi Originals"
                  >
                    <button
                      type="button"
                      tabIndex="0"
                      className="inline-flex relative gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white rounded-sm max-w-full w-11 h-11 p-1 items-center justify-center"
                      data-analytics="affiliate-link"
                      data-button-root=""
                    >
                      <IconLink
                        IconComponent={GambiOriginals}
                        className="svg-icon svg-disable"
                      />
                    </button>
                  </a>{" "}
                </div>
              </div>{" "}
              <div className="section-wrapper next-oc0lpz">
                {sidebar_slot_links.map((link) => (
                  <div key={link.label} className="hoverable next-bbyuql">
                    <a
                      data-tooltip-id="tooltip"
                      data-tooltip-content={`${link.label}`}
                      className="base-sidebar-anchor max-w-full next-1ih38ux"
                      data-sveltekit-reload="off"
                      data-sveltekit-preload-data="off"
                      href="/"
                    >
                      <button
                        type="button"
                        tabIndex="0"
                        className="inline-flex relative gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white rounded-sm max-w-full w-11 h-11 p-1 items-center justify-center"
                        data-analytics="affiliate-link"
                        data-button-root=""
                      >
                        <IconLink
                          IconComponent={link.icon}
                          className={`svg-icon ${
                            link.active ? "svg-active" : "svg-disable"
                          }`}
                        />
                      </button>
                    </a>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
              <div className="section-wrapper next-oc0lpz">
                {sidebar_live_links.map((link) => (
                  <div key={link.label} className="hoverable next-bbyuql">
                    <a
                      data-tooltip-id="tooltip"
                      data-tooltip-content={`${link.label}`}
                      className="base-sidebar-anchor max-w-full next-1ih38ux"
                      data-sveltekit-reload="off"
                      data-sveltekit-preload-data="off"
                      href="/tr/affiliate"
                    >
                      <button
                        type="button"
                        tabIndex="0"
                        className="inline-flex relative gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white rounded-sm max-w-full w-11 h-11 p-1 items-center justify-center"
                        data-analytics="affiliate-link"
                        data-button-root=""
                      >
                        <IconLink
                          IconComponent={link.icon}
                          className={`svg-icon ${
                            link.active ? "svg-active" : "svg-disable"
                          }`}
                        />
                      </button>
                    </a>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
              <div className="section-wrapper next-oc0lpz">
                {sidebar_sport_links.map((link) => (
                  <div key={link.label} className="hoverable next-bbyuql">
                    <a
                      data-tooltip-id="tooltip"
                      data-tooltip-content={`${link.label}`}
                      className="base-sidebar-anchor max-w-full next-1ih38ux"
                      data-sveltekit-reload="off"
                      data-sveltekit-preload-data="off"
                      href="/tr/affiliate"
                    >
                      <button
                        type="button"
                        tabIndex="0"
                        className="inline-flex relative gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white rounded-sm max-w-full w-11 h-11 p-1 items-center justify-center"
                        data-analytics="affiliate-link"
                        data-button-root=""
                      >
                        <IconLink
                          IconComponent={link.icon}
                          className={`svg-icon ${
                            link.active ? "svg-active" : "svg-disable"
                          }`}
                        />
                      </button>
                    </a>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
              <div className="section-wrapper next-oc0lpz">
                {sidebar_other_links.map((link) => (
                  <div key={link.label} className="hoverable next-bbyuql">
                    <a
                      data-tooltip-id="tooltip"
                      data-tooltip-content={`${link.label}`}
                      className="base-sidebar-anchor max-w-full next-1ih38ux"
                      data-sveltekit-reload="off"
                      data-sveltekit-preload-data="off"
                      href="/tr/affiliate"
                    >
                      <button
                        type="button"
                        tabIndex="0"
                        className="inline-flex relative gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white rounded-sm max-w-full w-11 h-11 p-1 items-center justify-center"
                        data-analytics="affiliate-link"
                        data-button-root=""
                      >
                        <IconLink
                          IconComponent={link.icon}
                          className={`svg-icon ${
                            link.active ? "svg-active" : "svg-disable"
                          }`}
                        />
                      </button>
                    </a>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
              <div className="section-wrapper next-oc0lpz">
                <div className="hoverable next-bbyuql">
                  <a
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Live Support"
                    className="base-sidebar-anchor max-w-full next-1ih38ux"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    href="/tr/affiliate"
                  >
                    <button
                      type="button"
                      tabIndex="0"
                      className="inline-flex relative gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white rounded-sm max-w-full w-11 h-11 p-1 items-center justify-center"
                      data-analytics="affiliate-link"
                      data-button-root=""
                    >
                      <IconLink
                        IconComponent={LiveSupport}
                        className="svg-icon svg-disable"
                      />
                    </button>
                  </a>{" "}
                </div>
              </div>{" "}
              <div className="section-wrapper next-oc0lpz">
                <div className="hoverable next-bbyuql">
                  <a
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Language"
                    className="base-sidebar-anchor max-w-full next-1ih38ux"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    href="/tr/affiliate"
                  >
                    <button
                      type="button"
                      tabIndex="0"
                      className="inline-flex relative gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white rounded-sm max-w-full w-11 h-11 p-1 items-center justify-center"
                      data-analytics="affiliate-link"
                      data-button-root=""
                    >
                      <IconLink
                        IconComponent={Language}
                        className="svg-icon svg-disable"
                      />
                    </button>
                  </a>{" "}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      ) : (
        <div
          data-nosnippet=""
          data-layout=""
          data-test="left-sidebar"
          className={`sidebar ${sideBarName} next-12qp7by`}
          style={{
            "--z-index": 900,
            "--header-height": "60px",
            "--width": "240px",
          }}
        >
          <div className="header next-1hoeywl">
            <button
              onClick={toggleSidebar}
              className="menu-button next-1hoeywl"
              aria-label="Toggle Sidebar"
              data-test="left-sidebar-close"
              data-analytics="left-sidebar-close-button"
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
                  d="M0 0h64v13H0V0Zm0 25.5h64v13H0v-13ZM64 51H0v13h64V51Z"
                ></path>
              </svg>
            </button>{" "}
            <div className="link-wrap next-1hoeywl">
              <a
                className="header-button casino next-jby8ge"
                data-sveltekit-preload-data="hover"
                data-test="header-casino-link"
                data-analytics="header-casino-link"
                draggable="false"
                href="/tr/casino/home"
              >
                <span>CASINO</span>
              </a>{" "}
              <div className="image-loader next-jby8ge"></div>{" "}
              <a
                className="header-button sports next-jby8ge"
                data-sveltekit-preload-data="hover"
                data-test="header-sports-link"
                data-analytics="header-sports-link"
                draggable="false"
                href="/tr/sports/home"
              >
                <span>SPORTS</span>
              </a>{" "}
              <div className="image-loader next-jby8ge"></div>
            </div>
          </div>{" "}
          <div className="content next-12qp7by">
            <div
              className="inner-content invisible-scrollbar overflow-x-hidden overflow-y-auto scroll-contain scrollable-content next-12qp7by"
              data-block-touch-pan="true"
            >
              {" "}
              <div className="section-wrapper next-oc0lpzts">
                {" "}
                <a
                  className="littleBox base-sidebar-anchor maxWidth25 w-full next-1ih38ux"
                  data-sveltekit-reload="off"
                  data-sveltekit-preload-data="off"
                  href="/tr/affiliate"
                >
                  <button
                    type="button"
                    tabIndex="0"
                    className="inline-flex relative items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full rounded-sm justify-start max-w-full"
                    data-analytics="affiliate-link"
                    data-button-root=""
                  >
                    <IconLink
                      IconComponent={Home}
                      className="svg-icon svg-disable"
                    />
                  </button>
                </a>{" "}
                <a
                  className="ml-2 littleBox base-sidebar-anchor max-w-full w-full next-1ih38ux"
                  data-sveltekit-reload="off"
                  data-sveltekit-preload-data="off"
                  href="/tr/affiliate"
                >
                  <button
                    type="button"
                    tabIndex="0"
                    className="inline-flex relative items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full rounded-sm justify-start max-w-full"
                    data-analytics="affiliate-link"
                    data-button-root=""
                  >
                    <IconLink
                      IconComponent={FortuneWheel}
                      className="svg-icon svg-disable"
                    />
                    <span
                      style={{
                        maxWidth: "100%",
                        display: "block",
                      }}
                      className="next-17o987 is-truncate"
                    >
                      Fortune Wheel
                    </span>{" "}
                  </button>
                </a>{" "}
              </div>
              <div className="section-wrapper next-oc0lpz">
                {" "}
                <a
                  className="base-sidebar-anchor max-w-full next-1ih38ux"
                  data-sveltekit-reload="off"
                  data-sveltekit-preload-data="off"
                  href="/tr/affiliate"
                >
                  <button
                    type="button"
                    tabIndex="0"
                    className="inline-flex relative items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full rounded-sm justify-start max-w-full"
                    data-analytics="affiliate-link"
                    data-button-root=""
                  >
                    <IconLink
                      IconComponent={GambiOriginals}
                      className="svg-icon svg-disable"
                    />
                    <span
                      style={{
                        maxWidth: "100%",
                        display: "block",
                      }}
                      className="next-17o987 is-truncate"
                    >
                      Gambi Originals
                    </span>{" "}
                  </button>
                </a>{" "}
              </div>{" "}
              <div className="section-wrapper next-oc0lpz">
                <SidebarDropdown dropdownObject={sidebar_dropdowns.slot} />
              </div>
              <div className="section-wrapper next-oc0lpz">
                <SidebarDropdown dropdownObject={sidebar_dropdowns.live} />
              </div>
              <div className="section-wrapper next-oc0lpz">
                <SidebarDropdown dropdownObject={sidebar_dropdowns.sport} />
              </div>
              <div className="section-wrapper next-oc0lpz">
                <a
                  className="base-sidebar-anchor max-w-full next-1ih38ux"
                  data-sveltekit-reload="off"
                  data-sveltekit-preload-data="off"
                  href="/tr/vip-club"
                >
                  <button
                    type="button"
                    tabIndex="0"
                    className="inline-flex relative items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full rounded-sm justify-start max-w-full"
                    data-analytics="vip-club-link"
                    data-button-root=""
                  >
                    <IconLink
                      IconComponent={OtherVip}
                      className="svg-icon svg-disable"
                    />
                    <span
                      style={{
                        maxWidth: "100%",
                        display: "block",
                      }}
                      className="next-17o987 is-truncate"
                    >
                      VIP Club
                    </span>{" "}
                  </button>
                </a>
                <SidebarDropdown dropdownObject={sidebar_dropdowns.promotion} />
              </div>
              <div className="section-wrapper next-oc0lpz">
                <a
                  className="base-sidebar-anchor max-w-full next-1ih38ux"
                  data-sveltekit-reload="off"
                  data-sveltekit-preload-data="off"
                  href="/tr/vip-club"
                >
                  <button
                    type="button"
                    tabIndex="0"
                    className="inline-flex relative items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full rounded-sm justify-start max-w-full"
                    data-analytics="vip-club-link"
                    data-button-root=""
                  >
                    <IconLink
                      IconComponent={LiveSupport}
                      className="svg-icon svg-disable"
                    />
                    <span
                      style={{
                        maxWidth: "100%",
                        display: "block",
                      }}
                      className="next-17o987 is-truncate"
                    >
                      Live Support
                    </span>{" "}
                  </button>
                </a>
                <SidebarDropdown dropdownObject={sidebar_dropdowns.language} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
