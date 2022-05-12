import Image from "next/image";
import Link from "next/link";
import fontEnd from "../img/font-end.svg";
import backEnd from "../img/back-end.svg";
import design from "../img/desing.svg";
import developer from "../img/developer.svg";

const Services = () => {
  return (
    <section
      className="pt-[450px] md:pt-1 -scroll-mt-60 md:scroll-mt-40 container md:mx-auto lg:h-[90vh] "
      id="services"
    >
      <div className="grid grid-cols-3 gap-4 mx-5 xl:mx-0">
        <div className="col-span-3 md:col-span-1 space-y-5 mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold font-lora">
            My Awesome
          </h2>
          <h2 className="text-5xl font-bold font-lora text-orange-400">
            Services
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-400 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ipsam
            impedit in, sapiente laudantium, totam placeat iste excepturi labore
            tenetur repellat consectetur
          </p>
          <div className="pt-10">
            <a
              href="https://drive.google.com/file/d/1qDzW2iLWnxXM2Md9tFw20WdZftirnA0s/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Download Resume</button>
            </a>
          </div>
        </div>

        <div className="h-[80vh] col-span-3 md:col-span-2 relative space-y-5 md:space-y-0 ">
          <div className="h-auto md:h-72 w-[90vw] md:w-60 md:absolute md:left-2/4 lg:left-1/3 xl:left-96 border-4 dark:border-2 border-orange-400 rounded-2xl p-5 shadow-md shadow-orange-400/50 z-20">
            <Image src={developer} width={300} height={200} alt="" />
            <div className="flex flex-col justify-center items-center space-y-3 ">
              <h4 className="font-lora font-semibold text-xl pt-3">
                Developer
              </h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Html, Css, JavaScript, <br /> React, Nodejs, Express
              </p>
            </div>
          </div>

          <div className="h-auto md:h-72 w-[90vw] md:w-60 md:absolute left-0 xl:left-32 top-48 border-4 dark:border-2 border-orange-400 rounded-2xl p-5 shadow-md shadow-orange-400/50 z-30">
            <Image className="" src={design} width={300} height={200} alt="" />
            <div className="flex flex-col justify-center items-center space-y-3 ">
              <h4 className="font-lora font-semibold text-xl pt-3">Design</h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd
              </p>
            </div>
          </div>

          <div className="h-auto md:h-72 w-[90vw] md:w-60 md:absolute md:-right-60 lg:-right-5 xl:-right-14 2xl:right-[120px] top-48 border-4 dark:border-2 border-orange-400 rounded-2xl p-5 shadow-md shadow-orange-400/50 z-40">
            <Image className="" src={fontEnd} width={300} height={200} alt="" />
            <div className="flex flex-col justify-center items-center space-y-3 ">
              <h4 className="font-lora font-semibold text-xl pt-3">
                FontEnd Developer
              </h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Html, Css, JavaScript, React
              </p>
            </div>
          </div>

          <div className="h-auto md:h-72 w-[90vw] md:w-60 md:absolute md:left-2/4 lg:left-1/3 bottom-0 2xl:bottom-40 xl:left-96 border-4 dark:border-2 border-orange-400 rounded-2xl p-5 shadow-md shadow-orange-400/50 z-50">
            <Image className="" src={backEnd} width={300} height={200} alt="" />
            <div className="flex flex-col justify-center items-center space-y-3 ">
              <h4 className="font-lora font-semibold text-xl pt-3">
                BackEnd Developer
              </h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Nodejs, Express, MongoDB, Mongoose{" "}
              </p>
            </div>
          </div>

          {/* <div className="animate-pulse blur-3xl w-96 h-80 rounded-full absolute bottom-40 md:top-48  md:left-[300px] bg-pink-200/50 md:bg-pink-200 dark:bg-cyan-200/30 z-10"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
