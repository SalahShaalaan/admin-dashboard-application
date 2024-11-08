"use client"
import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductCards from './ProductCards';
import EditProductModal from './EditProductModal';
import { productData } from './ProductData';

export default function Page() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(productData);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSave = (updatedProduct) => {
    setProducts(products.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    setEditingProduct(null);
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 w-full flex flex-col bg-bgColor dark:bg-darkBg  text-black dark:text-darkText">
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Product Stock</h1>
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="rounded-lg flex-grow bg-white dark:bg-SecDarkBg overflow-hidden">
        {filteredProducts.length > 0 ? (
          <>
            <div className="hidden md:block">
              <ProductTable
                products={filteredProducts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>
            <div className="md:hidden dark:bg-darkBg border space-y-3 dark:border-slate-700">
              <ProductCards
                products={filteredProducts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>
          </>
        ) : (
          <div className="p-6 text-center text-2xl font-bold mt-14 ">
            Oops! there is no products .
          </div>
        )}
      </div>
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
}