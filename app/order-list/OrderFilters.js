export default function OrderFilters({ filters, setFilters, resetFilters }) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-4 p-4 rounded-lg bg-white dark:bg-SecDarkBg w-fit border dark:border-none divide-x-2 dark:divide-slate-500">
      <input
        type="date"
        className="rounded p-4 dark:bg-SecDarkBg"
        value={filters.date}
        onChange={(e) => setFilters({ ...filters, date: e.target.value })}
        aria-label="Filter by date"
      />
      <select
        className="rounded p-4 dark:bg-SecDarkBg cursor-pointer"
        value={filters.orderType}
        onChange={(e) => setFilters({ ...filters, orderType: e.target.value })}
        aria-label="Filter by order type"
      >
        <option value="">Order Type</option>
        <option value="Electric">Electric</option>
        <option value="Book">Book</option>
        <option value="Medicine">Medicine</option>
        <option value="Mobile">Mobile</option>
        <option value="Watch">Watch</option>
      </select>
      <select
        className="rounded p-4 dark:bg-SecDarkBg cursor-pointer"
        value={filters.orderStatus}
        onChange={(e) => setFilters({ ...filters, orderStatus: e.target.value })}
        aria-label="Filter by order status"
      >
        <option value="">Order Status</option>
        <option value="Completed">Completed</option>
        <option value="Processing">Processing</option>
        <option value="Rejected">Rejected</option>
        <option value="On Hold">On Hold</option>
        <option value="In Transit">In Transit</option>
      </select>
      <button
        className="text-red-600 hover:text-red-800 p-4"
        onClick={resetFilters}
      >
        Reset Filter
      </button>
    </div>
  );
}