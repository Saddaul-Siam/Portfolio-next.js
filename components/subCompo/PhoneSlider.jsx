import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PhoneSlider = ({ data }) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <Swiper
      style={{
        padding: 50,
        width: "100%",
        paddingTop: "50px",
        paddingBottom: " 50px",
      }}
      effect={"coverflow"}
      grabCursor={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      // slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {data
        .map(({ image, name, testimonials, technology, links }, key) => (
          <SwiperSlide
            key={key}
            className="swiperSlide"
            style={{
              width: "350px",
              height: "630px",
              background: `${currentTheme === "dark" ? "#1e293b" : "white"}`,
              padding: "15px",
              borderRadius: "20px",
              boxShadow: "5px 5px 10px -8px #000000",
            }}
          >
            <div className="">
              <Image
                className="object-cover rounded-2xl w-full"
                width={580}
                height={360}
                src={image}
                alt=""
              />
              <div className="py-4 flex flex-wrap">
                {technology.map((techno, key) => (
                  <div
                    key={key}
                    className={`${techno.bg} text-white py-0.5 px-3 rounded-3xl mx-0.5 font-lora my-1`}
                  >
                    {techno.title}
                  </div>
                ))}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {name}
              </h2>
              <div className="pt-4">
                {testimonials.map((testimonial, key) => (
                  <p
                    key={key}
                    className="pb-2 text-gray-800 dark:text-gray-300"
                  >
                    {testimonial}
                  </p>
                ))}
              </div>
              <div className="pt-1 space-x-1">
                {links.map(({ title, link, bg, shadow }, key) => (
                  <Link href={link} key={key} passHref>
                    <button
                      className={`py-1 px-3 rounded-3xl text-white ${bg} ${shadow}`}
                    >
                      {title}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))
        .reverse()}
    </Swiper>
  );
};

export default PhoneSlider;
