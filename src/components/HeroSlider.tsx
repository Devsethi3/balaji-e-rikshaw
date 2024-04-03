// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
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
          <img src="/slide1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
