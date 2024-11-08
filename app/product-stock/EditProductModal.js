import { useState } from 'react';

export default function EditProductModal({ product, handleSave, handleCancel }) {
  const [formData, setFormData] = useState({ ...product, colors: product.colors.join(', ') });
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const isDataModified = () => {
    return (
      formData.name !== product.name ||
      formData.category !== product.category ||
      formData.price !== product.price ||
      formData.stock !== product.stock ||
      formData.colors !== product.colors.join(', ')
    );
  };

  const onSave = () => {
    if (isDataModified()) {
      setShowConfirmModal(true);
    } else {
      handleCancel()
    }
  };

  const confirmSave = () => {
    handleSave({ ...formData, colors: formData.colors.split(', ') });
    setShowConfirmModal(false);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-SecDarkBg p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Edit Product</h2>
          <div className="space-y-4">
            <div className='dark:text-darkText'>
              <label className="block">Product Name</label>
              <input
                type="text"
                className="border rounded px-4 py-2 w-full dark:bg-SecDarkBg dark:border-slate-700"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block">Category</label>
              <input
                type="text"
                className="border rounded px-4 py-2 w-full dark:bg-SecDarkBg dark:border-slate-700"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>
            <div>
              <label className="block">Price</label>
              <input
                type="number"
                className="border rounded px-4 py-2 w-full dark:bg-SecDarkBg dark:border-slate-700"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block">Available Stock</label>
              <input
                type="number"
                className="border rounded px-4 py-2 w-full dark:bg-SecDarkBg dark:border-slate-700"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block">Available Colors (comma separated)</label>
              <input
                type="text"
                className="border rounded px-4 py-2 w-full dark:bg-SecDarkBg dark:border-slate-700"
                value={formData.colors}
                onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="mt-6 space-x-4">
            <button className="bg-[#4880FF] text-white px-4 py-2 rounded" onClick={onSave}>Save</button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>

      {showConfirmModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-SecDarkBg p-4 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Confirm Product Details</h3>
            <p><strong>Product Name:</strong> {formData.name}</p>
            <p><strong>Category:</strong> {formData.category}</p>
            <p><strong>Price:</strong> ${formData.price}</p>
            <p><strong>Stock:</strong> {formData.stock}</p>
            <p><strong>Colors:</strong> {formData.colors}</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button className="bg-[#00b69b] text-white px-4 py-2 rounded" onClick={confirmSave}>Confirm</button>
              <button className="bg-gray-300 dark:text-black px-4 py-2 rounded" onClick={() => setShowConfirmModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}