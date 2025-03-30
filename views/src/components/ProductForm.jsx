import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ nombre: '', cantidad: '', categoria: '' });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/productos/${id}`)
      .then(response => setFormData(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/productos/${id}`, formData)
      .then(() => {
        alert('Producto actualizado con éxito');
        navigate('/');
      })
      .catch(error => console.error('Error updating product:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto my-5">
      <h2 className="text-xl font-bold mb-4">Editar Producto</h2>
      <div className="mb-3">
        <label>Nombre:</label>
        <input type="text" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} required />
      </div>
      <div className="mb-3">
        <label>Cantidad:</label>
        <input type="number" value={formData.cantidad} onChange={(e) => setFormData({ ...formData, cantidad: e.target.value })} required />
      </div>
      <div className="mb-3">
        <label>Categoría:</label>
        <input type="text" value={formData.categoria} onChange={(e) => setFormData({ ...formData, categoria: e.target.value })} required />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Actualizar</button>
    </form>
  );
};

export default EditProductForm;
