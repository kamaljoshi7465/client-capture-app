import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import comp1 from "../Assets/Article/camp1.jpeg";
import comp2 from "../Assets/Article/camp2.jpeg";
import comp3 from "../Assets/Article/camp3.jpeg";

const images = [comp1, comp2, comp3];

function Article() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
        Awareness Campaign for One Nation, One Election <br /> Cross Country Race
      </h1>

      <div className="flex items-center justify-center rounded-lg shadow-lg overflow-hidden h-full max-h-[700px] max-w-[500px] mx-auto">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #fff;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Article;
