"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";

import "swiper/css";
import "swiper/css/navigation";
import ArrowLeft from "@/components/icons/ArrowLeft";
import ArrowRight from "@/components/icons/ArrowRight";

const CONTENTS = ["content1", "content2"];

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
        <div className="relative col-span-10 col-start-2">
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
            {CONTENTS.map((content) => (
              <SwiperSlide key={`home-slide-${content}`}>
                <p className="text-center text-heading-xl">{t(content)}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div ref={navigationPrevRef} className="absolute -translate-y-1/2 -left-20 top-1/2">
            <ArrowLeft width={40} height={40} color="#ffffff" />
          </div>
          <div ref={navigationNextRef} className="absolute -translate-y-1/2 -right-20 top-1/2">
            <ArrowRight width={40} height={40} color="#ffffff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
