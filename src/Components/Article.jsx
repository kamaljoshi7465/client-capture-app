import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import comp1 from "../Assets/Article/camp1.jpeg";
import comp2 from "../Assets/Article/camp2.jpeg";
import comp3 from "../Assets/Article/camp3.jpeg";
import comp4 from "../Assets/Article/camp4.jpeg";
import comp5 from "../Assets/Article/camp5.jpeg";
import comp6 from "../Assets/Article/camp6.jpeg";
import comp7 from "../Assets/Article/camp7.jpeg";
import comp8 from "../Assets/Article/camp8.jpeg";
import comp9 from "../Assets/Article/camp9.jpeg";
import comp10 from "../Assets/Article/camp10.jpeg";
import comp11 from "../Assets/Article/camp11.jpeg";
import comp12 from "../Assets/Article/camp12.jpeg";
import comp13 from "../Assets/Article/camp13.jpeg";
import comp14 from "../Assets/Article/camp14.jpeg";
import comp15 from "../Assets/Article/camp15.jpeg";
import comp16 from "../Assets/Article/camp16.jpeg";
import comp17 from "../Assets/Article/camp17.jpeg";
import comp18 from "../Assets/Article/camp18.jpeg";

const images = [
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  comp6,
  comp7,
  comp8,
  comp9,
  comp10,
  comp11,
  comp12,
  comp13,
  comp14,
  comp15,
  comp16,
  comp17,
  comp18,
];

function Article() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
        Awareness Campaign for One Nation, One Election <br /> Cross Country
        Race
      </h1>

      <div className="flex items-center justify-center rounded-lg shadow-lg overflow-hidden h-full max-h-[700px] max-w-[500px] mx-auto">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              {/* <img src={img} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" /> */}
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[500px] object-contain mx-auto"
              />
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
      {/* YouTube Videos Section */}
      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Watch Our Campaign Videos
        </h2>
        <div className="flex flex-col gap-6">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/HyXs8wtlrJU"
            title="One Nation One Election Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/retmYQ-OY8w"
            title="One Nation One Election Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/e7zOW8pbN08"
            title="One Nation One Election Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Watch More Button */}
        <div className="text-center mt-4">
          <a
            href="https://www.youtube.com/channel/UCH2byaiMI5q9em2CbHfbwWg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#df670e] text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-700 transition duration-300"
          >
            🔗 Watch More on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

export default Article;
