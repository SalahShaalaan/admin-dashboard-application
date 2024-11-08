"use client"
import { useState } from "react";
import EditForm from "./EditForm";
import ProductCard from "./ProductCard";

export default function FavoriteCard({ product, onRemoveFavorite }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: name === 'price' || name === 'rating' || name === 'reviews' ? parseFloat(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="mt-6 text-black">
        <EditForm
          product={editedProduct}
          onSubmit={handleSubmit}
          onCancel={() => setIsEditing(false)}
          onChange={handleInputChange}
        />
      </div>
    );
  }

  return (
    <div className="mt-6 text-black dark:text-darkText ">
      <ProductCard
        product={editedProduct}
        isFavorite={true}
        onFavoriteClick={onRemoveFavorite}
        onEditClick={() => setIsEditing(true)}
        renderStars={renderStars}
      />
    </div>
  );
}