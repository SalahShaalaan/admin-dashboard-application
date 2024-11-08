import Image from "next/image";
import ukFlag from "@/public/header-icons/flags/uk.png"
import FranceFlag from "@/public/header-icons/flags/france.png"
import SpaninFlag from "@/public/header-icons/flags/spain.png"
import { useState } from "react";

export default function LanguagesMenu({ toggleDropdown, activeDropdown, setActiveDropdown }) {
  const [selectedLanguage, setSelectedLanguage] = useState({
    language: "English",
    flag: ukFlag,
  });

  const languages = [
    { language: "English", flag: ukFlag },
    { language: "French", flag: FranceFlag },
    { language: "Spanish", flag: SpaninFlag },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => toggleDropdown("languages")}
        className="flex items-center focus:outline-none"
        aria-expanded={activeDropdown === "languages"}
        aria-haspopup="true"
      >
        <Image
          src={selectedLanguage.flag}
          alt=""
          width={30}
          height={30}
        />
        <span className="ml-2">{selectedLanguage.language}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 rounded-full ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {activeDropdown === "languages" && (
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-SecDarkBg rounded-md shadow-lg z-10">
          <ul role="menu" aria-label="Language selection">
            {languages.map((lang, index) => (
              <li key={index} role="menuitem">
                <button
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setActiveDropdown(null);
                  }}
                  className="flex items-center w-full px-4 py-2"
                >
                  <Image src={lang.flag} alt="" width={30} height={30} aria-hidden="true" />
                  <span className="ml-3">{lang.language}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}