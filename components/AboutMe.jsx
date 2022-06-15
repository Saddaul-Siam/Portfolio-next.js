import Image from "next/image";
import React from "react";
import img from "../img/aboutMe1.png";

const AboutMe = () => {
  return (
    <section
      className="container relative h-[90vh] w-screen -scroll-mt-[70rem] px-5 pt-[70rem] md:mx-auto md:-scroll-mt-[60rem] md:pt-[65rem] lg:-scroll-mt-[70rem] lg:pt-[75rem] xl:-scroll-mt-56 xl:px-0 xl:lg:pt-[20rem] 2xl:scroll-mt-24 2xl:pt-0"
      id="aboutMe"
    >
      <h2 className="flex items-center justify-center font-lora text-3xl font-bold text-orange-400 md:text-5xl">
        About Me
      </h2>
      <div className="grid w-[90vw] grid-cols-2 gap-10 pt-20 md:w-full">
        <div className="col-span-2 flex justify-center md:col-span-1">
          <Image
            className="object-cover"
            src={img}
            height={450}
            width={450}
            alt="Saddaul siam images"
          />
        </div>
        <div className="lex col-span-2 flex-col justify-center space-y-10 md:col-span-1">
          <h2 className="font-lora text-3xl font-semibold">
            I’m Saddaul Siam and I’m a
            <span className="text-orange-400"> Frontend Developer</span>
          </h2>
          <p className="font-lora text-xl">
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
      <div className="absolute bottom-56 right-0 z-0 hidden h-80 w-96 animate-pulse rounded-full bg-cyan-200/50 blur-3xl dark:block dark:bg-pink-200/30 md:block"></div>
    </section>
  );
};

export default AboutMe;
