# 🛒 Proyecto: API Lista de Compras

Este proyecto es una API sencilla desarrollada con **Node.js**, **Express** y **MongoDB** que permite gestionar fácilmente una lista de compras personalizada. Los usuarios pueden agregar, ver, modificar y eliminar productos de su lista.

---

## 🌟 Funcionalidades Principales

La API permite realizar las siguientes acciones:

- **Agregar un producto** a la lista (nombre, cantidad, categoría).
- **Ver todos los productos** que tienes en la lista de compras.
- **Consultar un producto específico** mediante su ID.
- **Actualizar la información de un producto** existente.
- **Eliminar un producto** de la lista.

---

## 📁 Estructura del Proyecto

```
/mi-lista-compras
├── bin/
├── config/mongodb/
├── modules/
│   └── Producto.js
├── routes/
│   └── productos.js
├── tests/
├── views/
├── .env
├── app.js
├── package.json
└── README.md
```

---

## 🛠 Instalación

**1. Clona el repositorio**

```bash
git clone <URL_DEL_REPO>
```

**2. Instala las dependencias**

```bash
npm install
```

**3. Crea el archivo `.env` en la raíz**

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/listaCompras
```

**4. Ejecuta el servidor**

```bash
npm start
```

---

## 📌 Rutas de la API

| Método | Ruta                     | Descripción                      |
|--------|--------------------------|----------------------------------|
| POST   | `/api/productos`         | Agregar un nuevo producto        |
| GET    | `/api/productos`         | Obtener todos los productos      |
| GET    | `/api/productos/:id`     | Obtener un producto específico   |
| PUT    | `/api/productos/:id`     | Actualizar un producto           |
| DELETE | `/api/productos/:id`     | Eliminar un producto             |

---

## 🗃 Modelo de Datos

Cada producto tiene la siguiente estructura en MongoDB:

```javascript
{
  nombre: String,
  cantidad: Number,
  categoria: String,
  fechaCreacion: Date
}
```

---

## 🚩 Ejemplos de Peticiones

### ▶️ Crear Producto

```json
POST /api/productos
{
  "nombre": "Leche",
  "cantidad": 2,
  "categoria": "Lácteos"
}
```

### ▶️ Obtener Productos

```json
GET /api/productos
```

### ▶️ Actualizar Producto

```json
PUT /api/productos/<id_del_producto>
{
  "cantidad": 3
}
```

### ▶️ Eliminar Producto

```json
DELETE /api/productos/<id_del_producto>
```

---

## 🧪 Test de la API

Puedes usar **Postman** o herramientas similares para probar la API fácilmente.

---

## 🚀 Tecnologías

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**

---

## 📌 Autores

- **Maura Martinez Noda**
-  **Jose Cabrera**
- **Brenda Lopez**
- **Daniel Lavin**

---

📅 **Fecha de entrega:** 27 de marzo



