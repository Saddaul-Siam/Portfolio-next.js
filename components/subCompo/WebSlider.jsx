import Image from "next/image";
import { useTheme } from "next-themes";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WebSlider = ({ data }) => {
  const { systemTheme, theme, setTheme } = useTheme();
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
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={"auto"}
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
        .map(({ image, name, testimonials, technology }, key) => (
          <SwiperSlide
            key={key}
            className="swiperSlide"
            style={{
              width: "580px",
              height: "520px",
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
            <div className="bg-red-100">
              <p>
                technology :
                {technology.map((techno, key) => (
                  <span key={key}> {techno}</span>
                ))}
              </p>
              <h2>{name}</h2>
              {testimonials.map((testimonial, key) => (
                <p key={key} className="">
                  {testimonial}
                </p>
              ))}
            </div>
          </SwiperSlide>
        ))
        .reverse()}
    </Swiper>
  );
};

export default WebSlider;
