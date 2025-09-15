import { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import BannerImg from "../../assets/banner/Banner.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: BannerImg,
    title: "Fresh & Healthy",
    subtitle: "Organic Food",
    discount: "30% OFF",
    description: "Free shipping on all your order, we deliver, you enjoy",
    buttonText: "Shop now",
  },
  {
    id: 2,
    image: BannerImg,
    title: "Fresh & Healthy",
    subtitle: "Organic Food",
    discount: "30% OFF",
    description: "Free shipping on all your order, we deliver, you enjoy",
    buttonText: "Shop now",
  },
  {
    id: 3,
    image: BannerImg,
    title: "Fresh & Healthy",
    subtitle: "Organic Food",
    discount: "30% OFF",
    description: "Free shipping on all your order, we deliver, you enjoy",
    buttonText: "Shop now",
  },
];

const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params &&
      swiperRef.current.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="w-full relative  bg-[#f8fff9]">
      <div className="container mx-auto lg:h-[620px] relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            // The class names here must be wrapped in quotes
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col items-center justify-between gap-10 px-4 lg:flex-row md:px-20 py-14 md:py-20">
                <div className="flex justify-center w-full lg:w-1/2">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="object-contain w-full  drop-shadow-md"
                  />
                </div>
                <div className="w-full space-y-5  text-center lg:w-1/2 md:text-left">
                  <h4 className="font-semibold tracking-wide text-green-600 uppercase ">
                    Welcome to Shopery
                  </h4>
                  <h1 className="text-4xl font-extrabold leading-snug text-gray-900 md:text-6xl lg:text-5xl xl:text-6xl  ">
                    {slide.title} <br />
                    <span className="text-black">{slide.subtitle}</span>
                  </h1>
                  <p className="text-lg text-gray-600 md:text-xl">
                    Sale up to{" "}
                    <span className="font-bold text-orange-500">
                      {slide.discount}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 md:text-base">
                    {slide.description}
                  </p>
                  <Link to={"#"}>
                    <button className="flex mt-3 items-center gap-2 py-3 mx-auto text-white transition duration-300 bg-green-500 rounded-full px-7 hover:bg-green-600 md:mx-0">
                      Shop Now <span className="text-lg">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white border border-green-500 p-2 rounded-full text-green-600 hover:bg-green-100 shadow-md">
          <FaChevronLeft />
        </button>
        <button className="custom-next absolute top-1/2 right-4 lg:right-3 xl:right-1 -translate-y-1/2 z-10 bg-white border border-green-500 p-2 rounded-full text-green-600 hover:bg-green-100 shadow-md">
          <FaChevronRight />
        </button>

        {/* Dot styling */}
        <style >{`
        .swiper-pagination-bullet {
          background-color: #86efac; /* Default color for inactive dots */
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background-color: #22c55e; /* Active dot color */
        }
      `}</style>
      </div>

    </div>
  );
};

export default Banner;