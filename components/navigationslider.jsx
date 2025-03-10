"use client";
import "@/styles/collectionslider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IconLink } from "./icons";

export default function Navigationslider({ navigationsliderData }) {
  const itemsNavigation = navigationsliderData.map((item, index) => (
    <SwiperSlide key={index} className="max-w-[140px] h-full navigation">
      <div className="h-full text-white text-xs flex flex-row items-center justify-center text-center bg-[#182132] p-2 rounded-2xl hover:opacity-50">
        <IconLink
          IconComponent={item.icon}
          className="svg-icon !w-[20px] !h-[20px] mr-1"
        />
        <span>{item.name}</span>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="ctainer next-1bie1bv has-padding">
      <div className="relative w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          className="h-[40px]"
        >
          {itemsNavigation}
        </Swiper>
        <div className="scrollend"></div>
      </div>
    </div>
  );
}
