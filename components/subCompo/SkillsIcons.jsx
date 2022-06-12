import Image from "next/image";

const SkillsIcons = ({ skill }) => {
  return (
    <div className="justify-content flex flex-col items-center space-y-4">
      <div className="h-12 w-12 cursor-pointer rounded-full bg-white p-1.5 shadow-lg duration-500 hover:scale-125 hover:shadow-gray-400 dark:bg-gray-700 dark:hover:shadow-gray-600 md:h-14 md:w-14">
        <Image
          className="rounded-full"
          height={100}
          width={100}
          src={skill?.img}
          alt=""
        />
      </div>
      <p className="text-md font-medium capitalize">{skill?.title}</p>
    </div>
  );
};

export default SkillsIcons;
