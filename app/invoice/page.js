"use client"
import { useState } from 'react';
import InvoiceHeader from './InvoiceHeader';
import InvoiceTable from './InvoiceTable';
import InvoiceFooter from './InvoiceFooter';


export default function Invoice() {
  const [invoiceData] = useState({
    from: {
      name: 'Virginia Walker',
      address: '9048 Old Locks Square #625',
    },
    to: {
      name: 'Austin Miller',
      address: 'Brookview',
    },
    invoiceDate: '12 Nov 2019',
    dueDate: '25 Dec 2019',
    items: [
      { id: 1, description: 'Children Toy', quantity: 2, baseCost: 20, totalCost: 80 },
      { id: 2, description: 'Makeup', quantity: 2, baseCost: 50, totalCost: 100 },
      { id: 3, description: 'Asus Laptop X', quantity: 5, baseCost: 1000, totalCost: 500 },
      { id: 4, description: 'Iphone X', quantity: 4, baseCost: 1000, totalCost: 4000 },
    ],
    totalAmount: 4680,
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 bg-bgColor dark:bg-darkBg transition-colors duration-100 rounded-lg">
      <h1 className='text-3xl font-bold'>Invoice</h1>
      <div className="bg-white dark:bg-SecDarkBg p-8 mt-6 rounded-lg shadow-md">
        <InvoiceHeader
          from={invoiceData.from}
          to={invoiceData.to}
          invoiceDate={invoiceData.invoiceDate}
          dueDate={invoiceData.dueDate}
        />
        <InvoiceTable items={invoiceData.items} />
        <InvoiceFooter totalAmount={invoiceData.totalAmount} onPrint={handlePrint} />
      </div>
    </div>
  );
}