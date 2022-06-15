import React, { useEffect, useState } from "react";
import SkillsIcons from "./subCompo/SkillsIcons";

const SkillsAndExperience = () => {
  const [skills, setSkills] = useState([
    { title: "html", img: "https://i.ibb.co/nBcbjxk/html.png" },
    { title: "css", img: "https://i.ibb.co/2gzBM6W/css.png" },
    { title: "javascript", img: "https://i.ibb.co/JqLRRHC/javascript.png" },
    {
      title: "typescript",
      img: "https://pics.freeicons.io/uploads/icons/png/14678610731551953708-512.png",
    },
    {
      title: "react",
      img: "https://pics.freeicons.io/uploads/icons/png/20167174151551942641-512.png",
    },
    {
      title: "next.js",
      img: "https://i.ibb.co/hLLFDgS/nextjs-boilerplate-logo.png",
    },
    { title: "node", img: "https://i.ibb.co/8XKBGTV/node.png" },
    {
      title: "express",
      img: "https://pics.freeicons.io/uploads/icons/png/8416740941580802960-512.png",
    },
    { title: "mongodb", img: "https://i.ibb.co/2Sg8QBm/mongodb.png" },
    { title: "mongoose", img: "https://i.ibb.co/m0XpLGp/mongoose.png" },
    { title: "api", img: "https://i.ibb.co/gv05YYb/api.png" },
    { title: "redux", img: "https://i.ibb.co/8mb4nn6/redux.png" },
    { title: "firebase", img: "https://i.ibb.co/D5g2LZN/firebase.jpg" },
    {
      title: "Sanity",
      img: "https://pics.freeicons.io/uploads/icons/png/17521277461551942823-512.png",
    },
    { title: "Socket.io", img: "https://i.ibb.co/fQMRZZ1/socket-io.png" },
    { title: "figma", img: "https://i.ibb.co/C5pjWmt/figma.png" },
    { title: "material UI", img: "https://i.ibb.co/sCnrMCb/mu5.png" },
    { title: "bootstrap", img: "https://i.ibb.co/ch2vc83/bootstrap.png" },
    { title: "tailwind", img: "https://i.ibb.co/svS976q/tailwind.jpg" },
    { title: "git", img: "https://i.ibb.co/DtvtppX/git.png" },
    { title: "photoshop", img: "https://i.ibb.co/VSVQXvh/photoshop.png" },
  ]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/icon")
  //     .then((res) => res.json())
  //     .then((data) => setSkills(data));
  // }, []);
  return (
    <section
      className="w-scree relative mx-5 h-screen -scroll-mt-[50rem] pt-[50rem] md:-scroll-mt-[42rem] md:pt-[45rem] lg:-scroll-mt-[62rem] lg:pt-[65rem] xl:container xl:mx-auto xl:scroll-mt-0 xl:pt-20"
      id="skills"
    >
      <h2 className="flex justify-center pt-10 font-lora text-3xl font-bold text-orange-400 md:pt-0 md:text-5xl">
        Skills & Experience
      </h2>
      <div className="md:gap-18 grid grid-cols-2 gap-10 pt-10 md:pt-28 ">
        <div className="z-10 col-span-2 flex flex-wrap gap-2 md:gap-9 lg:col-span-1">
          {skills.map((skill, i) => (
            <SkillsIcons key={i} skill={skill} />
          ))}
        </div>
        <div className="col-span-2 space-y-10 lg:col-span-1">
          <div className="flex gap-10">
            <h2 className="text-xl font-semibold text-purple-700">2021</h2>
            <div className="">
              <h4 className="text-xl font-semibold">FontEnd Developer</h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Programming Hero
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <h2 className="text-xl font-semibold text-purple-700">2022</h2>
            <div className="">
              <h4 className="text-xl font-semibold">Full Stack Developer</h4>
              <p className="font-lora text-gray-600 dark:text-gray-400">
                Programming Hero
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8  pt-28 md:space-x-20">
        <div className="justify-content flex flex-col items-center space-y-2">
          <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white p-1.5 shadow-lg ring-4 ring-purple-400/70 ring-offset-8 ring-offset-purple-200 duration-500 hover:scale-125 hover:shadow-gray-400 dark:bg-gray-700 dark:hover:shadow-gray-600">
            <h4 className="font-lora text-2xl font-extrabold">2+</h4>
          </div>
          <p className="text-md pt-3 font-medium capitalize">years</p>
          <p className="text-lg text-orange-400">Experience</p>
        </div>

        <div className="justify-content flex flex-col items-center space-y-2">
          <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white p-1.5 shadow-lg ring-4 ring-purple-400/70 ring-offset-8 ring-offset-purple-200 duration-500 hover:scale-125 hover:shadow-gray-400 dark:bg-gray-700 dark:hover:shadow-gray-600">
            <h4 className="font-lora text-2xl font-extrabold">20+</h4>
          </div>
          <p className="text-md pt-3 font-medium capitalize">completed</p>
          <p className="text-lg text-orange-400">Projects</p>
        </div>

        <div className="justify-content flex flex-col items-center space-y-2">
          <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white p-1.5 shadow-lg ring-4 ring-purple-400/70 ring-offset-8 ring-offset-purple-200 duration-500 hover:scale-125 hover:shadow-gray-400 dark:bg-gray-700 dark:hover:shadow-gray-600">
            <h4 className="font-lora text-2xl font-extrabold">2+</h4>
          </div>
          <p className="text-md pt-3 font-medium capitalize">companies</p>
          <p className="text-lg text-orange-400">Work</p>
        </div>
      </div>

      {/* Shadow div */}
      <div className="hidden md:block -bottom-96 left-0 right-0 md:top-28 md:left-28 md:dark:block animate-pulse blur-3xl w-96 h-80 rounded-full absolute bg-cyan-200/50 dark:bg-pink-200/30 z-0"></div>
      <div className="hidden md:block bottom-56 right-0 dark:block animate-pulse blur-3xl w-96 h-80 rounded-full absolute bg-pink-200/50 dark:bg-pink-200/30  md:dark:bg-cyan-200/20 z-0"></div>
    </section>
  );
};

export default SkillsAndExperience;
