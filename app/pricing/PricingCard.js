export default function PricingCard({ plan, price, features, enabledFeatures, hasBackground }) {

  return (
    <div className="bg-white dark:bg-SecDarkBg transition-colors duration-100 rounded-lg  shadow-sm p-6 text-center ">
      <div>
        <h2 className="text-2xl font-bold mb-2">{plan}</h2>
        <p>Monthly Charge</p>
        <p className="text-4xl font-bold text-bue mt-4 mb-6 text-blue">{price}</p>
      </div>

      <ul className="mb-6 mt-12 space-y-8">
        {features.map((feature, index) => (
          <li key={index} className={enabledFeatures.includes(index) ? 'text-[#212121] dark:text-darkText font-semibold' : 'text-gray-400'}>
            {feature}
          </li>
        ))}
      </ul>
      <button disabled className={`mt-6 py-3 px-6 rounded-full ${hasBackground ? 'bg-blue text-white' : 'border border-blue text-blue'}`}>
        Get Started
      </button>
      <span className='block mt-6 underline'>Start Your 30 Day Free Trial</span>
    </div >
  );
}