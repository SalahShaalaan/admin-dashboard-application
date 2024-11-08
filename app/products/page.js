'use client'
import Cards from "../_components/Cards"
import Header from "./Header"
import blackWatch from "@/public/black-watch.png"

export default function Page() {
  const productData = {
    // placeholder data for testing ...
    name: "Apple Watch Series 4",
    price: 120.00,
    image: blackWatch,
    rating: 4,
    reviews: 131
  };

  return (
    <div className="md:p-4 p-0 bg-bgColor dark:bg-darkBg transition-colors duration-100 rounded-lg">
      <Header />
      <div className="grid grid-cols-auto-fit-250 gap-20">
        {[...Array(4)].map((_, index) => (
          <Cards key={index} product={productData} />
        ))}
      </div>
    </div>
  );
}