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
    <section className="h-[90vh] w-screen container mx-auto pt-[50rem] md:pt-5 scroll-mt-40 px-5" id="skills">
      <h2 className="text-3xl md:text-5xl font-bold font-lora text-orange-400 flex justify-center">
        Skills & Experience
      </h2>
      <div className="grid grid-cols-2 md:gap-18 gap-10 pt-20">
        <div className="col-span-2 md:col-span-1 flex flex-wrap gap-9">
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
    </section>
  );
};

export default SkillsAndExperience;
