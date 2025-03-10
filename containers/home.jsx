"use client";
import "@/styles/home.css";
import React, { useState, useContext } from "react";
import { AppContext } from "@/context/app";
import {
  Live,
  Etherium,
  Tether,
  Slot,
  SlotJackpotGames,
  SlotInstantWinGames,
  SlotBonusbuyGames,
  LiveTableGames,
  LivePokerGames,
  LiveRouletteGames,
  SlotPopularGames,
  GambiOriginals,
  SportUpcomingGames,
  SportLiveGames,
} from "@/components/icons";
import Betsboard from "@/components/betsboard";
import Cardslider from "@/components/cardslider";
import Providerslider from "@/components/providerslider";
import Originalslider from "@/components/originalslider";
import Collectionslider from "@/components/collectionslider";
import Navigationslider from "@/components/navigationslider";
import Cardvip from "@/components/cardvip";

const navigationsliderData = [
  { icon: SlotJackpotGames, name: "Jackpot Games" },
  { icon: SlotInstantWinGames, name: "Instantwin" },
  { icon: SlotBonusbuyGames, name: "Bonus Buy" },
  { icon: LiveTableGames, name: "Table Games" },
  { icon: LivePokerGames, name: "Poker" },
  { icon: LiveRouletteGames, name: "Roulette" },
  { icon: SlotPopularGames, name: "Popular Games" },
  {
    icon: GambiOriginals,
    name: "Gambi Originals",
  },
  { icon: SportLiveGames, name: "Live Sport" },
  { icon: SportUpcomingGames, name: "Upcoming" },
];

const originalsliderData = [
  {
    imgSrc: "/images/original/crash.png",
    name: "Carsh",
    provider: "Gambi Originals",
  },
  {
    imgSrc: "/images/original/dice.png",
    name: "Dice",
    provider: "Gambi Originals",
  },
  {
    imgSrc: "/images/original/mines.png",
    name: "Mines",
    provider: "Gambi Originals",
  },
  {
    imgSrc: "/images/original/plinko.png",
    name: "Plinko",
    provider: "Gambi Originals",
  },
];

