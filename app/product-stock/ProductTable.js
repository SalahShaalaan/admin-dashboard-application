import Image from 'next/image';
import ActionButtons from './ActionButtons';

export default function ProductTable({ products, handleEdit, handleDelete }) {
  return (
    <div className="overflow-x-auto text-black dark:text-darkText dark:bg-SecDarkBg">
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm dark:bg-[#323d4e] ">
            <th className="p-4">Image</th>
            <th className="p-4">Product Name</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price</th>
            <th className="p-4">Available Stock</th>
            <th className="p-4">Available Color</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t dark:border-slate-700 ">
              <td className="p-4">
                <Image src={product.image} alt={product.name} width={60} height={60} quality={100} className='rounded w-[60px] h-[60px]' />
              </td>
              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.category}</td>
              <td className="p-4">${product.price}</td>
              <td className="p-4">{product.stock}</td>
              <td className="p-4">
                {product.colors.map((color, index) => (
                  <span key={index} className="inline-block w-4 h-4 rounded-full mr-2" style={{ backgroundColor: color }}></span>
                ))}
              </td>
              <td className="p-4">
                <ActionButtons product={product} handleEdit={handleEdit} handleDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};