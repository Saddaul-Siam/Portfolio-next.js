import Image from "next/image";

const SkillsIcons = ({ skill }) => {
  return (
    <div className="flex flex-col justify-content items-center space-y-4">
      <div className="h-12 w-12 md:h-14 md:w-14 rounded-full dark:bg-gray-700 bg-white shadow-lg hover:shadow-gray-400 dark:hover:shadow-gray-600 hover:scale-125 duration-500 cursor-pointer p-1.5">
        <Image
          className="rounded-full"
          height={100}
          width={100}
          src={skill?.img}
          alt=""
        />
      </div>
      <p className="capitalize text-md font-medium">{skill?.title}</p>
    </div>
  );
};

export default SkillsIcons;
