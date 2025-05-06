import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const images = [
  'https://i.postimg.cc/4x1XKNFc/spotify.avif',
  'https://i.postimg.cc/RVKSBT7X/netflix.png',
  'https://i.postimg.cc/7LYwS8pW/zoom.jpg',
  'https://i.postimg.cc/h47gL05c/masterclsss.webp',
  'https://i.postimg.cc/fLVsg7W7/canva.webp',
  'https://i.postimg.cc/25cmw9Y8/chat-gpt.webp',
  'https://i.postimg.cc/CMZMv0zy/microsoft365.webp',
  'https://i.postimg.cc/02ff0syJ/github.png',
  'https://i.postimg.cc/CMWhX2qR/adobe.jpg',
  'https://i.postimg.cc/d3dYJqyL/Coursera-Plus.webp',
];

const HeaderSlider = () => {
  return (

    <div className="w-full rounded-2xl  mx-auto py-12 md:px-20 bg-gradient-to-r from-purple-700 to-indigo-700">
      <h2 className="text-white text-3xl md:text-4xl text-center mb-6 md:mb-10 font-semibold">
        Our Popular Subscriptions
      </h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="max-w-xs rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-64 md:w-full mx-auto h-54 md:h-64 object-fit rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
