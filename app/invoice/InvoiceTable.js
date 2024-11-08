export default function InvoiceTable({ items }) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-bgColor dark:bg-[#323d4e] dark:text-darkText">
            <th className="p-4 text-left text-sm font-medium">Serial No.</th>
            <th className="p-4 text-left text-sm font-medium">Description</th>
            <th className="p-4 text-left text-sm font-medium">Quantity</th>
            <th className="p-4 text-left text-sm font-medium">Base Cost</th>
            <th className="p-4 text-left text-sm font-medium">Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className="border-b dark:border-slate-700">
              <td className="p-4 text-sm">{index + 1}</td>
              <td className="p-4 text-sm">{item.description}</td>
              <td className="p-4 text-sm">{item.quantity}</td>
              <td className="p-4 text-sm">${item.baseCost}</td>
              <td className="p-4 text-sm">${item.totalCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}