export const labelColors = {
  Primary: "bg-[#ccf0eb] dark:bg-[#00b69b] text-[#00b69b]",
  Work: "bg-[#ffebdd] dark:bg-[#fd9a56] text-[#fd9a56]",
  Friends: "bg-[#f6ddff] dark:bg-[#d456fd] text-[#d456fd]",
  Social: "bg-[#dee8ff] dark:bg-[#5a8cff] text-[#5a8cff]",
};

export default function EmailItem({ email, isSelected, onCheckboxChange, onStarClick }) {

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between p-4 border-b dark:border-slate-700 last:border-none rounded-lg text-sm text-black dark:text-darkText mt-4 ${isSelected ? 'bg-[#f3f7ff] dark:bg-[#313c4d]' : ''
        }`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onCheckboxChange(email.id)}
            className="mr-2 accent-black dark:accent-slate-100"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={email.starred ? "#FFD56D" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400 cursor-pointer"
            onClick={() => onStarClick(email.id)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>
        <span className="font-bold">
          {email.sender}
        </span>

        {email.label && (
          <span className={`px-2 py-1  text-xs font-bold rounded ${labelColors[email.label]} dark:text-darkText`}>
            {email.label}
          </span>
        )}

        <span className="flex-1 text-center">
          {email.subject}
        </span>
      </div>

      <div className="whitespace-nowrap">
        <span className="text-gray-500 dark:text-slate-300 ">
          {email.time}
        </span>
      </div>
    </div>
  );
};