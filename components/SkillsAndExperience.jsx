import React, { useEffect, useState } from "react";
import SkillsIcons from "./SkillsIcons";

const SkillsAndExperience = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/icon")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <section
      className="h-[90vh] w-screen container mx-auto pt-[50rem] md:pt-5 scroll-mt-40 px-5 relative"
      id="skills"
    >
      <h2 className="text-3xl md:text-5xl font-bold font-lora text-orange-400 flex justify-center">
        Skills & Experience
      </h2>
      <div className="grid grid-cols-2 md:gap-18 gap-10 pt-28 ">
        <div className="col-span-2 md:col-span-1 flex flex-wrap gap-9 z-10">
          {skills.map((skill, i) => (
            <SkillsIcons key={i} skill={skill} />
          ))}
        </div>
        <div className="col-span-2 md:col-span-1 space-y-10">
          <div className="flex gap-10">
            <h2 className="font-semibold text-xl text-purple-700">2021</h2>
            <div className="">
              <h4 className="font-semibold text-xl">FontEnd Developer</h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Programming Hero
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <h2 className="font-semibold text-xl text-purple-700">2022</h2>
            <div className="">
              <h4 className="font-semibold text-xl">Full Stack Developer</h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Programming Hero
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-28 gap-20">
        <div className="flex flex-col justify-content items-center space-y-2">
          <div className="h-20 w-20 ring-4 ring-purple-400/70 ring-offset-8 ring-offset-purple-200 flex justify-center items-center rounded-full dark:bg-gray-700 bg-white shadow-lg hover:shadow-gray-400 dark:hover:shadow-gray-600 hover:scale-125 duration-500 cursor-pointer p-1.5">
            <h4 className="text-2xl font-extrabold font-lora">2+</h4>
          </div>
          <p className="capitalize text-md font-medium pt-3">years</p>
          <p className="text-orange-400 text-lg">Experience</p>
        </div>

        <div className="flex flex-col justify-content items-center space-y-2">
          <div className="h-20 w-20 ring-4 ring-purple-400/70 ring-offset-8 ring-offset-purple-200 flex justify-center items-center rounded-full dark:bg-gray-700 bg-white shadow-lg hover:shadow-gray-400 dark:hover:shadow-gray-600 hover:scale-125 duration-500 cursor-pointer p-1.5">
            <h4 className="text-2xl font-extrabold font-lora">20+</h4>
          </div>
          <p className="capitalize text-md font-medium pt-3">completed</p>
          <p className="text-orange-400 text-lg">Projects</p>
        </div>

        <div className="flex flex-col justify-content items-center space-y-2">
          <div className="h-20 w-20 ring-4 ring-purple-400/70 ring-offset-8 ring-offset-purple-200 flex justify-center items-center rounded-full dark:bg-gray-700 bg-white shadow-lg hover:shadow-gray-400 dark:hover:shadow-gray-600 hover:scale-125 duration-500 cursor-pointer p-1.5">
            <h4 className="text-2xl font-extrabold font-lora">2+</h4>
          </div>
          <p className="capitalize text-md font-medium pt-3">companies</p>
          <p className="text-orange-400 text-lg">Work</p>
        </div>
      </div>

      {/* Shadow div */}
      <div className="top-28 left-28 hidden dark:block animate-pulse blur-3xl w-96 h-80 rounded-full absolute bg-pink-200 dark:bg-pink-200/30 z-0"></div>
      <div className="top-28 left-28 dark:hidden animate-pulse blur-3xl w-96 h-80 rounded-full absolute bg-cyan-200/70 dark:bg-cyan-200/30 z-0"></div>
      <div className="bottom-56 right-0 dark:hidden animate-pulse blur-3xl w-96 h-80 rounded-full absolute bg-pink-200/70 dark:bg-pink-200/30 z-0"></div>
      <div className="bottom-56 right-0 hidden dark:block animate-pulse blur-3xl w-96 h-80 rounded-full absolute bg-cyan-200/30 dark:bg-cyan-200/10 z-0"></div>
    </section>
  );
};

export default SkillsAndExperience;
