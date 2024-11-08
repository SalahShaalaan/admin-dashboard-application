import Image from 'next/image';
import ActionButtons from './ActionButtons';

export default function ProductCards({ products, handleEdit, handleDelete }) {
  return (
    <div className="space-y-6 p-4 ">
      {products.map((product) => (
        <div key={product.id} className="p-4 rounded-lg shadow space-y-4">
          <div className="flex items-center mb-2">
            <Image src={product.image} alt={product.name} width={60} height={60} quality={100} className='rounded mr-4 w-[60px] h-[60px]' />
            <div>
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.category}</p>
            </div>
          </div>
          <div className="mb-2">
            <p><span className="font-semibold">Price:</span> {product.price}</p>
            <p><span className="font-semibold">Stock:</span> {product.stock}</p>
          </div>
          <div className="mb-2 flex items-center">
            <span className="font-semibold mr-2">Colors:</span>
            {product.colors.map((color, index) => (
              <span key={index} className="inline-block w-4 h-4 rounded-full mr-2" style={{ backgroundColor: color }}></span>
            ))}
          </div>
          <ActionButtons product={product} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}