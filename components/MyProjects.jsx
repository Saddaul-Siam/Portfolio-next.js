import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";

const Testimonials = () => {
  const data = [
    {
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      name: "Name 1",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi lobortis, efficitur libero vel, consequat ipsum. Donec venenatis tortor non rhoncus aliquam. Donec hendrerit justo ac tortor accumsan, nec volutpat tortor scelerisque. ",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-2.jpg",
      name: "Name 2",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi lobortis, efficitur libero vel, consequat ipsum. Donec venenatis tortor non rhoncus aliquam. Donec hendrerit justo ac tortor accumsan, nec volutpat tortor scelerisque. ",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-3.jpg",
      name: "Name 3",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi lobortis, efficitur libero vel, consequat ipsum. Donec venenatis tortor non rhoncus aliquam. Donec hendrerit justo ac tortor accumsan, nec volutpat tortor scelerisque. ",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-4.jpg",
      name: "Name 4",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi lobortis, efficitur libero vel, consequat ipsum. Donec venenatis tortor non rhoncus aliquam. Donec hendrerit justo ac tortor accumsan, nec volutpat tortor scelerisque. ",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-5.jpg",
      name: "Name 5",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi lobortis, efficitur libero vel, consequat ipsum. Donec venenatis tortor non rhoncus aliquam. Donec hendrerit justo ac tortor accumsan, nec volutpat tortor scelerisque. ",
    },
    {
      image: "https://swiperjs.com/demos/images/nature-6.jpg",
      name: "Name 6",
      testimony:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi lobortis, efficitur libero vel, consequat ipsum. Donec venenatis tortor non rhoncus aliquam. Donec hendrerit justo ac tortor accumsan, nec volutpat tortor scelerisque. ",
    },
  ];

  return (
    <section id="portfolio" className="pb-32">
      <Swiper
        style={{
          padding: 50,
          width: "100%",
          paddingTop: "50px",
          paddingBottom: " 50px",
        }}
        effect={"coverflow"}
        grabCursor={true}
        // centeredSlides={true}
        // loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item, key) => (
          <SwiperSlide
            key={key}
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "630px",
              height: "520px",
              padding: 10,
              margin: 10,
            }}
          >
            {/* <div className=" "> */}
            <Image
              className="object-cover rounded-2xl w-full"
              width={580}
              height={360}
              src={item.image}
              alt=""
            />
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
