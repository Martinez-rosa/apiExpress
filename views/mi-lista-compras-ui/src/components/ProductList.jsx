import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/productos')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Nombre</th>
            <th className="border border-gray-400 px-4 py-2">Cantidad</th>
            <th className="border border-gray-400 px-4 py-2">Categoría</th>
            <th className="border border-gray-400 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td className="border border-gray-400 px-4 py-2">{product.nombre}</td>
              <td className="border border-gray-400 px-4 py-2">{product.cantidad}</td>
              <td className="border border-gray-400 px-4 py-2">{product.categoria}</td>
              <td className="border border-gray-400 px-4 py-2">
                {/* Botones para editar o eliminar */}
                <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Editar</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
