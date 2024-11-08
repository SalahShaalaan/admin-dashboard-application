"use client";
import { useState } from "react";
import Divider from "./Divider";
import NavLink from "./NavLink";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiOutlineViewGrid, HiOutlineShoppingCart, HiOutlineHeart, HiOutlineInboxIn, HiOutlineClipboardList, HiOutlineCube } from "react-icons/hi";
import { MdOutlinePriceChange, MdOutlineChecklist, MdOutlineContactMail } from "react-icons/md";
import { RiFileList3Line, RiTeamLine, RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const links = [
    { name: "Dashboard", href: "/", icon: HiOutlineViewGrid },
    { name: "Products", href: "/products", icon: HiOutlineShoppingCart },
    { name: "Favorites", href: "/favorites", icon: HiOutlineHeart },
    { name: "Inbox", href: "/inbox", icon: HiOutlineInboxIn },
    { name: "Order List", href: "/order-list", icon: HiOutlineClipboardList },
    { name: "Product Stock", href: "/product-stock", icon: HiOutlineCube },
  ];

  const pages = [
    { name: "Pricing", href: "/pricing", icon: MdOutlinePriceChange },
    { name: "To-Do", href: "/to-do", icon: MdOutlineChecklist },
    { name: "Contact", href: "/contact", icon: MdOutlineContactMail },
    { name: "Invoice", href: "/invoice", icon: RiFileList3Line },
    { name: "Team", href: "/team", icon: RiTeamLine },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/SalahShaalaan", icon: FaGithub },
    { name: "Twitter", href: "https://twitter.com/salah_shaalaan", icon: FaTwitter },
    { name: "LinkedIn", href: "https://linkedin.com/in/salah-shaalaan", icon: FaLinkedin },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 ${isOpen ? "left-[232px]" : "left-4"
          } md:hidden focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg`}
      >
        {isOpen ? (
          <RiMenuFoldLine className="w-6 h-6 text-emerald-400" />
        ) : (
          <RiMenuUnfoldLine className="w-6 h-6 text-emerald-400" />
        )}
      </button>

      <aside
        className={`fixed md:static md:min-h-screen top-0 left-0 w-64 bg-white dark:bg-SecDarkBg text-black dark:text-darkText transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-40 shadow-xl`}
      >
        <div className="p-6 overflow-y-auto flex flex-col h-full">
          <nav className="mt-8 md:mt-0 flex-grow">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    href={link.href}
                    className="flex items-center p-2 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className="w-5 h-5 mr-3" />
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <Divider />
            <ul className="space-y-4">
              <p className="my-6 font-bold text-sm leading-tight opacity-75">
                Pages
              </p>
              {pages.map((link) => (
                <li key={link.name}>
                  <NavLink
                    href={link.href}
                    className="flex items-center p-2 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className="w-5 h-5 mr-3" />
                    <span>{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <Divider />

            <div className="mt-6">
              <p className="font-bold text-sm leading-tight opacity-75 mb-4">
                Follow Me
              </p>
              <div className="flex space-x-4 justify-center">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Salah Shaalaan</p>
            <p className="text-xs">All rights reserved</p>
          </div>
        </div>
      </aside>
    </>
  );
}