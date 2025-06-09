"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("bg-black", "text-white");
    } else {
      document.documentElement.classList.remove("bg-black","text-white");
    }
  }, [darkMode]);

  return (
    <button 
      onClick={() => {
        console.log("Botão foi clicado!");
        setDarkMode(!darkMode);
      }} 
      className="mt-4 px-4 py-2 bg-gray-800 text-white rounded dark:bg-gray-200 dark:text-black"
    >
      Alternar Tema
    </button>

  );
}
