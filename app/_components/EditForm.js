export default function EditForm({ product, onSubmit, onCancel, onChange }) {
  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "price", label: "Price", type: "number", step: "0.01" },
    { name: "rating", label: "Rating", type: "number", min: 0, max: 5, step: 0.1 },
    { name: "reviews", label: "Reviews", type: "number" },
  ];

  return (
    <form onSubmit={onSubmit} className="p-6 mt-4 bg-white dark:bg-SecDarkBg transition-colors duration-100 rounded-lg shadow-lg text-black">
      {fields.map(({ name, label, ...props }) => (
        <div key={name} className="mb-4">
          <label htmlFor={name} className="block text-sm font-medium dark:text-darkText">{label}</label>
          <input
            id={name}
            name={name}
            value={product[name] || ''}
            onChange={onChange}
            className="mt-1 w-full rounded-lg border outline-none indent-2 dark:bg-SecDarkBg dark:text-darkText dark:border-gray-600 p-2"
            {...props}
          />
        </div>
      ))}
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-[#ECECEE] dark:bg-[#313c4d] dark:text-darkText rounded-md">Cancel</button>
        <button type="submit" className="px-4 py-2 bg-blue text-white rounded-md">Save</button>
      </div>
    </form>
  );
}