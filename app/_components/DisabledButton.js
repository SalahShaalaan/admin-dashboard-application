export default function DisabledButton() {
  return (
    <button disabled className='flex items-center border border-[#D5D5D5] dark:bg-SecDarkBg transition-colors duration-100 px-4 py-2 opacity-50 rounded-xl'>
      October
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4 rounded-full ml-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}