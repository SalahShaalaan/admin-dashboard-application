import React from 'react';
import Image from 'next/image';
import watchImg from '@/public/watch.png';
import DisabledButton from './DisabledButton';

export default function DealsDetails() {
  // Placeholder data
  const deals = [
    {
      product: { name: 'Apple Watch', image: watchImg },
      location: '6096 Marjolaine Landing',
      dateTime: '12.09.2019 - 12:53 PM',
      piece: 423,
      amount: '$34,295',
      status: 'Delivered',
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 text-black dark:text-darkText bg-white dark:bg-SecDarkBg transition-colors duration-100 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0" id="deals-details-title">Deals Details</h1>
        <DisabledButton />
      </div>

      {/* Large Screens */}
      <div className="hidden lg:block overflow-x-auto rounded-lg shadow">
        <table className="w-full border-collapse">
          <caption className="sr-only">Deals Details</caption>
          <thead className="bg-bgColor dark:bg-[#313c4d] text-left text-sm font-semibold uppercase tracking-wider">
            <tr>
              <th scope="col" className="p-4">Product Name</th>
              <th scope="col" className="p-4">Location</th>
              <th scope="col" className="p-4">Date - Time</th>
              <th scope="col" className="p-4">Piece</th>
              <th scope="col" className="p-4">Amount</th>
              <th scope="col" className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {deals.map((deal, index) => (
              <tr key={index}>
                <td className="p-4 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <Image className="rounded-full" src={deal.product.image} alt="" width={40} height={40} placeholder='blur' />
                    <span className="font-medium">{deal.product.name}</span>
                  </div>
                </td>
                <td className="p-4 whitespace-nowrap">{deal.location}</td>
                <td className="p-4 whitespace-nowrap">{deal.dateTime}</td>
                <td className="p-4 whitespace-nowrap">{deal.piece}</td>
                <td className="p-4 whitespace-nowrap font-semibold">{deal.amount}</td>
                <td className="p-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${deal.status === 'Delivered' ? 'bg-[#00b69b] text-white' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {deal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Medium Screens */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
        <div className="font-semibold">Product Name</div>
        <div className="font-semibold">Details</div>
        {deals.map((deal, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center space-x-3">
              <Image
                src={deal.product.image}
                alt={`${deal.product.name} image`}
                width={36}
                height={36}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{deal.product.name}</span>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold">Location:</span> {deal.location}</p>
              <p><span className="font-semibold">Date - Time:</span> {deal.dateTime}</p>
              <p><span className="font-semibold">Piece:</span> {deal.piece}</p>
              <p><span className="font-semibold">Amount:</span> {deal.amount}</p>
              <p>
                <span className="font-semibold">Status:</span>
                <span className={`ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${deal.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                  {deal.status}
                </span>
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Small Screens */}
      <div className="md:hidden space-y-4">
        {deals.map((deal, index) => (
          <div key={index} className="bg-white dark:bg-SecDarkBg p-4 rounded-lg shadow-md space-y-3">
            <div className="flex items-center space-x-3">
              <Image
                src={deal.product.image}
                alt={`${deal.product.name} image`}
                width={36}
                height={36}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium text-lg">{deal.product.name}</span>
            </div>
            <p><span className="font-semibold">Location:</span> {deal.location}</p>
            <p><span className="font-semibold">Date - Time:</span> {deal.dateTime}</p>
            <p><span className="font-semibold">Piece:</span> {deal.piece}</p>
            <p><span className="font-semibold">Amount:</span> {deal.amount}</p>
            <div>
              <span className="font-semibold">Status:</span>
              <span className={`ml-2 inline-flex items-center rounded-full px-2.5 py-1 text-sm font-medium ${deal.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                {deal.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}