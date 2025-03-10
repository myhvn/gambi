"use client";
import "@/styles/game.css";
import { Logo } from "@/components/icons";
import React, { useContext } from "react";
import { AppContext } from "@/context/app";
import { Live, Etherium, Tether, Slot } from "@/components/icons";
import Betsboard from "@/components/betsboard";
import Cardslider from "@/components/cardslider";
import Providerslider from "@/components/providerslider";

const cardsliderData = {
  title: "Recommend Slots",
  icon: "/images/titleicons/slots.svg",
  data: [
    {
      imgSrc: "/images/slot/sweet-bonanza.jpg",
      name: "Sweet Bonanza",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/slot/spartan-king.jpg",
      name: "Spartan King",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/slot/rise-of-pyramids.jpg",
      name: "Rise Of Pyramids",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/slot/madame-destiny.jpg",
      name: "Madame Destiny Megaways",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/slot/gates-of-olympus-1000.jpg",
      name: "Gates Of Olympus",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/slot/ice-lobster.jpg",
      name: "Ice Lobster",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/slot/heroic-spins.jpg",
      name: "Heroic Spins",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/slot/big-bass-day-at-the-races.jpg",
      name: "Big Bass Races",
      provider: "Pragmatic Play",
    },
  ],
};

const providersliderData = [
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
  { imgSrc: "/images/provider/netent.svg", name: "Netent" },
];

const betsboardData = [
  {
    gameIcon: Live,
    game: "Blackjack",
    player: "Dark",
    time: "23:23",
    bet: "0.50000000",
    betIcon: Etherium,
    multiplier: "2,00×",
    pay: "1.00000000",
    payIcon: Etherium,
  },
  {
    gameIcon: Slot,
    game: "Sweet Bonanza",
    player: "Dougles",
    time: "23:23",
    bet: "0.50000000",
    betIcon: Etherium,
    multiplier: "2,00×",
    pay: "1.00000000",
    payIcon: Etherium,
  },
  {
    gameIcon: Live,
    game: "Blackjack",
    player: "Dark",
    time: "23:23",
    bet: "0.50000000",
    betIcon: Etherium,
    multiplier: "2,00×",
    pay: "1.00000000",
    payIcon: Etherium,
  },
  {
    gameIcon: Slot,
    game: "Big Bass Bonanza",
    player: "Dougles",
    time: "23:23",
    bet: "0.50000000",
    betIcon: Tether,
    multiplier: "2,00×",
    pay: "1.00000000",
    payIcon: Tether,
  },
  {
    gameIcon: Live,
    game: "Blackjack",
    player: "Dark",
    time: "23:23",
    bet: "0.50000000",
    betIcon: Etherium,
    multiplier: "2,00×",
    pay: "1.00000000",
    payIcon: Etherium,
  },
  {
    gameIcon: Live,
    game: "Blackjack",
    player: "Dougles",
    time: "23:23",
    bet: "0.50000000",
    betIcon: Etherium,
    multiplier: "2,00×",
    pay: "1.00000000",
    payIcon: Etherium,
  },
  {
    gameIcon: Slot,
    game: "The Kraken 2",
    player: "Dark",
    time: "23:23",
    bet: "0.50000000",
    betIcon: Etherium,
    multiplier: "2,00×",
    pay: "1.00000000",
    payIcon: Etherium,
  },
  {
    gameIcon: Live,
    game: "Blackjack",
    player: "Dougles",
    time: "23:23",
    bet: "0.50000000",
    betIcon: Tether,
    multiplier: "2,00×",
    pay: "1.00000000",
    payIcon: Tether,
  },
  {
    gameIcon: Slot,
    game: "Gates Of Olympus 1000",
    player: "Dark",
    time: "23:23",
    bet: "0.50000000",
    betIcon: Etherium,
    multiplier: "2,00×",
    pay: "1.00000000",
    payIcon: Etherium,
  },
  {
    gameIcon: Live,
    game: "Blackjack",
    player: "Dougles",
    time: "23:23",
    bet: "0.50000000",
    betIcon: Tether,
    multiplier: "2,00×",
    pay: "1.00000000",
    payIcon: Tether,
  },
];

