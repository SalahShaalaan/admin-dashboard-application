export default function InvoiceHeader({ from, to, invoiceDate, dueDate }) {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8 space-y-4 md:space-y-0 dark:bg-SecDarkBg p-4 rounded-lg">
      <div>
        <h2 className="text-xl font-bold">Invoice From:</h2>
        <p>{from.name}</p>
        <p>{from.address}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold">Invoice To:</h2>
        <p>{to.name}</p>
        <p>{to.address}</p>
      </div>
      <div>
        <p><strong>Invoice Date:</strong> {invoiceDate}</p>
        <p><strong>Due Date:</strong> {dueDate}</p>
      </div>
    </div>
  );
}