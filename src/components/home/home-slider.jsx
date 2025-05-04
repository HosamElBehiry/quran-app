"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowIcon } from "../icons/arrow-icon";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomeSlider = () => {
  const [swiper, set_swiper] = useState(null);
  return (
    <section className="relative group">
      <Swiper loop onInit={(e) => set_swiper(e)} spaceBetween={10}>
        <button
          onClick={() => swiper?.slideNext()}
          className="absolute cursor-pointer top-1/2 end-4 z-50 size-10 bg-sky-600 rounded-full hidden group-hover:grid place-items-center"
        >
          <ArrowIcon className="text-white size-4 rotate-180" />
        </button>
        {["moshaf", "kaabah", "sky"].map((info) => (
          <SwiperSlide key={info} className="cursor-grab">
            <Image
              src={`/home/${info}.webp`}
              height={400}
              width={1500}
              className="w-full max-md:h-auto md:min-h-115 md:max-h-115 object-center"
              alt={info}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute cursor-pointer top-1/2 start-4 z-50 size-10 bg-sky-600 rounded-full hidden group-hover:grid place-items-center"
      >
        <ArrowIcon className="text-white size-4" />
      </button>
    </section>
  );
};
