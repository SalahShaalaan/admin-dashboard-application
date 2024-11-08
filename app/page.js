import DashboardCard from "./_components/DashboardCard";
import Graph from "./_components/Graph";
import DealsDetails from "./_components/DealsDetails";
import peopleIcon from "@/public/people.png";
import packagIcon from "@/public/package.png";
import salesUp from "@/public/sales-up.png";
import pending from "@/public/pending.png";

const dashboardData = [
  {
    title: "Total User",
    number: "40,689",
    arrow: true,
    percentage: "8.5%",
    period: "Up from yesterday",
    iconBgColor: "bg-[#e4e4ff]",
    icon: peopleIcon,
  },
  {
    title: "Total Order",
    number: "10,293",
    arrow: true,
    percentage: "1.3%",
    period: "Up from past week",
    iconBgColor: "bg-[#fef2d6]",
    icon: packagIcon,
  },
  {
    title: "Total Sales",
    number: "$89,000",
    arrow: false,
    percentage: "4.3%",
    period: "Down from yesterday",
    iconBgColor: "bg-[#d9f7e7]",
    icon: salesUp,
  },
  {
    title: "Total Pending",
    number: "2,040",
    arrow: true,
    percentage: "1.8%",
    period: "Up from yesterday",
    iconBgColor: "bg-[#ffded2]",
    icon: pending,
  },
];

export default function Home() {
  return (
    <div className="relative bg-bgColor dark:bg-darkBg p-4 rounded-lg">
      <div>
        <div>
          <h1 className="font-bold text-3xl leading-wider">Dashboard</h1>
        </div>
        <div className="grid grid-cols-auto-fit-250 gap-20 my-8">
          {dashboardData.map((card, index) => (
            <DashboardCard
              key={index}
              title={card.title}
              number={card.number}
              arrow={card.arrow}
              percentage={card.percentage}
              period={card.period}
              icon={card.icon}
              iconBgColor={card.iconBgColor}
            />
          ))}
        </div>
        <div className="rounded-lg">
          <Graph />
        </div>
        <div className="mt-6 rounded-lg">
          <DealsDetails />
        </div>
      </div>
    </div>
  );
}