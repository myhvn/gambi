"use client";
import "@/styles/collectionslider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Collectionslider({ collectionsliderData }) {
  const collectionRef = useRef(null);
  const itemsCollection = collectionsliderData.map((item, index) => (
    <SwiperSlide key={index} className="max-w-[400px] h-full collection">
      <div className="game-card">
        <div className="game-card__image-container">
          <div className="games-text absolute">
            <p className="!mb-0 RatioBlack uppercase text-left">{item.name}</p>
            <p className="!mb-0 uppercase">{item.altname}</p>
          </div>
          <button className="see-games-button absolute !border-[#2fff84] text-[#00cd73] RatioBlack !border-2 !border-solid !bg-transparent px-4 py-2 rounded">
            SEE GAMES
          </button>
          <img className="game-card__image" src={item.imgSrc} alt={item.name} />
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="ctainer next-1bie1bv has-padding">
      <div className="relative w-full">
        <div className="collection-slider__top">
          <div className="collection-slider__title RatioBlack">
            <img
              src="/images/titleicons/collectiongames.svg"
              className="w-6 h-6 mr-2"
            ></img>
            Gambi Collections
          </div>
          <div className="collection-slider__actions">
            <a
              className="collection-slider__see-more-btn link text-white"
              variant="primary"
              href="/games/new"
            >
              Show all
            </a>
            <div
              className="circle-div hover:cursor-pointer"
              onClick={() => collectionRef.current.swiper.slidePrev()}
            >
              {" "}
              <ChevronLeft size={16} className="icon" />
            </div>
            <div
              className="circle-div hover:cursor-pointer"
              onClick={() => collectionRef.current.swiper.slideNext()}
            >
              <ChevronRight size={16} className="icon" />
            </div>
          </div>
        </div>
        <Swiper
          ref={collectionRef}
          spaceBetween={20}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          className="h-[175px]"
        >
          {itemsCollection}
        </Swiper>
        <div className="scrollend"></div>
      </div>
    </div>
  );
}
