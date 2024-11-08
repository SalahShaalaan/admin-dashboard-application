import Image from "next/image";

const ArrowUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
  </svg>
);

const ArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
  </svg>
);

export default function DashboardCard({ title, number, icon, iconBgColor, percentage, period, arrow }) {
  return (
    <div className="p-4 shadow-sm relative rounded-lg text-[#202224] dark:text-darkText bg-white dark:bg-SecDarkBg transition-colors duration-100">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-lg sm:text-xl md:text-2xl truncate opacity-65 ">{title}</h4>
        <div className="flex items-center justify-center">
          <div
            className={`absolute top-4 right-4 rounded-full p-4 ${iconBgColor} flex w-[60px] h-[60px] items-center justify-center`}
          >
            <Image
              src={icon}
              alt={title}
              width={40}
              height={40}
              quality={100}
            />
          </div>
        </div>
      </div>
      <p className="font-semibold text-xl sm:text-2xl my-2 tracking-wider">{number}</p>
      <div className="text-lg flex items-center">
        <span className={`flex items-center ${arrow ? "text-[#00B69B]" : "text-[#F93C65]"}`}>
          {arrow ? <ArrowUp /> : <ArrowDown />}
          <span className="ml-1">{percentage}</span>
        </span>
        <span className="ml-2 text-[#606060] dark:text-darkText transition-colors duration-300 text-base">{period}</span>
      </div>
    </div>
  );
}