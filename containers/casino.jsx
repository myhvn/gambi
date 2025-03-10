"use client";
import React, { useState } from 'react';
import { Live, Etherium, Tether, Slot, Lobby, GambiOriginals, SlotPopularGames, SlotNewGames } from "@/components/icons";
import Collectionslider from "@/components/collectionslider";
import Cardslider from "@/components/cardslider";
import Originalslider from "@/components/originalslider";
import Providerslider from "@/components/providerslider";
import Betsboard from "@/components/betsboard";
import Navigationslider from "@/components/navigationslider";
import Promotionslider from "@/components/promotionslider";
import CasinoSearchBar from "@/components/casinosearchbar";


const navigationsliderData = [
  { icon: Lobby, name: "Lobby" },
  { icon: GambiOriginals, name: "Originals" },
  { icon: Slot, name: "Slots" },
  { icon: GambiOriginals, name: "Game Show" },
  { icon: SlotNewGames, name: "New Releases" },
  { icon: SlotNewGames, name: "Collections" },
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

const cardsliderNewData = {
  title: "New Releases",
  icon: "/images/titleicons/newgames.svg",
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

const cardsliderShowData = {
  title: "Game Shows",
  icon: "/images/titleicons/gameshows.svg",
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

const promotionsliderData = [
  {
    name: "The Level Up!",
    description: "Win a share in $20,000 every week every week!",
  },
  {
    name: "The Level Up!",
    description: "Win a share in $20,000 every week every week!",
  },
  {
    name: "The Level Up!",
    description: "Win a share in $20,000 every week every week!",
  },
  {
    name: "The Level Up!",
    description: "Win a share in $20,000 every week every week!",
  },
];

const CasinoContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("Lobby");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
  
    <div className="casino-container">
       <Promotionslider promotionsliderData={promotionsliderData}/>
      <CasinoSearchBar onCategoryChange={handleCategoryChange} />


      {selectedCategory === "Lobby" && (
        <>
        <Collectionslider collectionsliderData={collectionsliderData} />
        <Cardslider cardsliderData={cardsliderSlotData} />
        <Originalslider originalsliderData={originalsliderData} />
        <Cardslider cardsliderData={cardsliderLiveData} />
        
        <Cardslider cardsliderData={cardsliderNewData} />
        <Cardslider cardsliderData={cardsliderShowData} />
        
        </>
      )}
      {selectedCategory === "Originals" && (
        <Originalslider originalsliderData={originalsliderData} />
      )}
      {selectedCategory === "Slots" && (
        <Cardslider cardsliderData={cardsliderSlotData} />
      )}
      {selectedCategory === "Live" && (
        <Cardslider cardsliderData={cardsliderLiveData} />
      )}
       {selectedCategory === "Releases" && (
        <Cardslider cardsliderData={cardsliderNewData} />
      )}
      {selectedCategory === "Shows" && (
        <Cardslider cardsliderData={cardsliderShowData} />
      )}
      {selectedCategory === "Collection" && (
        <Collectionslider collectionsliderData={collectionsliderData} />
      )}
      


        <Providerslider providersliderData={providersliderData} />
        <div className="ctainer next-1bie1bv has-padding RatioRegular">
            <Betsboard betsboardData={betsboardData} />
        </div> 
    </div>
  );
};

export default CasinoContainer;