import Image from "next/image";

export default function ProductCard({ product, isFavorite, onFavoriteClick, onEditClick }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 ${index < rating ? "fill-[#facc15]" : "fill-[#CED5D8]"}`}
        viewBox="0 0 14 13"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
    ));
  };

  return (
    <div className="overflow-hidden hover:shadow-lg transition-all rounded-lg bg-white dark:bg-SecDarkBg mt-4 md:p-4 p-2">
      <div>
        <Image src={product.image} alt={product.name} width={200} height={200} quality={100} className="w-[200px] h-[200px]" placeholder="blur" />
      </div>
      <div className="md:p-6 p-4 ">
        <div className="flex justify-between">
          <div>
            <h3 className="text-base">{product.name}</h3>
            <h4 className="text-xl text-blue mt-2">${(product.price || 0).toFixed(2)}</h4>
          </div>
          <button onClick={onFavoriteClick} className="transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill={isFavorite ? "red" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke={isFavorite ? "red" : "currentColor"} className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>

        <div className="flex space-x-1.5 mt-2">
          {renderStars(product.rating)}
          <p className="text-base ml-2">({product.reviews || 0})</p>
        </div>
        <button onClick={onEditClick} className="mt-4 bg-bgColor dark:bg-[#404b5d] dark:text-darkText px-3 py-2 rounded-lg text-sm font-medium">Edit product</button>
      </div>
    </div>
  );
}