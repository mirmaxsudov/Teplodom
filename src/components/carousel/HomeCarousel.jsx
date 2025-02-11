import { v4 as uuid } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";

import B1 from "../../assets/images/carousel/b1.png";
import B2 from "../../assets/images/carousel/b2.png";
import B3 from "../../assets/images/carousel/b3.png";
import B4 from "../../assets/images/carousel/b4.png";
import B5 from "../../assets/images/carousel/b5.png";
import B6 from "../../assets/images/carousel/b6.png";
import B7 from "../../assets/images/carousel/b7.png";
import B8 from "../../assets/images/carousel/b8.png";
import B9 from "../../assets/images/carousel/b9.png";

import F1 from "../../assets/images/carousel/f1.png";
import F2 from "../../assets/images/carousel/f2.png";
import F3 from "../../assets/images/carousel/f3.png";
import F4 from "../../assets/images/carousel/f4.png";
import F5 from "../../assets/images/carousel/f5.png";
import F6 from "../../assets/images/carousel/f6.png";
import F7 from "../../assets/images/carousel/f7.png";
import F8 from "../../assets/images/carousel/f8.png";
import F9 from "../../assets/images/carousel/f9.png";

import { useState, useRef } from "react";

const HomeCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [smallSwiperInstance, setSmallSwiperInstance] = useState(null);
  const dotsContainerRef = useRef(null);
  const dotsSmallContainerRef = useRef(null);

  const slides = [
    {
      id: uuid(),
      title: "Пеноплекс Основа",
      desc: "Пеноплэкс» — российская компания, производитель тепло- и гидроизоляционных, а также декоративно-отделочных материалов на основе полимеров, основной вид продукции — теплоизоляционные плиты из экструзионного пенополистирола",
      bg: B1,
      fg: F1,
    },
    {
      id: uuid(),
      title: "Гипсакартон",
      desc: "Cтроительный материал, представляющий собой лист, состоящий из двух слоёв строительной бумаги (картона) и сердечника из слоя затвердевшего гипсового теста с наполнителями.",
      bg: B2,
      fg: F2,
    },
    {
      id: uuid(),
      title: "Basalt wool тепло и тихо",
      desc: "Базальтовое волокно представляет собой материал, изготовленный из чрезвычайно тонких волокон базальта, который состоит из минералов плагиоклаза, пироксена и оливина. Он похож на стекловолокно.",
      bg: B3,
      fg: F3,
    },
    {
      id: uuid(),
      title: "Финская Фанера",
      desc: "многослойный строительный материал, изготавливаемый путём склеивания специально подготовленного шпона. Для повышения прочности фанеры слои шпона накладываются так.",
      bg: B4,
      fg: F4,
    },
  ];

  const mobileSlides = [
    {
      id: uuid(),
      title: "Штукатурка гипсовая",
      desc: "пастообразный или порошковый материал, применяемый для",
      bg: B5,
      fg: F5,
    },
    {
      id: uuid(),
      title: "Пеноплекс Основа",
      desc: "производитель тепло- и гидроизоляционных материалов.",
      bg: B6,
      fg: F6,
    },
    {
      id: uuid(),
      title: "Гипсакартон",
      desc: "Cтроительный материал, представляющий собой лист состоящий из двух слоёв",
      bg: B7,
      fg: F7,
    },
    {
      id: uuid(),
      title: "Basalt wool",
      desc: "Базальтовое волокно представляет собой материал, изготовленный из чрезвычайно тонких волокон",
      bg: B8,
      fg: F8,
    },
    {
      id: uuid(),
      title: "Финская Фанера",
      desc: "Этоть материал изготавливаемый путём склеивания специально подготов ленного шпона.",
      bg: B9,
      fg: F9,
    },
  ];

  const updateDots = (activeIndex) => {
    if (dotsContainerRef.current) {
      const dots = dotsContainerRef.current.children;
      for (let i = 0; i < dots.length; i++) {
        if (i === activeIndex) {
          dots[i].classList.add("bg-white");
          dots[i].classList.remove("bg-[#FFFCF480]");
        } else {
          dots[i].classList.add("bg-[#FFFCF480]");
          dots[i].classList.remove("bg-white");
        }
      }
    }
  };

  const smallUpdateDots = (activeIndex) => {
    if (dotsSmallContainerRef.current) {
      const dots = dotsSmallContainerRef.current.children;
      for (let i = 0; i < dots.length; i++) {
        if (i === activeIndex) {
          dots[i].classList.add("bg-[#A1A1A1]");
          dots[i].classList.add("w-[24px]");
          dots[i].classList.remove("w-[8px]");
          dots[i].classList.remove("bg-[#DEDEDE]");
        } else {
          dots[i].classList.add("bg-[#DEDEDE]");
          dots[i].classList.remove("w-[24px]");
          dots[i].classList.add("w-[8px]");
          dots[i].classList.remove("bg-[#A1A1A1]");
        }
      }
    }
  };

  const handleDotClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
      updateDots(index);
    }
  };

  const handleSmallDotClick = (index) => {
    if (smallSwiperInstance) {
      smallSwiperInstance.slideToLoop(index);
      smallUpdateDots(index);
    }
  };

  return (
    <section className="home-carousel-section">
      <div className="container mx-auto">
        {/* For Mobile */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            speed={500}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => {
              smallUpdateDots(swiper.realIndex);
            }}
            onSwiper={(swiper) => {
              setSmallSwiperInstance(swiper);
              smallUpdateDots(swiper.realIndex);
            }}
            className="h-[227px] relative rounded-[20px] md:hidden"
          >
            {mobileSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="h-[247px] rounded-[20px] p-[10px] pl-[20px] sm:p-[20px] sm:pl-[20px]"
                  style={{
                    backgroundImage: `url(${slide.bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="grid h-full">
                    <div className="grid grid-cols-4 md:grid-cols-3 h-full gap-2 md:gap-16">
                      <div className="left col-span-2 md:col-span-2 flex flex-col justify-start">
                        <h1 className="text-[20px] text-[#fff] font-bold mb-[8px]">
                          {slide.title}
                        </h1>
                        <p className="text-[#fff] font-medium text-[14px] md:text-[24px]">
                          {slide.desc}
                        </p>
                      </div>
                      <div className="right col-span-2 md:col-span-1 flex items-center justify-center">
                        <div className="img-wrapper w-[160px] h-[190px] md:max-w-[400px] md:max-h-[400px] flex items-center justify-center">
                          <img
                            className="w-full h-full object-contain"
                            src={slide.fg}
                            alt={slide.title}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center mt-4">
            <div
              ref={dotsSmallContainerRef}
              className="flex gap-1 absolute z-50"
            >
              {Array.from({ length: mobileSlides.length }, (_, index) => (
                <span
                  key={index}
                  className="w-[8px] h-[8px] inline-block rounded-full bg-[#DEDEDE] cursor-pointer duration-300 ease-in-out transition-all"
                  onClick={() => handleSmallDotClick(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        {/* For Desctop */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={500}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => {
            updateDots(swiper.realIndex);
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            updateDots(swiper.realIndex);
          }}
          className="h-[307px] md:h-[450px] hidden md:block relative rounded-[20px]"
        >
          <div
            ref={dotsContainerRef}
            className="flex gap-1 absolute z-50 bottom-10 left-8 md:bottom-16 md:left-12"
          >
            {Array.from({ length: slides.length }, (_, index) => (
              <span
                key={index}
                className="w-[34px] h-1 inline-block rounded-full bg-[#FFFCF480] cursor-pointer"
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>

          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="h-[307px] md:h-[450px] rounded-[20px] p-[50px]"
                style={{
                  backgroundImage: `url(${slide.bg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="grid h-full">
                  <div className="grid grid-cols-4 md:grid-cols-3 h-full gap-2 md:gap-16">
                    <div className="left col-span-2 md:col-span-2 flex flex-col justify-start">
                      <h1 className="text-[20px] md:text-[48px] text-[#fff] font-bold mb-[30px]">
                        {slide.title}
                      </h1>
                      <p className="text-[#fff] font-medium text-[14px] md:text-[24px]">
                        {slide.desc}
                      </p>
                    </div>
                    <div className="right col-span-2 md:col-span-1 flex items-center justify-center">
                      <div className="img-wrapper md:max-w-[400px] md:max-h-[400px] flex items-center justify-center">
                        <img
                          className="w-full h-full object-contain"
                          src={slide.fg}
                          alt={slide.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCarousel;
