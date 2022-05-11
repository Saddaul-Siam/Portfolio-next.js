import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="h-screen container md:mx-auto pt-[50rem] md:py-20 "
    >
      <h2 className="text-3xl md:text-5xl font-bold font-lora text-orange-400 text-center pb-20">
        Contact With Me
      </h2>
      <div className="grid grid-cols-5 gap-y-3 w-screen md:w-full px-5 md:px-0">
        <div className="col-span-5 md:col-span-2 w-full md:w-auto shadow-md border border-gray-200 dark:border-gray-600 bg-gray-100/40 dark:bg-gray-800/70 space-y-5 mx-auto p-5 ">
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
        <div className="col-span-5 md:col-span-3 w-full border border-gray-200 dark:border-gray-600 md:w-10/12 shadow-md bg-gray-100/40 dark:bg-gray-800/70">
          <div className="p-5 space-y-5 ">
            <div className="grid grid-cols-2 space-y-5 md:space-y-0">
              <div className="col-span-2 md:col-span-1 md:mr-5">
                <label
                  className="text-lg text-gray-800 dark:text-gray-100"
                  htmlFor=""
                >
                  Your Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border-2 dark:border-gray-500 dark:bg-gray-700/50 outline-blue-400 h-14 w-full px-2 rounded-md"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label
                  className="text-lg text-gray-800 dark:text-gray-100"
                  htmlFor=""
                >
                  Phone Number
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Your Number"
                  className="border-2 dark:border-gray-500 dark:bg-gray-700/50 outline-blue-400 h-14 w-full px-2 rounded-md"
                />
              </div>
            </div>
            <div className="">
              <label
                className="text-lg text-gray-800 dark:text-gray-100"
                htmlFor=""
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Your Email"
                className="border-2 dark:border-gray-500 dark:bg-gray-700/50 outline-blue-400 w-full h-14 px-2 rounded-md"
              />
            </div>
            <div className="">
              <label
                className="text-lg text-gray-800 dark:text-gray-100"
                htmlFor=""
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="border-2 dark:border-gray-500 dark:bg-gray-700/50 outline-blue-400 w-full h-14 px-2 rounded-md"
              />
            </div>
            <div className="">
              <label
                className="text-lg text-gray-800 dark:text-gray-100"
                htmlFor=""
              >
                Your Message
              </label>
              <textarea
                type="text"
                placeholder="Your Message"
                className="border-2 dark:border-gray-500 dark:bg-gray-700/50 outline-blue-400 w-full h-60 p-2 resize-none rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
