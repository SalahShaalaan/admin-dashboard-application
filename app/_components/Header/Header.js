"use client"
import AdminProfile from "./AdminProfile";
import { useState } from "react";
import LanguagesMenu from "./LanguagesMenu";
import NotificationsMenu from "./NotificationsMenu";
import { useTheme } from '../../ThemeProvider';

const SearchInput = ({ isMobile }) => (
  <div className={`relative ${isMobile ? 'w-full' : ''}`}>
    <label htmlFor={isMobile ? "mobile-search" : "desktop-search"} className="sr-only">Search</label>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 opacity-50 dark:text-darkText"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
    <input
      type="text"
      id={isMobile ? "mobile-search" : "desktop-search"}
      placeholder="Search"
      disabled
      className={`pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-[#323d4e] dark:text-darkText dark:border-none ${isMobile ? 'w-full' : 'w-full lg:w-96'}`}
    />
  </div>
);

const SUN = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>

const MOON = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  }

  return (
    <header className="max-w-full md:p-3 bg-white dark:bg-SecDarkBg transition-colors duration-100 shadow-sm">
      <div className="px-4 flex justify-between items-center md:flex-row flex-col">
        <div className="flex items-center space-x-4">
          <div className="font-semibold text-xl mr-4 sm:mr-14">
            <h1 className="text-2xl leading-relaxed"><span className="text-blue dark:text-blue-400">Dash</span><span className="dark:text-darkText">Stack</span></h1>
          </div>
          <div className="hidden lg:block relative">
            <SearchInput isMobile={false} />
          </div>
        </div>
        <div className="w-full flex gap-6 items-center mt-6 md:mt-0 justify-end">
          <button
            onClick={toggleTheme}
            data-theme-toggle
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-darkText"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? SUN : MOON}
          </button>
          <NotificationsMenu toggleDropdown={toggleDropdown} activeDropdown={activeDropdown} />
          <LanguagesMenu toggleDropdown={toggleDropdown} activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
          <AdminProfile />
        </div>
      </div>

      <div className="lg:hidden mt-4">
        <SearchInput isMobile={true} />
      </div>
    </header>
  );
}