export default function GameContainer() {
  const { width } = useContext(AppContext);
  return (
    <>
      {width < 768 ? (
        <div>
          <div class="mobile-wrap next-1885le7">
            <div class="mobile-header next-16gzlnv">
              <div class="img-wrap next-16gzlnv">
                <img
                  loading="lazy"
                  src="https://mediumrare.imgix.net/a77d914f12935f85ca574c3b52989b13cb48901ab8c55bdf326e1f2a177cbd97?&amp;dpr=1&amp;format=auto&amp;auto=format&amp;q=70"
                  alt="Sweet Bonanza 1000"
                  width="280"
                  draggable="false"
                />
              </div>
              <div class="info-wrap next-16gzlnv">
                <div class="main-info next-16gzlnv">
                  <h1 class="weight-semibold line-height-default align-left size-md text-size-md variant-highlighted with-icon-space next-17v69ua">
                    Sweet Bonanza 1000
                  </h1>
                  <h2 class="weight-bold line-height-default align-left size-base text-size-base variant-subtle with-icon-space next-17v69ua">
                    <a
                      class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none text-sm leading-none"
                      href="/tr/casino/group/pragmatic-play"
                      data-sveltekit-reload="off"
                      data-sveltekit-preload-data="off"
                      data-sveltekit-noscroll="off"
                      data-analytics="mobile-game-provider-link"
                    >
                      Pragmatic Play
                    </a>
                  </h2>
                </div>
              </div>
            </div>
            <p class="weight-semibold line-height-default align-left size-default text-size-default variant-highlighted with-icon-space next-17v69ua">
              Display Balance in
            </p>
            <div class="stack x-flex-start y-center gap-small padding-none direction-horizontal padding-left-auto padding-top-auto padding-bottom-auto padding-right-auto next-1cd1boi">
              <p class="weight-semibold line-height-default align-left size-default text-size-default variant-subtle with-icon-space next-17v69ua">
                Your balance is shown in this section
              </p>
              <div class="dropdown next-1iau4lg">
                <button
                  type="button"
                  tabindex="0"
                  class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white"
                  aria-label="Open Dropdown"
                  data-button-root=""
                >
                  <div class="currency next-141qgpc" role="presentation">
                    <span
                      class="weight-normal line-height-default align-left size-default text-size-default variant-subtle is-truncate next-17v69ua"
                      title="eur"
                      style={{
                        maxWidth: "12ch",
                      }}
                    >
                      <svg fill="none" viewBox="0 0 96 96" class="svg-icon ">
                        <title></title>
                        <path
                          d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48Z"
                          fill="#0F8FF8"
                        ></path>
                        <path
                          d="m62.16 58.76 7.28 3.72c-3.72 5.8-9.68 10.92-19.48 10.92-11.76 0-21.36-6.92-24.44-17.6h-3.8v-4.88h2.92c-.08-.88-.16-1.76-.16-2.6 0-.96.08-1.88.16-2.76h-2.92v-4.88h3.84c3.04-10.6 12.64-17.44 24.36-17.44 9.8 0 15.84 5.08 19.48 10.92l-7.28 3.72c-2.32-4-6.96-7.04-12.2-7.04-7 0-12.64 3.84-15.2 9.88h19.64v4.88h-21c-.08.88-.16 1.8-.16 2.76 0 .88.08 1.76.16 2.6h21v4.88H34.68c2.56 6.12 8.2 10.04 15.28 10.04 5.24 0 9.88-3 12.2-7.04v-.08Z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </span>
                    <span
                      class="weight-semibold line-height-default align-left size-default text-size-default variant-highlighted with-icon-space is-truncate next-17v69ua"
                      style={{
                        maxWidth: "12ch",
                      }}
                    >
                      EUR
                    </span>
                  </div>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 64 64"
                    class="svg-icon "
                    style={{
                      transform: "rotate(0deg)",
                    }}
                  >
                    <title></title>
                    <path d="M32.271 49.763 9.201 26.692l6.928-6.93 16.145 16.145 16.144-16.144 6.93 6.929-23.072 23.07h-.005Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <label class="variant-default next-17lavhm">
              <input
                type="checkbox"
                aria-checked="false"
                class="next-17lavhm"
              />
              <span class="slider next-17lavhm">
                <div class="indicator next-17lavhm"></div>
              </span>
              <div class="toggle-label next-17lavhm">
                <span class="weight-semibold line-height-default align-left size-default text-size-default variant-subtle with-icon-space next-17v69ua">
                  <span slot="label">Play Full Screen</span>
                </span>
              </div>
            </label>
            <div class="mobile-play-buttons next-1qoljwo">
              <a
                class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-[--logo-color] text-black betterhover:hover:bg-green-400 betterhover:hover:text-neutral-black focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]"
                href="?tab=register&amp;modal=auth"
                data-sveltekit-reload="off"
                data-sveltekit-preload-data="off"
                data-sveltekit-noscroll="off"
                data-analytics="mobile-game-register-button"
              >
                <svg fill="currentColor" viewBox="0 0 96 96" class="svg-icon ">
                  <title></title>
                  <path d="M87.984 44.286 12.254.573a4.269 4.269 0 0 0-6.403 3.695v87.464a4.269 4.269 0 0 0 6.423 3.685l-.02.01 75.73-43.713a4.272 4.272 0 0 0 .023-7.418l-.02-.01h-.002Z"></path>
                </svg>
                <span>Real Play</span>
              </a>
              <a
                class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] pointer-events-none opacity-50 bg-[--sidebar-button-color] text-white betterhover:hover:bg-grey-300 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]"
                href="/tr/casino/games/pragmatic-play-sweet-bonanza-1000/play?mode=play"
                data-sveltekit-reload="off"
                data-sveltekit-preload-data="off"
                data-sveltekit-noscroll="off"
                data-analytics="mobile-game-free-play-button"
              >
                <svg fill="currentColor" viewBox="0 0 96 96" class="svg-icon ">
                  <title></title>
                  <path d="M87.984 44.286 12.254.573a4.269 4.269 0 0 0-6.403 3.695v87.464a4.269 4.269 0 0 0 6.423 3.685l-.02.01 75.73-43.713a4.272 4.272 0 0 0 .023-7.418l-.02-.01h-.002Z"></path>
                </svg>
                <span>Fun Play</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div class="game-layout next-8eostq">
          <div class="parent next-1ydxan2">
            <div class="ctainer next-1ydxan2">
              <div class="game-wrapper next-8eostq">
                <div class="content-wrapper next-vlgd3s">
                  <div class="page-content" id="main-content">
                    <div
                      class="game-wrapper next-1il0acl"
                      style={{
                        "--max-height": "671px",
                        "--fullscreen-z": "9999",
                      }}
                    >
                      <div
                        id="softswiss_game_container"
                        class="game-content next-1eu78n3"
                      >
                        <iframe
                          id="game"
                          title="game launcher"
                          frameborder="0"
                          class="next-z5y9d8"
                        ></iframe>
                        <div class="overlay next-1nozmfn">
                          <div class="stack x-center y-center gap-small padding-none direction-horizontal padding-left-auto padding-top-auto padding-bottom-auto padding-right-auto next-1cd1boi">
                            <span class="weight-semibold line-height-default align-left size-default text-size-default variant-subtle with-icon-space next-17v69ua">
                              Display Balance in
                            </span>
                            <div class="dropdown next-1iau4lg">
                              <button
                                type="button"
                                tabindex="0"
                                class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white"
                                aria-label="Open Dropdown"
                                data-button-root=""
                              >
                                <div
                                  class="currency next-141qgpc"
                                  role="presentation"
                                >
                                  <span
                                    class="weight-normal line-height-default align-left size-default text-size-default variant-subtle is-truncate next-17v69ua"
                                    title="eur"
                                    style={{
                                      maxWidth: "12ch",
                                    }}
                                  >
                                    <svg
                                      fill="none"
                                      viewBox="0 0 96 96"
                                      class="svg-icon "
                                    >
                                      <title></title>
                                      <path
                                        d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48Z"
                                        fill="#0F8FF8"
                                      ></path>
                                      <path
                                        d="m62.16 58.76 7.28 3.72c-3.72 5.8-9.68 10.92-19.48 10.92-11.76 0-21.36-6.92-24.44-17.6h-3.8v-4.88h2.92c-.08-.88-.16-1.76-.16-2.6 0-.96.08-1.88.16-2.76h-2.92v-4.88h3.84c3.04-10.6 12.64-17.44 24.36-17.44 9.8 0 15.84 5.08 19.48 10.92l-7.28 3.72c-2.32-4-6.96-7.04-12.2-7.04-7 0-12.64 3.84-15.2 9.88h19.64v4.88h-21c-.08.88-.16 1.8-.16 2.76 0 .88.08 1.76.16 2.6h21v4.88H34.68c2.56 6.12 8.2 10.04 15.28 10.04 5.24 0 9.88-3 12.2-7.04v-.08Z"
                                        fill="#fff"
                                      ></path>
                                    </svg>
                                  </span>
                                  <span
                                    class="weight-semibold line-height-default align-left size-default text-size-default variant-highlighted with-icon-space is-truncate next-17v69ua"
                                    style={{
                                      maxWidth: "12ch",
                                    }}
                                  >
                                    EUR
                                  </span>
                                </div>
                                <svg
                                  fill="currentColor"
                                  viewBox="0 0 64 64"
                                  class="svg-icon "
                                  style={{
                                    transform: "rotate(0deg)",
                                  }}
                                >
                                  <title></title>
                                  <path d="M32.271 49.763 9.201 26.692l6.928-6.93 16.145 16.145 16.144-16.144 6.93 6.929-23.072 23.07h-.005Z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div
                            class="stack x-stretch y-center gap-small padding-medium direction-horizontal padding-left-auto padding-top-auto padding-bottom-auto padding-right-auto next-1cd1boi"
                            style={{
                              width: "auto",
                            }}
                          >
                            <a
                              class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-[--logo-color] text-black betterhover:hover:bg-green-400 betterhover:hover:text-neutral-black focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]"
                              href="?tab=register&amp;modal=auth"
                              data-sveltekit-reload="off"
                              data-sveltekit-preload-data="off"
                              data-sveltekit-noscroll="off"
                              data-analytics="real-play-button"
                            >
                              <svg
                                fill="currentColor"
                                viewBox="0 0 96 96"
                                class="svg-icon "
                              >
                                <title></title>
                                <path d="M87.984 44.286 12.254.573a4.269 4.269 0 0 0-6.403 3.695v87.464a4.269 4.269 0 0 0 6.423 3.685l-.02.01 75.73-43.713a4.272 4.272 0 0 0 .023-7.418l-.02-.01h-.002Z"></path>
                              </svg>
                              <span>Real Play</span>
                            </a>
                            <button
                              type="button"
                              tabindex="0"
                              class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-[--sidebar-button-color] text-white betterhover:hover:bg-grey-300 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]"
                              data-analytics="fun-play-button"
                              data-button-root=""
                            >
                              <svg
                                fill="currentColor"
                                viewBox="0 0 96 96"
                                class="svg-icon "
                              >
                                <title></title>
                                <path d="M87.984 44.286 12.254.573a4.269 4.269 0 0 0-6.403 3.695v87.464a4.269 4.269 0 0 0 6.423 3.685l-.02.01 75.73-43.713a4.272 4.272 0 0 0 .023-7.418l-.02-.01h-.002Z"></path>
                              </svg>
                              <span>Fun Play</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="game-footer next-mttlx3">
                        <div
                          class="stack x-space-between y-center gap-none padding-none direction-horizontal padding-left-auto padding-top-auto padding-bottom-auto padding-right-small next-1cd1boi"
                          style={{
                            width: "auto",
                            borderRight: "1px solid var(--grey-400)",
                          }}
                        >
                          <button
                            type="button"
                            tabindex="0"
                            class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none text-sm leading-none py-[0.8125rem] px-[1rem]"
                            data-button-root=""
                          >
                            <svg
                              fill="currentColor"
                              viewBox="0 0 64 64"
                              class="svg-icon "
                            >
                              <title></title>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 25h8V8h17V0H0v25Zm56 0h8V0H39v8h17v17ZM25 64H0V39h8v17h17v8Zm14 0h25V39h-8v17H39v8Z"
                              ></path>
                            </svg>
                          </button>
                          <div class="hoverable next-bbyuql">
                            <button
                              type="button"
                              tabindex="0"
                              class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none text-sm leading-none py-[0.8125rem] px-[1rem]"
                              data-button-root=""
                            >
                              <svg
                                fill="currentColor"
                                viewBox="0 0 64 64"
                                class="svg-icon "
                              >
                                <title></title>
                                <path d="M64 58.5H0v-53h64v53Zm-56-8h48v-37H8v37Z"></path>
                              </svg>
                            </button>
                          </div>
                          <div class="hoverable next-bbyuql">
                            <button
                              type="button"
                              tabindex="0"
                              class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none text-sm leading-none py-[0.8125rem] px-[1rem]"
                              data-button-root=""
                            >
                              <svg
                                fill="currentColor"
                                viewBox="0 0 64 64"
                                class="svg-icon "
                              >
                                <title></title>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M33.013 19.707 64 0v12.64L30.987 33.627 18.133 18.853 0 30.693V17.947L20.107 4.853l12.906 14.854ZM16 64H5.333V35.173L16 28.213V64Zm13.707-21.653-3.04-3.52V64h10.666V37.493l-2.773 1.76-4.853 3.094ZM58.667 64H48V30.72l10.667-6.8V64Z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div slot="left">
                            <div></div>
                          </div>
                        </div>
                        <div>
                          <Logo className="w-full max-h-[35px]" />
                        </div>
                        <div slot="right" class="right next-1nvz4bh">
                          <button
                            type="button"
                            tabindex="0"
                            class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white"
                            data-analytics="toggle-play-real-button"
                            data-button-root=""
                          >
                            <span class="weight-semibold line-height-default align-left size-default text-size-default variant-highlighted with-icon-space next-17v69ua">
                              Fun Play
                            </span>
                            <label class="variant-default next-17lavhm">
                              <input
                                type="checkbox"
                                aria-checked="false"
                                disabled=""
                                class="next-17lavhm"
                              />
                              <span class="slider next-17lavhm disabled">
                                <div class="indicator next-17lavhm"></div>
                              </span>
                            </label>
                            <span class="weight-semibold line-height-default align-left size-default text-size-default variant-subtle with-icon-space next-17v69ua">
                              Real Play
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Cardslider cardsliderData={cardsliderData} />
      <Providerslider providersliderData={providersliderData} />

      <div className="ctainer next-1bie1bv has-padding RatioRegular">
        <Betsboard betsboardData={betsboardData} />
      </div>
    </>
  );
}
