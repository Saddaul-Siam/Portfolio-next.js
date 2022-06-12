import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

const Toggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button
          className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-orange-400 dark:border-orange-400"
          onClick={() => setTheme("light")}
        >
          <MdDarkMode className="p-0.5 text-xl text-orange-400" />
        </button>
      );
    } else {
      return (
        <button
          className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-orange-400 dark:border-orange-400"
          onClick={() => setTheme("dark")}
        >
          <FaSun className="p-0.5 text-xl text-orange-400" />
        </button>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default Toggle;
