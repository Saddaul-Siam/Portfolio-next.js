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
    <header className="mt-28 h-[80vh] md:container md:mx-auto md:mt-48">
      <div className="mx-5 flex-row md:flex xl:mx-0">
        <div className="flex-1 space-y-7">
          <h2 className="font-lora text-5xl font-bold">Hy! I Am</h2>
          <h1 className="font-lora text-4xl font-bold text-orange-400 sm:text-5xl">
            Saddaul Siam
          </h1>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400 md:w-9/12">
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </p>
          <button color="inherit" className="button">
            Hire me
          </button>
          {/* social icons */}
          <div className="flex space-x-10 pt-20">
            <FaGithubSquare className="cursor-pointer text-5xl text-orange-400 hover:text-black dark:hover:text-white" />
            <FaLinkedin className="cursor-pointer text-5xl text-orange-400 hover:text-blue-500" />
            <FaFacebookSquare className="cursor-pointer text-5xl text-orange-400 hover:text-blue-700" />
            <FaInstagramSquare className="cursor-pointer text-5xl text-orange-400 hover:text-pink-600" />
          </div>
        </div>
        <div className="relative flex-1 pt-32 md:pt-0">
          <div className="lg:top[-9%] absolute left-0 right-0 top-52 md:left-[-15%] md:top-[5%] ">
            <Image src={Vector1} className="z-20 scale-[0.70]" alt="" />
          </div>
          <div className="absolute left-0 right-0 top-48 md:left-[-3rem] md:top-[1rem] lg:top-[-4.6rem] ">
            <Image src={Vector2} className="z-30 scale-[0.68]" alt="" />
          </div>

          <div className="">
            <div className="absolute top-28 left-16 right-0 md:hidden">
              <Image src={boy} className="z-40 scale-90" alt="" />
            </div>
            <div className="absolute hidden md:top-0 md:left-[20%] md:-bottom-20 md:block ">
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
          <div className="absolute z-10 hidden h-80 w-96 animate-pulse rounded-full bg-pink-200 blur-3xl dark:bg-pink-200/30 lg:-top-20 lg:right-0 lg:block"></div>
          <div className="absolute -bottom-52 -left-40 -z-0  hidden h-80 w-96 animate-pulse rounded-full bg-cyan-200 blur-3xl dark:bg-cyan-200/30  md:block"></div>

          <div className="absolute top-14 -left-4 hidden md:-top-20 md:-left-20 md:block ">
            <Image src={glasses} alt="" className="" />
            {/* <Image src={glassesimoji} alt="" className="scale-75" /> */}
          </div>

          <div className="absolute top-10 -right-5 z-50 flex h-20 w-44 items-center justify-start rounded-3xl bg-white md:-top-24 md:right-0 md:h-24 md:w-48 lg:w-64">
            <Image src={crown} alt="" className="scale-50" />
            <span className="text-lg text-gray-600">Web Developer</span>
          </div>

          <div className="absolute -bottom-[28rem] left-0 z-50 flex h-20 w-44 items-center justify-start rounded-3xl bg-white md:bottom-12 md:-left-8 md:h-24 md:w-48 lg:w-64 ">
            <Image src={thumbup} alt="" className="scale-50 " />
            <span className="text-lg text-gray-600">Web Designer</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
