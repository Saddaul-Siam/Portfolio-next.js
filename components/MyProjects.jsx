import PhoneSlider from "./subCompo/PhoneSlider";
import WebSlider from "./subCompo/WebSlider";
import { data } from "../data";

const Testimonials = () => {
  return (
    <section
      id="portfolio"
      className="h-screen w-full 2xl:bg-gray-100 xl:dark:bg-gray-800/30 pb-10 mt-[70rem] md:mt-[45rem] lg:mt-[30rem] xl:mt-80 2xl:mt-0  md:scroll-mt-0"
    >
      <h2 className="text-3xl md:text-5xl font-bold font-lora text-orange-400 flex justify-center py-5 md:pb-10 ">
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
