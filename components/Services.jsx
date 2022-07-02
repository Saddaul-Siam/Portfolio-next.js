import Image from "next/image";
import Link from "next/link";
import fontEnd from "../img/font-end.svg";
import backEnd from "../img/back-end.svg";
import design from "../img/desing.svg";
import developer from "../img/developer.svg";

const Services = () => {
  return (
    <section
      className="container w-screen -scroll-mt-60 pt-[450px] md:mx-auto md:scroll-mt-40 md:pt-1 lg:h-[90vh] "
      id="services"
    >
      <div className="grid grid-cols-3 gap-4 px-5 xl:mx-0">
        <div className="col-span-3 mb-10 xl:col-span-1">
          <div className="w-[90vw] space-y-5 md:w-auto">
            <h2 className="font-lora text-4xl font-bold lg:text-5xl">
              My Awesome
            </h2>
            <h2 className="font-lora text-5xl font-bold text-orange-400">
              Services
            </h2>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400">
              I’m a Front End Web developer who is passionate about making
              error-free websites with 100% client satisfaction. I love to solve
              real-world problems. I am strategic, goal-oriented, and always
              work with an end goal in mind. I pride myself on doing quality
              work. Most of the time I work with JavaScript ReactJS
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
        </div>

        <div className="relative col-span-3 h-[80vh] space-y-5 xl:md:col-span-2">
          <div className="z-20 h-auto w-[90vw] rounded-2xl border-4 border-orange-400 p-5 shadow-md shadow-orange-400/50 dark:border-2 md:flex md:w-[95vw] md:justify-around lg:h-72 xl:absolute xl:left-96 xl:w-60 xl:flex-col">
            <Image src={developer} width={300} height={200} alt="" />
            <div className="flex flex-col items-center justify-center space-y-3">
              <h4 className="link link-underline link-underline-black pt-3 font-lora text-xl font-semibold">
                Developer
              </h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Html, Css, JavaScript, <br /> React, Nodejs, Express
              </p>
            </div>
          </div>

          <div className="left-0 top-48 z-30 h-auto  w-[90vw] rounded-2xl border-4 border-orange-400 p-5 shadow-md shadow-orange-400/50 dark:border-2 md:flex md:h-72 md:w-[95vw] md:justify-around xl:absolute xl:left-32 xl:w-60 xl:flex-col">
            <Image className="" src={design} width={300} height={200} alt="" />
            <div className="flex flex-col items-center justify-center space-y-3 ">
              <h4 className="link link-underline link-underline-black pt-3 font-lora text-xl font-semibold">
                Design
              </h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Figma, Sketch, Photoshop, <br /> Adobe Illustrator, Adobe xd
              </p>
            </div>
          </div>

          <div className="top-48 z-40 h-auto w-[90vw] rounded-2xl border-4 border-orange-400 p-5 shadow-md shadow-orange-400/50 dark:border-2 md:flex md:h-72 md:w-[95vw] md:justify-around xl:absolute xl:-right-14 xl:w-60 xl:flex-col 2xl:right-[115px]">
            <Image className="" src={fontEnd} width={300} height={200} alt="" />
            <div className="flex flex-col items-center justify-center space-y-3 ">
              <h4 className="link link-underline link-underline-black pt-3 font-lora text-xl font-semibold">
                FontEnd
              </h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Html, Css, JavaScript, React, Next js
              </p>
            </div>
          </div>

          <div className="bottom-0 z-50 h-auto w-[90vw]  rounded-2xl border-4 border-orange-400 p-5 shadow-md shadow-orange-400/50 dark:border-2 md:flex md:h-72 md:w-[95vw] md:justify-around xl:absolute xl:left-96 xl:w-60 xl:flex-col 2xl:bottom-40">
            <Image className="" src={backEnd} width={300} height={200} alt="" />
            <div className="flex flex-col items-center justify-center space-y-3 ">
              <h4 className="link link-underline link-underline-black pt-3 font-lora text-xl font-semibold">
                BackEnd
              </h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Nodejs, Express, MongoDB, Mongoose
              </p>
            </div>
          </div>

          <div className="absolute bottom-40 z-10 h-64 w-64  animate-pulse rounded-full bg-pink-200/50 blur-3xl dark:bg-cyan-200/30  md:top-48 md:left-[300px] md:h-80 md:w-96 md:bg-pink-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
