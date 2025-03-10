"use client";
import "@/styles/providerslider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Providerslider({ providersliderData }) {
    const providerRef = useRef(null);
  const itemsProvider = providersliderData.map((item, index) => (
    <SwiperSlide key={index} className="max-w-[100px] h-full provider mt-2">
      <div className="game-card">
        <div className="game-card__image-container">
          <img className="game-card__image" src={item.imgSrc} alt={item.name} />
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="ctainer next-1bie1bv has-padding">
        <div className="relative w-full">
          <div className="provider-slider__top">
            <div className="provider-slider__title RatioBlack">
              <img
                src="/images/titleicons/providers.svg"
                className="w-6 h-6 mr-2"
              ></img>
              Gambi Providers
            </div>
            <div className="provider-slider__actions">
              <a
                className="provider-slider__see-more-btn link text-white"
                variant="primary"
                href="/games/new"
              >
                Show all
              </a>
              <div
                className="circle-div hover:cursor-pointer"
                onClick={() => providerRef.current.swiper.slidePrev()}
              >
                {" "}
                <ChevronLeft size={16} className="icon" />
              </div>
              <div
                className="circle-div hover:cursor-pointer"
                onClick={() => providerRef.current.swiper.slideNext()}
              >
                <ChevronRight size={16} className="icon" />
              </div>
            </div>
          </div>
          <Swiper
            ref={providerRef}
            spaceBetween={20}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            className="h-[66px]"
          >
            {itemsProvider}
          </Swiper>
          <div className="scrollend"></div>
        </div>
      </div>
  );
}
