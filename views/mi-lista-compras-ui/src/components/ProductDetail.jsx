import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/productos/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <p>Cargando detalles del producto...</p>;

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-2xl font-bold mb-4">Detalles del Producto</h2>
      <p><strong>Nombre:</strong> {product.nombre}</p>
      <p><strong>Cantidad:</strong> {product.cantidad}</p>
      <p><strong>Categoría:</strong> {product.categoria}</p>
    </div>
  );
};

export default ProductDetail;
