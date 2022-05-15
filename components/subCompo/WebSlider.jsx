import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WebSlider = ({ data }) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <Swiper
      style={{
        padding: 50,
        width: "100%",
        paddingTop: "50px",
        paddingBottom: " 50px",
        // cursor: "pointer",
      }}
      effect={"coverflow"}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 40,
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
    >
      {data
        .map(({ image, name, testimonials, technology, links }) => (
          <SwiperSlide
            key={name}
            className="swiperSlide"
            style={{
              width: "580px",
              height: "650px",
              background: `${currentTheme === "dark" ? "#1e293b" : "white"}`,
              padding: "15px",
              borderRadius: "20px",
              boxShadow: "5px 5px 10px -8px #000000",
            }}
          >
            <Image
              className="object-cover rounded-2xl w-full"
              width={580}
              height={360}
              src={image}
              alt=""
            />
            <div className="bg-red-00">
              <div className="py-4 flex flex-wrap">
                {technology.map((techno, key) => (
                  <div
                    key={key + "key"}
                    className={`${techno?.bg} text-white py-1 px-3 rounded-3xl mx-0.5 font-lora`}
                  >
                    {techno?.title}
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
                {links.map((link, key) => (
                  <Link href={link.link} passHref key={key}>
                    <button
                      className={`${link.bg === "code" ? "code" : "live"}`}
                    >
                      {link.title}
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

export default WebSlider;
