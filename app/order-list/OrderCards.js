import OrderStatus from "./OrderStatus";

export default function OrderCards({ orders }) {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="bg-white dark:bg-SecDarkBg p-4 rounded-lg shadow text-black dark:text-darkText">
          <div className="font-bold">{order.name}</div>
          <div className="text-sm">{order.address}</div>
          <div className="mt-2 flex justify-between items-center">
            <div className="text-sm">
              <div>ID: {order.id}</div>
              <div>Date: {order.date}</div>
              <div>Type: {order.type}</div>
            </div>
            <OrderStatus status={order.status} />
          </div>
        </div>
      ))}
    </div>
  );
}