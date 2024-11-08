"use client"
import { useState } from 'react';
import FavoriteCard from '../_components/FavoriteCard';
import favWatch from "@/public/fav-watch.png"

export default function FavoritesPage() {

  const [favorites, setFavorites] = useState([
    // No database; products manually entered without API.
    // Hard coded Placeholder data for testing ....
    { id: 1, name: 'Apple Watch Series 4 ', price: 120.00, rating: 4, reviews: 131, image: favWatch },
    { id: 2, name: 'Air-Max-270', price: 60, rating: 4, reviews: 64, image: favWatch },
    { id: 3, name: 'Minimal Chair Tool', price: 24.59, rating: 5, reviews: 63, image: favWatch },
    { id: 4, name: 'Amazfit Vip', price: 30, rating: 4, reviews: 45, image: favWatch },
    { id: 5, name: 'Gumbo Mouse', price: 55.5, rating: 5, reviews: 104, image: favWatch },
    { id: 6, name: 'Camera Tripod', price: 72.33, rating: 5, reviews: 114, image: favWatch },

  ]);

  const handleRemoveFavorite = (productId) => {
    setFavorites(favorites.filter(product => product.id !== productId));
  };

  return (
    <div className="md:p-4 p-0 bg-bgColor dark:bg-darkBg">
      <h1 className="text-3xl font-bold">Favorites</h1>
      <div className="grid grid-cols-auto-fit-350 gap-25">
        {favorites.map(product => (
          <FavoriteCard
            key={product.id}
            product={product}
            onRemoveFavorite={() => handleRemoveFavorite(product.id)}
          />
        ))}
      </div>
    </div>
  );
}