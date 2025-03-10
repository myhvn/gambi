"use client";
import "@/styles/promotionslider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Promotionslider({ promotionsliderData }) {
  const promotionRef = useRef(null);
  const itemsPromotion = promotionsliderData.map((item, index) => (
    <SwiperSlide key={index} className="max-w-[385px] h-full promotion mt-2">
      <div className="card">
        <div className="card-header">
          <span className="tag">Promo</span>
          <h2 className="title">{item.name}</h2>
        </div>
        <div className="card-body">
          <p className="description">{item.description}</p>
          <button className="learn-more">Learn More</button>
          <img
            src="/images/promotion/gambirocket.png"
            alt="Rocket"
            className="rocket"
          />
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="ctainer next-1bie1bv has-padding">
      <div className="relative w-full">
        <Swiper
          ref={promotionRef}
          spaceBetween={20}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          className="h-[240px]"
        >
          {itemsPromotion}
        </Swiper>
        <div className="scrollend"></div>
      </div>
    </div>
  );
}