const cardsliderSlotData = {
  title: "Gambi Slots",
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

const cardsliderLiveData = {
  title: "Gambi Lives",
  icon: "/images/titleicons/livecasino.svg",
  data: [
    {
      imgSrc: "/images/live/andar-bahar.jpg",
      name: "Andar Bahar",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/live/autoroulette.jpg",
      name: "Auto Roulette",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/live/crazy-time.jpg",
      name: "Crazy Time",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/live/dream-catcher.jpg",
      name: "Dream Catcher",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/live/mega-rulet.jpg",
      name: "Mega Rulet",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/live/mega-rulet.jpg",
      name: "Mega Rulet",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/live/mega-rulet.jpg",
      name: "Mega Rulet",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/live/mega-rulet.jpg",
      name: "Mega Rulet",
      provider: "Pragmatic Play",
    },
    {
      imgSrc: "/images/live/mega-rulet.jpg",
      name: "Mega Rulet",
      provider: "Pragmatic Play",
    },
  ],
};

const collectionsliderData = [
  {
    imgSrc: "/images/collection/assiangames.png",
    name: "Assian",
    altname: "Games",
  },
  {
    imgSrc: "/images/collection/egyptgames.png",
    name: "Egtpy",
    altname: "Games",
  },
  {
    imgSrc: "/images/collection/firegames.png",
    name: "Fire",
    altname: "Games",
  },
  {
    imgSrc: "/images/collection/vikinggames.png",
    name: "Viking",
    altname: "Games",
  },
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

export default function HomeContainer() {
  const { toggleModal, auth } = useContext(AppContext);
  const [info, setInfo] = useState(false);
  const toggleInfo = () => {
    setInfo(!info);
  };

  return (
    <>
      <div className="ctainer next-1bie1bv has-padding">
        {" "}
        <div className="min-h-[230px] text-[#00cd73] relative bg-[var(--home-banner-background)] rounded-2xl !p-12 mx-auto flex flex-col md:flex-column items-start justify-between overflow-hidden">
          {auth.isLoggedin === false ? (
            <>
              <div className="text mb-4 z-10">
                <h1 className="RatioRegular text-2xl md:text-4xl">
                  Enter the world of Gambi
                </h1>
              </div>
              <div className="buttons flex items-center space-x-2 z-10">
                <button
                  onClick={() => toggleModal(1)}
                  className="!border-[#2fff84] text-[#00cd73] RatioBlack !border-2 !border-solid registerbg px-4 py-2 rounded-2xl"
                >
                  REGISTER
                </button>
                <span className="RatioBlack">OR</span>
                <div className="social-login flex space-x-2">
                  <img
                    src="/images/home/google.svg"
                    alt="Google"
                    className="google w-10 h-10 rounded"
                  />
                  <img
                    src="/images/home/facebook.svg"
                    alt="Facebook"
                    className="facebook w-10 h-10 rounded"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <Cardvip />
            </>
          )}
          <div className="absolute inset-0 bg-custom"></div>
          <div className="absolute inset-0 mask-overlay animate-home-rays"></div>
        </div>{" "}
      </div>
      <div className="ctainer next-1bie1bv has-padding">
        <div className="mx-auto py-1 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full flex-1 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 casino-gradient rounded-2xl space-y-4 md:space-y-0 md:space-x-4 md:min-h-[144px]">
            <div className="flex-1">
              <h2 className="text-3xl RatioBlack custom-font text-white">
                <div className="flex">
                  <span className="">CASINO</span>
                  <div className="p-1 rounded-lg ml-2 text-base bg-[#003285] min-w-[115px]">
                    8000+ Games
                  </div>
                </div>
              </h2>
            </div>
            <p className="RatioRegular hidden md:block flex-2 text-left text-sm text-gray-300 casinogames">
              Explore Gambis exclusive games alongside a selection of over
              10,000 classic casino games.
            </p>
          </div>
          <div className="absolute flex items-center justify-center p-2 switch-circle rounded-full !mx-0 !my-0 !border-[#121826] !border-8 !border-solid">
            <img
              src="/images/home/shuffle.svg"
              alt="Switch"
              className="w-10 h-10"
            />
          </div>
          <div className="w-full flex-1 flex flex-col md:flex-row-reverse items-center justify-between p-8 md:p-12 sports-gradient rounded-2xl space-y-4 md:space-y-0 md:space-x-4 md:min-h-[144px]">
            <div className="flex-1 text-right">
              <h2 className="text-3xl RatioBlack custom-font text-white">
                <div className="flex justify-end items-center">
                  <div className="p-1 rounded-lg mr-2 text-base bg-[#ff7b00] min-w-[90px]">
                    50+ Sports
                  </div>

                  <span className="mt-1">SPORTS</span>
                </div>
              </h2>
            </div>

            <p className="RatioRegular hidden md:block !mr-2 flex-2 text-right text-sm text-gray-300 slotgames">
              Wager on the outcomes of more than 50 sporting events using our
              top-tier betting platform.
            </p>
          </div>
        </div>
      </div>
      <Navigationslider navigationsliderData={navigationsliderData} />
      <Originalslider originalsliderData={originalsliderData} />
      <Cardslider cardsliderData={cardsliderSlotData} />
      <Providerslider providersliderData={providersliderData} />
      <Cardslider cardsliderData={cardsliderLiveData} />
      <Collectionslider collectionsliderData={collectionsliderData} />
      <div className="ctainer next-1bie1bv has-padding">
        <div className="relative w-full">
          <div className="match-bg bg-[#182132] text-white rounded-lg p-4 flex flex-col md:flex-row items-center justify-between overflow-hidden">
            <div className="flex items-center md:mb-0">
              <span className="RatioBlack text-lg font-bold mr-4">
                MATCH OF THE DAY
              </span>
            </div>
            <div className="flex-1 text-center md:mb-0 relative">
              <span className="RatioBlack text-2xl font-bold">
                REAL MADRID VS BARCELONA
              </span>
              <div className="absolute inset-0 flex justify-between items-center opacity-20">
                <div className="w-1/2 flex justify-end pr-4">
                  <img
                    src="/images/home/match/RealMadrid.png"
                    alt="Real Madrid Logo"
                    className="h-[130px] max-h-full"
                  />
                </div>
                <div className="w-1/2 flex justify-start pl-4">
                  <img
                    src="/images/home/match/Barcelona.png"
                    alt="Barcelona Logo"
                    className="h-[130px] max-h-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="match-button p-2 rounded-lg RatioBlack">1.10</div>
              <div className="match-button p-2 rounded-lg RatioBlack">1.10</div>
              <div className="match-button p-2 rounded-lg RatioBlack">1.10</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ctainer next-1bie1bv has-padding RatioRegular">
        <Betsboard betsboardData={betsboardData} />
        <div
          className={`mt-6 RatioRegular see-more next-fcxq5c ${
            info ? "is-open" : ""
          }`}
          data-content=""
          style={{
            "--max-height": `${info ? "100%" : "200px"}`,
          }}
        >
          <div className="content next-fcxq5c">
            <div
              className="column-container next-1qd3faq"
              style={{
                columnCount: 2,
              }}
            >
              <div className="content-block next-70tzz6">
                <h2 className="weight-semibold line-height-responsive is-inline align-left size-base text-size-base responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Kripto_Casino_Oyunları_Online">
                    Kripto Casino Oyunları Online{" "}
                  </span>
                </h2>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Bu kadar çok casino oyunu seçeneği varken, nereden
                    başlayacaksınız? Size harika grafikler ve dev kazançlar
                    sunan en iyi online casino oyunları ile başlamak iyidir.{" "}
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none !bg-transparent !text-white [&amp;_svg]:!text-white focus-visible:text-white focus-visible!:[&amp;_svg]:text-white inline"
                    href="/tr/casino/home"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Gambi Casino</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    ’daki en iyi online casino oyunlarını bu sayfada
                    bulabilirsiniz.
                  </span>
                </p>
                <h2 className="weight-semibold line-height-responsive is-inline align-left size-base text-size-base responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Online_Casino_Oyunları_Nedir?">
                    Online Casino Oyunları Nedir?{" "}
                  </span>
                </h2>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Online casino oyunları arasında masa oyunları, slot makinesi
                    oyunları, zar oyunları ve kart oyunları bulunur.
                    Gambi.com’da harika görseller, çeşitli bahis ve kazanç
                    yolları ile yüzlerce oyunu deneyebilirsiniz.
                  </span>
                </p>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    İster blackjack hayranı ister progresif slotları tercih
                    ediyor olun, zevklerinize uygun, aralarından seçim
                    yapabileceğiniz birçok oyun bulacaksınız. Gambi.com’da şu
                    anda oynayabileceğiniz en iyi online casino oyunlarını
                    keşfetmek için okumaya devam edin.
                  </span>
                </p>
                <h2 className="weight-semibold line-height-responsive is-inline align-left size-base text-size-base responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="En_İyi_Casino_Oyunu_Türleri_Hangileridir?">
                    En İyi Casino Oyunu Türleri Hangileridir?{" "}
                  </span>
                </h2>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Masa oyunlarından online slotlara, online olarak
                    oynayabileceğiniz en iyi casino oyunlarını burada
                    bulabilirsiniz:
                  </span>
                </p>
                <h3 className="weight-semibold line-height-responsive is-inline align-left size-default text-size-default responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Masa_Oyunları">Masa Oyunları </span>
                </h3>
                <p className="inline-text">
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/group/table-games"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Masa oyunları</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    casino klasikleridir ve Gambi.com’da popülerdir. Sanal
                    sandalyeye oturup{" "}
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/group/blackjack"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>blackjack</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    ,
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/group/baccarat"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>bakara</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    ve
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/how-to-play-roulette"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>rulet</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    gibi efsanevi casino oyunlarını oynayabilirsiniz. Online
                    şans oyunlarında yeniyseniz, bahis koymaya başlamadan önce
                    Gambi Casino’da
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/how-to-play-casino-table-games"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>masa oyunları oynamayı</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    öğrenin.
                  </span>
                </p>
                <h3 className="weight-semibold line-height-responsive is-inline align-left size-default text-size-default responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Canlı_Casino_Oyunları">Canlı Casino Oyunları </span>
                </h3>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Canlı casino oyunları veya canlı krupiye oyunları, online
                    casino sitelerinde oynanan en popüler oyunlar arasındadır.
                    Gerçek krupiye ve canlı sohbet özelliği ile gerçekçi casino
                    deneyimi sunarlar. Geniş canlı casino oyunu yelpazemiz
                    casino stüdyosundan oynatılır ve canlı olarak platformumuz
                    üzerinden yayınlanır.
                  </span>
                </p>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Başlamak için casino oyuncuları canlı casino lobisine girip
                    çeşitli oyunlar arasından seçim yapabilirler! Online
                    pokerden Avrupa ruletine, canlı krupiyeler ile çeşitli
                    casino oyunlarımız mevcuttur. Daha fazla bilgi için
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/how-to-play-live-casino-games"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>canlı casino kılavuzumuzu</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    inceleyin.
                  </span>
                </p>
                <h3 className="weight-semibold line-height-responsive is-inline align-left size-default text-size-default responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Kart_Oyunları">Kart Oyunları </span>
                </h3>
                <p className="inline-text">
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/group/cards"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Kart oyunları</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    , Gambi Casino’da oynayabileceğiniz diğer bir harika oyun
                    seçeneğidir. Son derece çeşitli
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/group/video-poker"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>video poker oyunları</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    ve canlı
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/group/poker"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>poker oyunları</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    seçenekleri sizi şımartacaktır! Poker oyuncusuysanız
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/games/evolution-caribbean-stud-poker"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Canlı Caribbean Stud Poker</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    ve
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/games/evolution-holdem-lobby"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Canlı Casino Hold’em</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    oyunlarını kaçırmamalısınız. Eğlenceli video poker oyunları
                    arıyorsanız Gambi Orijinal
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/games/video-poker"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Video Poker</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    ve BGaming’in
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/games/bgaming-jacks-or-better"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Jacks or Better</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    oyunlarını kaçırmayın! Kullanışlı poker ipuçları için
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/how-to-play-online-poker"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>poker</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    ve
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/how-to-play-video-poker-on-stake"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>video poker kılavuzlarmıza</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    göz atın.
                  </span>
                </p>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Gambi Casino’da deneyebileceğiniz daha birçok klasik kart
                    oyunu ve özel oyunları mevcuttur. Gambi.com’da
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/how-to-play-casino-card-games"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>kart oyunları oynamayı öğrenin</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    ve elinize gelen kartları en iyi şekilde değerlendirin.
                  </span>
                </p>
                <h3 className="weight-semibold line-height-responsive is-inline align-left size-default text-size-default responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Zar_Oyunları">Zar Oyunları </span>
                </h3>
                <p className="inline-text">
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/group/dice"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Zar</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    oyunları, zar atışının sonucuna bahis koyarak oynanırlar ve
                    Gambi.com’da son derece popülerdir.{" "}
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/games/bgaming-sic-bo"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Sic Bo</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    ve
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/games/evolution-craps"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Kreps</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    gibi klasik casino oyunlarına ek olarak
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/group/evolution-gaming"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Evolution Gaming</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    ’den zar temelli
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/games/evolution-football-studio-dice"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Football Studio Dice Live</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    gibi daha yeni oyunları da deneyebilirsiniz. Gambi.com’da
                    kazanma şansınızı arttırmak için
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/how-to-play-types-of-casino-dice-games"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>casino zar oyunlarını oynamayı</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    öğrenin.
                  </span>
                </p>
                <h3 className="weight-semibold line-height-responsive is-inline align-left size-default text-size-default responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Slot_Makinesi_Oyunları">
                    Slot Makinesi Oyunları{" "}
                  </span>
                </h3>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Oldukça geniş tema, çark düzeni, ödeme hattı, bonus tur ve
                    şans oyunu mekanizması çeşitliliği sunan{" "}
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/group/slots"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>slotlar</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    , Gambi Casino’da en yaygın olarak oynanan oyunlardır.
                    Gambi.com’da oynayabileceğiniz en iyi slot oyunlarından biri
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/games/slots"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Scarab Spin</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    , Mısır temalı ve etkileyici %97,84 oranı sunan Gambi
                    Orijinal oyunudur.
                  </span>
                </p>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Klasik slot makinelerinden modern online slot oyunlarına,
                    Gambi.com’da sunduğumuz çeşitli slot oyunları, herkesin
                    tadına varabileceği eşsiz oyun deneyimi sunuyor. En popüler
                    slot oyunu temaları arasında meyveler, hayvanlar, değerli
                    taşlar, antik dönem, Vegas, retro, uzay ve deniz bulunur.
                  </span>
                </p>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Demo oyun modları ile bahis koymaya başlamadan önce slot
                    oyunlarımızı deneyebilirsiniz! Gambi Casino’da en popüler
                    oyunlarda strateji geliştirmek için
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/how-to-play-slots"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>online slot oyunu oynamayı</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    öğrenin.
                  </span>
                </p>
                <h2 className="weight-semibold line-height-responsive is-inline align-left size-base text-size-base responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Oynanacak_En_İyi_Casino_Oyunları_Hangileridir?">
                    Oynanacak En İyi Casino Oyunları Hangileridir?{" "}
                  </span>
                </h2>
                <p className="inline-text">
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/casino/group/stake-originals"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Gambi Orijinal</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    oyunları mükemmel grafikleri ve son derece basit oynanışları
                    ile tüm online casino tutkunları için idealdir. Gambi.com’da
                    şu anda oynayabileceğiniz harika oyunlardan bazıları
                    şunlardır:
                  </span>
                </p>
                <ul className="next-fae7ut">
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/plinko"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Plinko</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        : Pachinko olarak bilinen mekanik Japon oyunundan ilham
                        alan Plinko, oyun paneline yukarıdan bir top bırakarak
                        kazançları ve çarpanları açtığınız bir piramit çivi
                        oyunudur. ODO %99.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/dice"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Dice</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        : Adından da anlaşılabileceği gibi dice oyununda, 100
                        yüzlü bir zar atışının sonucuna bahis koyarsınız. ODO
                        %99. Gambi Casino’da oynayabileceğiniz diğer
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/group/dice"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>zar oyunlarına</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        {" "}
                        bakın.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/limbo"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Limbo</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        : Başka bir Gambi Orijinal oyunu olan Limbo, zar atmaya
                        dayalı ve maksimum kazancı bahsinizin 1.000.000x katı
                        olan bir oyundur! ODO %99.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/mines"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Mines</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        : Klasik mayın tarlası oyunundan ilham alan Mines,
                        değerli taşları arayıp bombalardan uzak durmaya
                        çalıştığınız bir kripto bahis oyunudur! ODO %99. Gambi
                        Casino’da oynayabileceğiniz diğer
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/group/mines"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>mines oyunlarına</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        {" "}
                        bakın.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/crash"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Crash</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        : Gambi.com’daki en sade oyunlardan olan Crash, çarpanın
                        çökene kadar ne kadar yükseleceğini tahmin etmeye dayalı
                        bir oyundur! ODO %99. Biraz daha farklı bir şey
                        arıyorsanız Evolution Gaming’den
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/evolution-cash-or-crash"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Cash or Crash Live</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        {" "}
                        oyununa göz atın.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/blackjack"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Blackjack</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        : Tanıtmaya gerek olmayan Gambi Orijinal Blackjack
                        oyunu, çok düşük kasa avantajı ile krupiyeyi 21’e
                        erişene kadar alt etmenizi sağlıyor. ODO %99,53. Gambi
                        Casino’da mevcut diğer
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/group/blackjack"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>blackjack çeşitlerini</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        {" "}
                        keşfedin.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/hilo"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Hilo</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        : Hilo, sonraki kartın açık olan karttan daha yüksek
                        veya düşük olacağı üzerine bahis koyulan bir Bitcoin
                        casino oyunudur. ODO %99.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/keno"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Keno</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        : Klasik Çin piyango oyununa dayanan keno, çekilişten
                        önce belirli bir sayı aralığı seçilerek oynanan, bingo
                        tarzı bir oyundur. ODO %99.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/wheel"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Wheel</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        : Bu eşsiz teker oyununda 15 özelleştirilebilir oyun
                        modu arasından seçim yapıp bahis tutarını, risk düzeyini
                        ve gelecek çarpanları seçin. ODO %99. Biraz değişik hali
                        için Play’n GO’dan
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/playngo-money-wheel"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Money Wheel</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        {" "}
                        oyununa göz atın!
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/roulette"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Rulet</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        : Gambi Orijinal Rulet, Gambi.com’daki en popüler
                        oyunlardan biridir. Tüm iç ve dış bahisleri
                        oynayabilirsiniz. ODO %97,30. Gambi.com’daki diğer rulet
                        oyunlarını görmek için
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/group/roulette"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>rulet lobisine</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        {" "}
                        göz atın.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/diamonds"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Diamonds</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        : Kripto casino sektörünü kasıp kavuran Stake’e özel
                        Diamonds oyununda elinizi çalıştırın. ODO %98,29.
                      </span>
                    </p>{" "}
                  </li>
                </ul>
                <h2 className="weight-semibold line-height-responsive is-inline align-left size-base text-size-base responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Online_Casino_Oyunları_Oynama_ve_Kazanma_-_Temel_Stratejiler_ve_İpuçları">
                    Online Casino Oyunları Oynama ve Kazanma - Temel Stratejiler
                    ve İpuçları{" "}
                  </span>
                </h2>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    İnternette oynayabileceğiniz en iyi casino oyunlarından
                    bazılarını denemeye hazır mısınız? Oyun seçkimiz ile
                    eğlenmeye başlarken bu ipuçları yararlı olacaktır:
                  </span>
                </p>
                <ul className="next-fae7ut">
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Çoğu online casino oyunu rastgele sayı üreteci (RNG) ile
                        çalışır. Yani her bahis turunda kazanabilir veya
                        kaybedebilirsiniz. Hangi oyunu oynayacağınızı seçerken
                        bunu aklınızda tutun.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Oyunun uzun vadede ne kadar kazandıracağını görmek için
                        her zaman kasa avantajını veya ODO’yu öğrenmelisiniz.
                        Ayrıca minimum para yatırma ve maksimum olası kazanç
                        tutarlarına da bakın.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Kendinizi sadece bir oyun türü ile kısıtlamayın. Örneğin
                        Gambi.com’da
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/group/new-releases"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>en son çıkanlara</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        {" "}
                        bakabilir, büyük jackpotlar kazanma ve daha büyük
                        ödemeler kazanma şansı için
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/blog/progressive-jackpot-slots-guide-tips"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>progresif jackpot slotları</span>{" "}
                      </a>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        {" "}
                        veya diğer canlı casino oyunlarının tadını
                        çıkarabilirsiniz.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Her zaman bütçenize uygun tutarlarda bahis koyun ve
                        sorumluluk bilinciyle oynayın.
                      </span>
                    </p>{" "}
                  </li>
                </ul>
                <h2 className="weight-semibold line-height-responsive is-inline align-left size-base text-size-base responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Online_Casino_Oyunları_Oynamak_için_Para_Yatırma_ve_Çekme">
                    Online Casino Oyunları Oynamak için Para Yatırma ve Çekme{" "}
                  </span>
                </h2>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    En iyi casino oyunlarını oynamak için aşağıdaki adımları
                    izleyerek hesabınıza
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/what-crypto-does-stake-offer"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>kripto para birimi</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    ile para yatırabilirsiniz:
                  </span>
                </p>
                <ol className="next-rusq0o">
                  <li className="level-1 next-rusq0o">
                    <p className="inline-text">
                      <span className="weight-semibold line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Adım 1 -
                      </span>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        {" "}
                        Cüzdan &gt; Para Yatırma bölümünde bulunan para yatırma
                        adresinizi alın.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-rusq0o">
                    <p className="inline-text">
                      <span className="weight-semibold line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Adım 2 -
                      </span>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        {" "}
                        İhtiyaçlarınıza uygun yöntemi seçin. Gambi.com Bitcoin
                        (BTC), Ethereum (ETH), Dogecoin (Doge), Litecoin (LTC)
                        ve diğer birçok para birimini destekler.
                      </span>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-rusq0o">
                    <p className="inline-text">
                      <span className="weight-semibold line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Adım 3 -
                      </span>
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        {" "}
                        Kripto cüzdanınız veya borsanız için “gönder” konumu
                        olarak para yatırma adresinizi kullanın.
                      </span>
                    </p>{" "}
                  </li>
                </ol>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    En iyi casino oyunlarını oynamak için para yatırma ve çekme
                    yöntemleri hakkında daha fazla bilgiyi
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/deposit-withdrawal-methods-online-betting"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>online ödeme yöntemleri kılavuzunda</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    bulabilirsiniz.
                  </span>
                </p>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Gambi.com, müşteri hizmetleri ekibi ile oyunculara casino
                    oyunları, bahis gereksinimler, kripto para ödemeleri gibi
                    konularda canlı destek hizmeti sunmaktadır.
                  </span>
                </p>
                <h2 className="weight-semibold line-height-responsive is-inline align-left size-base text-size-base responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Casino_Oyunu_Olasılıkları,_Kasa_Avantajı_ve_ODO">
                    Casino Oyunu Olasılıkları, Kasa Avantajı ve ODO{" "}
                  </span>
                </h2>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Oynamak için bir casino oyunu seçmeden önce oyun
                    açıklamasını okuyarak, kasa avantajı ve oyuncuya dönüş oranı
                    (ODO) başta olmak üzere, oyun ile ilgili önemli bilgileri
                    öğrenin. En iyi oyunları listemizde de görebileceğiniz gibi,
                    Gambi Orijinal oyunlarının çoğu %1 civarı kasa avantajı ile
                    harika birer seçenektir. Kasa avantajının ne olduğu ve
                    hakkında daha fazla bilgi için
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/casino-house-edge-guide"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>casino kasa avantajı kılavuzumuza göz atın</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    .
                  </span>
                </p>
                <h2 className="weight-semibold line-height-responsive is-inline align-left size-base text-size-base responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Casino_Bonusları_ve_VIP_Programı">
                    Casino Bonusları ve VIP Programı{" "}
                  </span>
                </h2>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Gambi.com hesap bakiyenizi en üst düzeye çıkarmak için en
                    son
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/promotions/category/casino"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>promosyonlar ve fırsatlara</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    göz atın. Ayrıca
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/vip-club"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>Gambi VIP Club</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    hakkında daha fazla bilgi alabilir, aylık özel teklifler ve
                    cömert bonuslar dahil buraya katılmanın
                  </span>
                  <a
                    className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                    href="/tr/blog/vip-program-levels-benefits-rewards"
                    data-sveltekit-reload="off"
                    data-sveltekit-preload-data="off"
                    external="false"
                  >
                    <span>avantajlarına</span>{" "}
                  </a>
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    {" "}
                    göz atabilirsiniz.
                  </span>
                </p>
                <h2 className="weight-semibold line-height-responsive is-inline align-left size-base text-size-base responsive-type-scale variant-highlighted with-icon-space next-17v69ua">
                  <span id="Diğer_Popüler_Online_Casino_Oyunları">
                    Diğer Popüler Online Casino Oyunları{" "}
                  </span>
                </h2>
                <p className="inline-text">
                  <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                    Gambi.com’da deneyebileceğiniz, casino oyunları sektörünün
                    en büyük sağlayıcılarından diğer harika oyunlar arasında
                    şunlar bulunur:
                  </span>
                </p>
                <ul className="next-fae7ut">
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Gambi Orijinal{" "}
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/baccarat"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Bakara</span>{" "}
                      </a>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Play’n GO{" "}
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/playngo-contact"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Contact</span>{" "}
                      </a>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Play’n GO{" "}
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/playngo-cash-pump"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Cash Pump</span>{" "}
                      </a>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/group/playn-go"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Play’n GO</span>{" "}
                      </a>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/playngo-agent-destiny"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Agent Destiny</span>{" "}
                      </a>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/group/pragmatic-play"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Pragmatic Play</span>{" "}
                      </a>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/pragmatic-play-sugar-twist"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Sugar Twist</span>{" "}
                      </a>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Pragmatic Play{" "}
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/pragmatic-play-zeus-vs-hades-gods-of-war"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Zeus vs Hades Gods of War</span>{" "}
                      </a>
                    </p>{" "}
                  </li>
                  <li className="level-1 next-fae7ut">
                    <p className="inline-text">
                      <span className="weight-normal line-height-150pct is-inline align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space next-17v69ua">
                        Hacksaw Gaming{" "}
                      </span>
                      <a
                        className="relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-grey-200 betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:text-white focus-visible:outline-none inline"
                        href="/tr/casino/games/hacksaw-mayan-stackways"
                        data-sveltekit-reload="off"
                        data-sveltekit-preload-data="off"
                        external="false"
                      >
                        <span>Mayan Stackways</span>{" "}
                      </a>
                    </p>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <span
            className="space"
            style={{
              width: "var(--space-0)",
              height: "var(--space-6)",
              display: "flex",
              flexGrow: 0,
            }}
          ></span>{" "}
          <div className="button-wrapper next-fcxq5c">
            <button
              onClick={toggleInfo}
              type="button"
              tabIndex="0"
              className="rounded-2xl see-more-button inline-flex relative items-center gap-2 justify-center font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] text-white betterhover:hover:bg-grey-300 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none shadow-md py-[0.8125rem] px-[1rem]"
              aria-label="Show Content"
              data-button-root=""
            >
              Daha Fazla Gör
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
