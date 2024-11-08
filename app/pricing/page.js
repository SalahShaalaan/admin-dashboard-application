import PricingCard from './PricingCard';

const pricingData = [
  {
    plan: 'Basic',
    price: '$14.99',
    features: ['Free Setup', '20 GB Bandwidth Limit', '20 User Connection', '10 GB Disk Space', 'Analytics Report', 'Public API Access', 'Custom Content Management'],
    enabledFeatures: [0, 1, 2],
    hasBackground: false,
  },
  {
    plan: 'Standard',
    price: '$49.99',
    features: ['Free Setup', '20 GB Bandwidth Limit', '20 User Connection', 'Unlimited Disk Space', 'Analytics Report', 'Public API Access', 'Custom Content Management'],
    enabledFeatures: [0, 1, 2, 3],
    hasBackground: false,
  },
  {
    plan: 'Premium',
    price: '$89.99',
    features: ['Free Setup', '20 GB Bandwidth Limit', '20 User Connection', 'Unlimited Disk Space', 'Analytics Report', 'Priority Integration Access', 'Custom Content Management'],
    enabledFeatures: [0, 1, 2, 3, 4, 5, 6],
    hasBackground: true,
  },
];

export default function Pricing() {
  return (
    <div className='p-4 bg-bgColor dark:bg-darkBg w-full rounded-lg'>
      <h1 className='text-3xl font-bold'>Pricing</h1>
      <div className="mt-6 grid grid-cols-auto-fit-250 gap-20">
        {pricingData.map((data, index) => (
          <PricingCard
            key={index}
            plan={data.plan}
            price={data.price}
            features={data.features}
            enabledFeatures={data.enabledFeatures}
            hasBackground={data.hasBackground}
          />
        ))}
      </div>
    </div>
  );
}