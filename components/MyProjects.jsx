import PhoneSlider from "./subCompo/PhoneSlider";
import WebSlider from "./subCompo/WebSlider";
import { data } from "../data";

const Testimonials = () => {
  return (
    <section
      id="portfolio"
      className="h-screen w-full md:bg-gray-100 md:dark:bg-gray-800/30 pb-32 pt-[70rem] md:pt-0 md:scroll-mt-0"
    >
      <h2 className="text-3xl md:text-5xl font-bold font-lora text-orange-400 flex justify-center py-3 md:py-20 ">
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
