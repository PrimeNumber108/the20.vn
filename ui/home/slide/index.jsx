"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ArrowLeftCircle from "@/components/icons/ArrowLeftCircle";
import ArrowRightCircle from "@/components/icons/ArrowRightCircle";

import "swiper/css";
import "swiper/css/navigation";

const Slide = () => {
  const t = useTranslations("home.slide");
  const [swiper, setSwiper] = useState();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="flex-center rounded-xl bg-[#161616] inner-shadow relative py-[100px]">
      <Image
        src="/images/home/background-slide.png"
        alt="bg-slide"
        fill
        priority={true}
        className="object-cover mix-blend-hard-light"
      />
      <div className="page-layout grid-layout">
        <div className="relative grid-child-10">
          <Swiper
            className="relative"
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 40000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onSwiper={(swiper) => setSwiper(swiper)}
            wrapperClass="items-center"
          >
            {Array.from({ length: 2 }, (_, i) => (
              <SwiperSlide key={`home-slide-${i}`}>
                <p className="text-center text-heading-xl">{t(`content.${i}`)}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div ref={navigationPrevRef} className="absolute -translate-y-1/2 -left-20 top-1/2">
            <ArrowLeftCircle width={40} height={40} color="#ffffff" />
          </div>
          <div ref={navigationNextRef} className="absolute -translate-y-1/2 -right-20 top-1/2">
            <ArrowRightCircle width={40} height={40} color="#ffffff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
