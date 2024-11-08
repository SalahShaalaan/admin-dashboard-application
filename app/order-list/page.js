"use client";
import { useState } from 'react';
import OrderFilters from './OrderFilters';
import OrderTable from './OrderTable';
import OrderCards from './OrderCards';

const orderData = [
  { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '2019-09-04', type: 'Electric', status: 'Completed' },
  { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '2019-05-28', type: 'Book', status: 'Processing' },
  { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '2019-11-23', type: 'Medicine', status: 'Rejected' },
  { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '2019-02-05', type: 'Mobile', status: 'Completed' },
  { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '2019-07-29', type: 'Watch', status: 'Processing' },
  { id: '00006', name: 'Alfred Murray', address: '543 Weimann Mountain', date: '2019-08-15', type: 'Medicine', status: 'Completed' },
  { id: '00007', name: 'Maggie Sullivan', address: 'New Scottieberg', date: '2019-12-21', type: 'Watch', status: 'Processing' },
  { id: '00008', name: 'Rosie Todd', address: 'New Jon', date: '2019-04-30', type: 'Medicine', status: 'On Hold' },
  { id: '00009', name: 'Dollie Hines', address: '124 Lyla Forge Suite 975', date: '2019-01-09', type: 'Book', status: 'In Transit' },
];

export default function Page() {
  const [filters, setFilters] = useState({
    date: '',
    orderType: '',
    orderStatus: '',
  });

  const resetFilters = () => {
    setFilters({
      date: '',
      orderType: '',
      orderStatus: '',
    });
  };

  const filteredOrders = orderData.filter(order => {
    const dateMatch = filters.date ? order.date === filters.date : true;
    const typeMatch = filters.orderType ? order.type === filters.orderType : true;
    const statusMatch = filters.orderStatus ? order.status === filters.orderStatus : true;
    return dateMatch && typeMatch && statusMatch;
  });

  return (
    <div className="p-4 bg-bgColor dark:bg-darkBg transition-colors duration-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Order Lists</h1>
      <OrderFilters
        filters={filters}
        setFilters={setFilters}
        resetFilters={resetFilters}
      />
      {filteredOrders.length === 0 ? (
        <div className="p-4 text-red-600 bg-white dark:bg-SecDarkBg rounded-lg mt-4">
          Sorry! No orders match this type
        </div>
      ) : (
        <>
          <div className="hidden md:block">
            <OrderTable orders={filteredOrders} />
          </div>
          <div className="md:hidden">
            <OrderCards orders={filteredOrders} />
          </div>
        </>
      )}
    </div>
  );
}