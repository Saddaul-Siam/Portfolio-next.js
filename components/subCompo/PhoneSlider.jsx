import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PhoneSlider = ({ data }) => {
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
      {data.map(({ image, name, testimonials, technology }, key) => (
        <SwiperSlide
          key={key}
          className="swiperSlide"
          style={{
            width: "350px",
            height: "500px",
          }}
        >
          <div className=" ">
            <Image
              className="object-cover rounded-2xl w-full"
              width={580}
              height={360}
              src={image}
              alt=""
            />
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
      ))}
    </Swiper>
  );
};

export default PhoneSlider;
