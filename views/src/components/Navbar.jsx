import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Mi Lista de Compras</h1>
        <div>
          <Link to="/" className="mr-4">Inicio</Link>
          <Link to="/add-product" className="mr-4">Agregar Producto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
