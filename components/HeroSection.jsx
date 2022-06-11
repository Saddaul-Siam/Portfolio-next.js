import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import crown from "../img/crown.png";
import thumbup from "../img/thumbup.png";
import boy from "../img/boy.png";
import glasses from "../img/glasses.png";
import glassesimoji from "../img/glassesimoji.png";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <header className="md:container md:mx-auto h-[80vh] mt-28 md:mt-48">
      <div className="flex-row md:flex mx-5 xl:mx-0">
        <div className="flex-1 space-y-7">
          <h2 className="text-5xl font-bold font-lora">Hy! I Am</h2>
          <h1 className="text-4xl sm:text-5xl font-bold font-lora text-orange-400">
            Saddaul Siam
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </p>
          <button color="inherit" className="button">
            Hire me
          </button>
          {/* social icons */}
          <div className="pt-20 flex space-x-10">
            <FaGithubSquare className="text-orange-400 hover:text-black dark:hover:text-white text-5xl cursor-pointer" />
            <FaLinkedin className="text-orange-400 hover:text-blue-500 text-5xl cursor-pointer" />
            <FaFacebookSquare className="text-orange-400 hover:text-blue-700 text-5xl cursor-pointer" />
            <FaInstagramSquare className="text-orange-400 hover:text-pink-600 text-5xl cursor-pointer" />
          </div>
        </div>
        <div className="flex-1 relative pt-32 md:pt-0">
          <div className="absolute left-0 right-0 md:left-[-15%] top-52 md:top-[5%] lg:top[-9%] ">
            <Image src={Vector1} className="scale-[0.70] z-20" alt="" />
          </div>
          <div className="absolute left-0 right-0 md:left-[-3rem] top-48 md:top-[1rem] lg:top-[-4.6rem] ">
            <Image src={Vector2} className="scale-[0.68] z-30" alt="" />
          </div>

          <div className="">
            <div className="md:hidden absolute top-28 left-16 right-0">
              <Image src={boy} className="scale-90 z-40" alt="" />
            </div>
            <div className="hidden md:block absolute md:top-0 md:left-[20%] md:-bottom-20 ">
              <Image
                src={boy}
                width={400}
                height={550}
                className="z-50"
                alt=""
              />
            </div>
          </div>
          {/* blur div */}
          {/* <div className="animate-pulse blur-3xl w-96 h-80 rounded-full absolute md:-top-20 md:-right-40 bg-pink-200 dark:bg-pink-200/30 z-10"></div>
          <div className="animate-pulse hidden md:block blur-3xl w-96 h-80 rounded-full absolute -bottom-52 -left-40 bg-cyan-200 dark:bg-cyan-200/30 -z-0"></div> */}

          <div className="hidden md:block absolute top-14 -left-4 md:-top-20 md:-left-20 ">
            <Image src={glasses} alt="" className="" />
            {/* <Image src={glassesimoji} alt="" className="scale-75" /> */}
          </div>

          <div className="h-20 w-44 md:h-24 md:w-48 lg:w-64 flex justify-start items-center rounded-3xl absolute top-10 md:-top-24 -right-5 md:right-0 bg-white z-50">
            <Image src={crown} alt="" className="scale-50" />
            <span className="text-lg text-gray-600">Web Developer</span>
          </div>

          <div className="h-20 w-44 md:h-24 md:w-48 lg:w-64 flex justify-start items-center rounded-3xl absolute -bottom-[28rem] left-0 md:bottom-12 md:-left-8 bg-white z-50 ">
            <Image src={thumbup} alt="" className="scale-50 " />
            <span className="text-lg text-gray-600">Web Designer</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
