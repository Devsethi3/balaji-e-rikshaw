import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function VehicleSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative flex flex-col gap-2 w-[380px]">
            <img src="/1.jpg" alt="" className="w-full" />
            <h3 className="text-xl font-medium">Saarthi Star</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-2 w-[380px]">
            <img src="/2.jpg" alt="" className="w-full" />
            <h3 className="text-xl font-medium">Saarthi Plus</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-2 w-[380px]">
            <img src="/3.jpg" alt="" className="w-full" />
            <h3 className="text-xl font-medium">Saarthi DLX</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-2 w-[380px]">
            <img src="/4.jpg" alt="" className="w-full" />
            <h3 className="text-xl font-medium">Saarthi Shevak E-Auto</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-2 w-[380px]">
            <img src="/5.jpg" alt="" className="w-full" />
            <h3 className="text-xl font-medium">Saarthi Shevak Cargo L-5</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-2 w-[380px]">
            <img src="/6.jpg" alt="" className="w-full" />
            <h3 className="text-xl font-medium">Saarthi E-cab</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

Add breakpoints for responsiveness