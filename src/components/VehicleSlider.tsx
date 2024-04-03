import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function VehicleSlider() {
  return (
    <>
      <Swiper
        breakpoints={{
          // When window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        // slidesPerView={3}
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
            <Link
              to="/vehicle/saarthi-star"
              className="text-xl hover:text-rose-600 font-medium"
            >
              Saarthi Star
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-2 w-[380px]">
            <img src="/2.jpg" alt="" className="w-full" />
            <Link
              to="/vehicle/saarthi-plus"
              className="text-xl hover:text-rose-600 font-medium"
            >
              Saarthi Plus
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-2 w-[380px]">
            <img src="/3.jpg" alt="" className="w-full" />
            <Link
              to="/vehicle/saarthi-dlx"
              className="text-xl hover:text-rose-600 font-medium"
            >
              Saarthi DLX
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-2 w-[380px]">
            <img src="/4.jpg" alt="" className="w-full" />
            <Link
              to="/vehicle/saarthi-e-auto"
              className="text-xl hover:text-rose-600 font-medium"
            >
              Saarthi Shevak E-Auto
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-2 w-[380px]">
            <img src="/5.jpg" alt="" className="w-full" />
            <Link
              to="/vehicle/saarthi-cargo-l5"
              className="text-xl hover:text-rose-600 font-medium"
            >
              Saarthi Shevak Cargo L-5
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-2 w-[380px]">
            <img src="/6.jpg" alt="" className="w-full" />
            <Link
              to="/vehicle/saarthi-e-cab"
              className="text-xl hover:text-rose-600 font-medium"
            >
              Saarthi E-cab
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
