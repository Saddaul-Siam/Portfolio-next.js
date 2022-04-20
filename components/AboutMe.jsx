import Image from "next/image";
import React from "react";
import img from "../img/aboutMe1.png";
import img2 from "../img/aboutMe2.png";
import img3 from "../img/aboutMe3.png";

const AboutMe = () => {
  return (
    <section className="h-[90vh] w-full container mx-auto" id="aboutMe">
      <h2 className="text-3xl md:text-5xl font-bold font-lora text-orange-400 flex justify-center pt-10 md:pt-0">
        About Me
      </h2>
      <div className="grid grid-cols-2 pt-24">
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
            <button className="button">Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
