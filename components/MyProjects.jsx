import PhoneSlider from "./subCompo/PhoneSlider";
import WebSlider from "./subCompo/WebSlider";
import { data } from "../data";

const Testimonials = () => {
  return (
    <section
      id="portfolio"
      className="mt-[70rem] h-screen w-full pb-10 md:mt-[45rem] lg:mt-[45rem] xl:mt-80 xl:dark:bg-gray-800/30 2xl:mt-0 2xl:scroll-mt-5  2xl:bg-gray-100"
    >
      <h2 className="flex justify-center py-5 font-lora text-3xl font-bold text-orange-400 md:pb-10 md:text-5xl ">
        My Resent Projects
      </h2>
      <div className="hidden md:block">
        <WebSlider data={data} />
      </div>
      {/* Phone */}
      <div className="md:hidden">
        <PhoneSlider data={data} />
      </div>
    </section>
  );
};

export default Testimonials;
