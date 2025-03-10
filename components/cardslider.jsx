"use client";
import "@/styles/cardslider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Cardslider({ cardsliderData }) {
  const cardRef = useRef(null);
  const itemsCard = cardsliderData.data.map((item, index) => (
    <SwiperSlide key={index} className="max-w-[140px] h-full card mt-2">
      <div className="game-card">
        <div className="game-card__image-container">
          <img className="game-card__image" src={item.imgSrc} alt={item.name} />
        </div>
        <div className="game-card__content mt-2">
          <div className="game-card__name truncate ">{item.name}</div>
          <div className="game-card__origin">{item.provider}</div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="ctainer next-1bie1bv has-padding">
      <div className="relative w-full">
        <div className="card-slider__top">
          <div className="card-slider__title RatioBlack">
            <img src={cardsliderData.icon} className="w-6 h-6 mr-2"></img>
            {cardsliderData.title}
          </div>
          <div className="card-slider__actions">
            <a
              className="card-slider__see-more-btn link text-white"
              variant="primary"
              href="/games/new"
            >
              Show all
            </a>
            <div
              className="circle-div hover:cursor-pointer"
              onClick={() => cardRef.current.swiper.slidePrev()}
            >
              {" "}
              <ChevronLeft size={16} className="icon" />
            </div>
            <div
              className="circle-div hover:cursor-pointer"
              onClick={() => cardRef.current.swiper.slideNext()}
            >
              <ChevronRight size={16} className="icon" />
            </div>
          </div>
        </div>
        <Swiper
          ref={cardRef}
          spaceBetween={20}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          className="h-[180px]"
        >
          {itemsCard}
        </Swiper>
        <div className="scrollend"></div>
      </div>
    </div>
  );
}
