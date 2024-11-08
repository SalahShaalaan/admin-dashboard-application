export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full md:w-auto">
      <input
        type="text"
        placeholder="Search product name"
        className="w-full md:w-64 border rounded-full px-4 py-2 pl-10 focus:outline-none  dark:bg-SecDarkBg dark:border-slate-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
      </svg>
    </div>
  );
}