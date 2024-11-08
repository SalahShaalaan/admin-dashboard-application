import OrderStatus from "./OrderStatus";

export default function OrderTable({ orders }) {

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full bg-white dark:bg-SecDarkBg">
        <thead>
          <tr >
            <th className="px-4 py-6 text-left">ID</th>
            <th className="px-4 py-6 text-left">NAME</th>
            <th className="px-4 py-6 text-left">ADDRESS</th>
            <th className="px-4 py-6 text-left">DATE</th>
            <th className="px-4 py-6 text-left">TYPE</th>
            <th className="px-4 py-6 text-left">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t dark:border-slate-700 ">
              <td className="px-4 py-6">{order.id}</td>
              <td className="px-4 py-6">{order.name}</td>
              <td className="px-4 py-6">{order.address}</td>
              <td className="px-4 py-6">{order.date}</td>
              <td className="px-4 py-6">{order.type}</td>
              <td className="px-4 py-6">
                <OrderStatus status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}