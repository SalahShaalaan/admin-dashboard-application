import Image from "next/image";
import avatar from "@/public/header-icons/avatar.png";
import profileSettingIcon from '@/public/header-icons/profile-settings.png'
import passwordKeyIcon from '@/public/header-icons/key.png'
import activityIcon from '@/public/header-icons/log.png'
import logOutIcon from '@/public/header-icons/logout.png'
import { useState } from "react";

export default function AdminProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    {
      icon: profileSettingIcon,
      title: "Profile Settings",
    },
    {
      icon: passwordKeyIcon,
      title: "Change Password",
    },
    {
      icon: activityIcon,
      title: "Activity Log",
    },
    {
      icon: logOutIcon,
      title: "Log Out",
    },
  ];

  return (
    <div className="rounded-full flex items-center gap-2 relative">
      <Image src={avatar} alt="Admin avatar" width={30} height={30} quality={100} />
      <div className="flex flex-col">
        <h2 className="text-xs md:text-sm font-semibold">John Doe</h2>
        <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Admin</span>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Profile Menu"
        aria-expanded={isOpen}
        className="ml-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="border size-5 rounded-full"
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
      {isOpen && (
        <nav className="absolute top-3/4 right-0 mt-2 py-2 w-48 dark:bg-SecDarkBg bg-white rounded-md shadow-xl z-20 space-y-2">
          <ul>
            {options.map((option, index) => (
              <li key={index} className="border-b last:border-none dark:border-gray-700">
                <button className="flex items-center px-4 py-2 w-full text-left">
                  <Image src={option.icon} alt="" width={20} height={20} aria-hidden="true" />
                  <span className="ml-3 text-sm w-full">{option.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}