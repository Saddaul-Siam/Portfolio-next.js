import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <section id="contact" className="h-screen container mx-auto py-20">
      <h2 className="text-5xl font-bold font-lora text-orange-400 text-center pb-10">
        Contact With Me
      </h2>
      <div className="grid grid-cols-5 ">
        <div className="col-span-5 md:col-span-2 shadow-md bg-white dark:bg-gray-800/70 space-y-5 mx-auto p-5">
          <div className="">
            <Image
              width={400}
              height={250}
              src="https://i.ibb.co/9YkgSrL/contact1.png"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-5xl font-bold font-lora text-orange-400 pb-5">
              Saddaul Siam
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              <span className="text-xl font-medium text-gray-700 dark:text-white">
                Phone:
              </span>
              +8801311333277
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              <span className="text-xl font-medium text-gray-700 dark:text-white">
                Email:
              </span>
              saddaulsiam@gmail.com
            </p>
          </div>
          {/* social icons */}
          <div className="pt-3">
            <p className="py-5 text-lg text-gray-800 font-medium dark:text-gray-300">
              Find with me
            </p>
            <div className=" flex space-x-10">
              <FaGithubSquare className="text-orange-400 hover:text-black dark:hover:text-white text-5xl cursor-pointer" />
              <FaLinkedin className="text-orange-400 hover:text-blue-500 text-5xl cursor-pointer" />
              <FaFacebookSquare className="text-orange-400 hover:text-blue-700 text-5xl cursor-pointer" />
              <FaInstagramSquare className="text-orange-400 hover:text-pink-600 text-5xl cursor-pointer" />
            </div>
          </div>
        </div>
        <div className=" col-span-5 md:col-span-3 border w-10/12">
          <div className="p-5 space-y-5 ">
            <div className="grid grid-cols-2">
              <div className="col-span-2 md:col-span-1 mr-5">
                <label htmlFor="">Siam is back</label> <br />
                <input
                  type="text"
                  placeholder="Siam is back"
                  className="border-2 h-14 w-full px-2"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="">Siam is back</label> <br />
                <input
                  type="text"
                  placeholder="Siam is back"
                  className="border-2 h-14 w-full px-2"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="">Siam is back</label>
              <input
                type="text"
                placeholder="Siam is back"
                className="border-2 w-full h-14 px-2"
              />
            </div>
            <div className="">
              <label htmlFor="">Siam is back</label>
              <input
                type="text"
                placeholder="Siam is back"
                className="border-2 w-full h-14 px-2"
              />
            </div>
            <div className="">
              <label htmlFor="">Siam is back</label>
              <textarea
                type="text"
                placeholder="Siam is back"
                className="border-2 w-full h-60 px-2 resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
