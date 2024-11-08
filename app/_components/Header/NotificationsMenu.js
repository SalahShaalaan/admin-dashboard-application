import Image from "next/image";
import bellIcon from "@/public/header-icons/bell.png";
import settingsIcon from "@/public/header-icons/settings.png";
import calendarIcon from "@/public/header-icons/calendar.png";
import profileIcon from "@/public/header-icons/profile.png";
import warningIcon from "@/public/header-icons/warning.png";

const notifications = [
  {
    icon: settingsIcon,
    alt: "Settings",
    title: "Settings",
    description: "Update your profile settings.",
    bgColor: "#4E96FF",
  },
  {
    icon: calendarIcon,
    alt: "Event Update",
    title: "Event Update",
    description: "Check the latest events.",
    bgColor: "#F97FD9",
  },
  {
    icon: profileIcon,
    alt: "Profile",
    title: "Profile",
    description: "Your profile has been updated.",
    bgColor: "#9E8FFF",
  },
  {
    icon: warningIcon,
    alt: "Application Error",
    title: "Application Error",
    description: "An error occurred in the system.",
    bgColor: "#FF8F8F",
  },
];

export default function NotificationsMenu({ toggleDropdown, activeDropdown }) {
  return (
    <div className="relative">
      <button
        onClick={() => toggleDropdown("notifications")}
        className="focus:outline-none"
        aria-label="Notifications"
        aria-expanded={activeDropdown === "notifications"}
        aria-haspopup="true"
      >
        <Image src={bellIcon} alt="" width={30} height={30} quality={100} aria-hidden="true" className="w-auto h-auto" />
      </button>
      {activeDropdown === "notifications" && (
        <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-SecDarkBg rounded-md shadow-lg z-10">
          <h2 className="px-4 py-2 text-sm font-semibold">Notifications</h2>
          <ul role="menu" aria-label="Notifications list">
            {notifications.map((notification, index) => (
              <li key={index} role="menuitem" className="border-t dark:border-slate-700 first:border-t-0">
                <button className="flex items-center w-full px-4 py-2 text-left">
                  <div className="rounded-full p-1" style={{ backgroundColor: notification.bgColor }}>
                    <Image src={notification.icon} alt="" width={20} height={20} aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <span className="font-semibold">{notification.title}</span>
                    <p className="text-xs text-gray-700 dark:text-gray-400">{notification.description}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <button disabled className="w-full text-sm text-center py-2 opacity-75 cursor-not-allowed" aria-disabled="true">
            See all notifications
          </button>
        </div>
      )}
    </div>
  );
}