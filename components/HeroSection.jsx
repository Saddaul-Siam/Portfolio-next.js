import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import crown from "../img/crown.png";
import thumbup from "../img/thumbup.png";
import boy from "../img/boy.png";
import glasses from "../img/glasses.png";
import glassesimoji from "../img/glassesimoji.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto h-[80vh] mt-48">
      <div className="flex-row md:flex mx-5 md:mx-0">
        <div className="flex-1 space-y-7">
          <h2 className="text-5xl font-bold font-lora">Hy! I Am</h2>
          <h1 className="text-5xl font-bold font-lora text-orange-400">
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
          <div className="pt-20 space-x-10">
            <GitHub className="text-orange-400 hover:text-black dark:hover:text-white text-5xl cursor-pointer" />
            <LinkedIn className="text-orange-400 hover:text-blue-500 text-5xl cursor-pointer" />
            <Facebook className="text-orange-400 hover:text-blue-700 text-5xl cursor-pointer" />
            <Instagram className="text-orange-400 hover:text-pink-600 text-5xl cursor-pointer" />
          </div>
        </div>
        <div className="flex-1 relative pt-32 md:pt-0">
          <div className="absolute left-[-15%] md:top-[-9%] ">
            <Image src={Vector1} className="scale-[0.70] z-20" alt="" />
          </div>
          <div className="absolute left-[-3rem] md:top-[-4.6rem] ">
            <Image src={Vector2} className="scale-[0.68] z-30" alt="" />
          </div>

          <div className="absolute left-[5%] md:left-[25%] md:-bottom-20 top-20 md:-top-12">
            <div className="md:hidden">
              <Image src={boy} className="scale-95 z-40" alt="" />
            </div>
            <div className="hidden md:block">
              <Image
                src={boy}
                width={400}
                height={550}
                className="z-50"
                alt=""
              />
            </div>
          </div>

          <div className="animate-pulse blur-3xl w-96 h-80 rounded-full absolute md:-top-20 md:-right-40 bg-pink-200 dark:bg-pink-200/30 z-10"></div>
          <div className="animate-pulse hidden md:block blur-3xl w-96 h-80 rounded-full absolute -bottom-52 -left-40 bg-cyan-200 dark:bg-cyan-200/30 -z-0"></div>

          <div className="hidden md:block absolute top-14 -left-4 md:-top-20 md:-left-20 ">
            <Image src={glasses} alt="" className="" />
            {/* <Image src={glassesimoji} alt="" className="scale-75" /> */}
          </div>
          <div className="h-20 w-48 md:h-24 md:w-64 flex justify-start items-center rounded-3xl absolute top-10 -right-4 md:-top-10 md:-right-20 bg-white z-50 ">
            <Image src={crown} alt="" className="scale-50 " />
            <span className="text-lg text-gray-600">Web Developer</span>
          </div>
          <div className="h-20  w-48 md:h-24 md:w-64 flex justify-start items-center rounded-3xl absolute -bottom-96 left-0 md:-bottom-20 md:-left-14 bg-white z-50 ">
            <Image src={thumbup} alt="" className="scale-50 " />
            <span className="text-lg text-gray-600">Web Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
