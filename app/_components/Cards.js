import { useState } from "react";
import EditForm from "./EditForm";
import ProductCard from "./ProductCard";

export default function Card({ product }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prev => ({
      ...prev,
      [name]: ['price', 'rating', 'reviews'].includes(name) ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="mt-6 text-[#202224] dark:text-darkText">
      {isEditing ? (
        <EditForm
          product={editedProduct}
          onSubmit={handleSubmit}
          onCancel={() => setIsEditing(false)}
          onChange={handleInputChange}
        />
      ) : (
        <ProductCard
          product={editedProduct}
          isFavorite={isFavorite}
          onFavoriteClick={() => setIsFavorite(!isFavorite)}
          onEditClick={() => setIsEditing(true)}
        />
      )}
    </div>
  );
}