import React, { useEffect, useState } from 'react'
import DarkImage from '../../assets/DarkImage.png'
import LightImage from '../../assets/LightImage.png'

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const darkmode = document.documentElement;

    if (theme === "dark") {
      darkmode.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      darkmode.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
        src={LightImage}
        className={`w-12 cursor-pointer transition-all duration-300 ease-in-out absolute right-0 z-10 ${
          theme === "dark" ? "block" : "hidden"
        }`}
        alt="Switch to light mode"
      />
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={DarkImage}
        className={`w-9 ms-1 cursor-pointer transition-all duration-300 ease-in-out`}
        alt="Switch to dark mode"
      />
    </div>
  );
};
export default DarkMode