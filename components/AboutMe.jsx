import Image from "next/image";
import React from "react";
import img from "../img/aboutMe1.png";

const AboutMe = () => {
  return (
    <section
      className="h-[90vh] w-screen container md:mx-auto relative pt-[72rem] md:pt-[65rem] lg:pt-[75rem] xl:lg:pt-[20rem] 2xl:pt-0 px-5 xl:px-0 -scroll-mt-[70rem] md:-scroll-mt-[60rem] lg:-scroll-mt-[70rem] xl:-scroll-mt-56 2xl:scroll-mt-24"
      id="aboutMe"
    >
      <h2 className="text-3xl md:text-5xl font-bold font-lora text-orange-400 flex justify-center items-center">
        About Me
      </h2>
      <div className="w-[90vw] md:w-full grid grid-cols-2 gap-10 pt-20">
        <div className="col-span-2 md:col-span-1 flex justify-center">
          <Image
            className="object-cover"
            src={img}
            height={450}
            width={450}
            alt="Saddaul siam images"
          />
        </div>
        <div className="col-span-2 md:col-span-1 space-y-10 lex flex-col justify-center">
          <h2 className="font-lora font-semibold text-3xl">
            I’m Saddaul Siam and I’m a
            <span className="text-orange-400"> Frontend Developer</span>
          </h2>
          <p className="text-xl font-lora">
            I’m a Front End Web developer who is passionate about making
            error-free websites with 100% client satisfaction. I love to solve
            real-world problems. I am strategic, goal-oriented, and always work
            with an end goal in mind. I pride myself on doing quality work and
            maintaining excellent communication. Most of the time I work with
            JavaScript ReactJS
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
      <div className="hidden md:block bottom-56 right-0 dark:block animate-pulse blur-3xl w-96 h-80 rounded-full absolute dark:bg-pink-200/30 bg-cyan-200/50 z-0"></div>
    </section>
  );
};

export default AboutMe;
