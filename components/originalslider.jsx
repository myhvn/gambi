"use client";
import "@/styles/originalslider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Originalslider({ originalsliderData }) {
    const originalRef = useRef(null);

    const itemsOriginal = originalsliderData ? (
        originalsliderData.map((item, index) => (
            <SwiperSlide key={index} className="max-w-[290px] h-full original mt-2">
                <div className="game-card">
                    <div className="game-card__image-container">
                        <img className="game-card__image" src={item.imgSrc} alt={item.name} />
                    </div>
                    <div className="game-card__content mt-2">
                        <div className="game-card__name">{item.name}</div>
                        <div className="game-card__origin">{item.provider}</div>
                    </div>
                </div>
            </SwiperSlide>
        ))
    ) : null;

    return (
        <div className="ctainer next-1bie1bv has-padding">
            <div className="relative w-full">
                <div className="original-slider__top">
                    <div className="original-slider__title RatioBlack">
                        <img
                            src="/images/titleicons/gambioriginalstitle.svg"
                            className="w-6 h-6 mr-2"
                            alt="Originals Title"
                        />
                        Gambi Originals
                    </div>
                    <div className="original-slider__actions">
                        <a
                            className="original-slider__see-more-btn link text-white"
                            variant="primary"
                            href="/games/new"
                        >
                            Show all
                        </a>
                        <div
                            className="circle-div hover:cursor-pointer"
                            onClick={() => originalRef.current.swiper.slidePrev()}
                        >
                            <ChevronLeft size={16} className="icon" />
                        </div>
                        <div
                            className="circle-div hover:cursor-pointer"
                            onClick={() => originalRef.current.swiper.slideNext()}
                        >
                            <ChevronRight size={16} className="icon" />
                        </div>
                    </div>
                </div>
                <Swiper
                    ref={originalRef}
                    spaceBetween={20}
                    slidesPerView="auto"
                    pagination={{ clickable: true }}
                    className="h-[190px]"
                >
                    {itemsOriginal}
                </Swiper>
                <div className="scrollend"></div>
            </div>
        </div>
    );
}
