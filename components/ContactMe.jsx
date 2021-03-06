import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_olsyzbs",
        "template_ga89sks",
        e.target,
        "user_zY9PhOZfd0w62teBhlcuR"
      )
      .then(
        (result) => {
          if (result.text) {
            alert("message send successfully");
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        e.target.reset();
      });
  };
  return (
    <section
      id="contact"
      className="container relative mt-24 h-screen md:-scroll-mt-16 md:py-20 md:pl-5 lg:scroll-mt-0 xl:mx-auto"
    >
      <h2 className="pb-20 text-center font-lora text-3xl font-bold text-orange-400 md:text-5xl">
        Contact With Me
      </h2>
      <div className="grid w-screen grid-cols-5 gap-y-3 px-5 md:w-full md:gap-x-44 md:px-0 lg:gap-x-5">
        <div className="col-span-5 mx-auto w-full space-y-5 border border-gray-200 bg-gray-100/40 p-5 shadow-md dark:border-gray-600 dark:bg-gray-800/70 md:col-span-2 md:w-auto">
          <div className="">
            <Image
              width={400}
              height={250}
              src="https://i.ibb.co/9YkgSrL/contact1.png"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <h1 className="pb-5 font-lora text-5xl font-bold text-orange-400">
              Saddaul Siam
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              <span className="text-xl font-medium text-gray-700 dark:text-white">
                Phone:{" "}
              </span>
              <span className="link link-underline link-underline-black hover:text-[#64FFDA]">
                +8801311333277
              </span>
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300">
              <span className="text-xl font-medium text-gray-700 dark:text-white">
                Email:{" "}
              </span>{" "}
              <span className="link link-underline link-underline-black hover:text-[#64FFDA]">
                saddaulsiam@gmail.com
              </span>
            </p>
          </div>
          {/* social icons */}
          <div className="pt-3">
            <p className="py-5 text-lg font-medium text-gray-800 dark:text-gray-300">
              Find with me
            </p>
            <div className="flex space-x-5 md:space-x-10">
              <a
                href="https://github.com/Saddaul-Siam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare className="cursor-pointer text-5xl text-orange-400 hover:text-black dark:hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/saddaul-siam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer text-5xl text-orange-400 hover:text-blue-500" />
              </a>
              <a
                href="https://www.facebook.com/saddaulsiam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="cursor-pointer text-5xl text-orange-400 hover:text-blue-700" />
              </a>
              <a
                href="https://www.instagram.com/saddaul.siam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="cursor-pointer text-5xl text-orange-400 hover:text-pink-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-5 w-full border border-gray-200 bg-gray-100/40 shadow-md dark:border-gray-600 dark:bg-gray-800/70 md:col-span-3 md:w-11/12 xl:w-10/12">
          <div className="space-y-5 p-5 ">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-2 grid grid-cols-2 space-y-5 md:space-y-0">
                <div className="col-span-2 md:col-span-1 md:mr-5">
                  <label
                    className="text-lg text-gray-800 dark:text-gray-100"
                    htmlFor=""
                  >
                    Your Name
                  </label>
                  <br />
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="h-14 w-full rounded-md border-2 px-2 outline-blue-400 dark:border-gray-500 dark:bg-gray-700/50"
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
                    name="phone"
                    type="number"
                    required
                    placeholder="Your Number"
                    className="h-14 w-full rounded-md border-2 px-2 outline-blue-400 dark:border-gray-500 dark:bg-gray-700/50"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label
                  className="text-lg text-gray-800 dark:text-gray-100"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="h-14 w-full rounded-md border-2 px-2 outline-blue-400 dark:border-gray-500 dark:bg-gray-700/50"
                />
              </div>
              <div className="mb-2">
                <label
                  className="text-lg text-gray-800 dark:text-gray-100"
                  htmlFor=""
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Subject"
                  className="h-14 w-full rounded-md border-2 px-2 outline-blue-400 dark:border-gray-500 dark:bg-gray-700/50"
                />
              </div>
              <div className="mb-2">
                <label
                  className="text-lg text-gray-800 dark:text-gray-100"
                  htmlFor=""
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  type="text"
                  required
                  placeholder="Your Message"
                  className="textarea h-60 w-full resize-none rounded-md border-2 p-2 outline-blue-400 dark:border-gray-500 dark:bg-gray-700/50"
                />
              </div>
              <button
                type="onSubmit"
                className="w-full rounded-md bg-slate-200 py-2 font-medium hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 hidden h-80 w-96 animate-pulse rounded-full bg-pink-200/30 blur-3xl dark:bg-cyan-200/30 md:block "></div>
      <div className="absolute bottom-0 right-0 hidden h-80 w-96 animate-pulse rounded-full bg-cyan-200/30 blur-3xl dark:bg-pink-200/20 md:block "></div>
    </section>
  );
};

export default ContactMe;
