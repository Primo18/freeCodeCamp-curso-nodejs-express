// app.js
import express from 'express';
// import { pool } from './config/db.js';
import routes from './src/routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes con formato JSON
app.use(express.json());

// Middleware para agregar la conexión a la base de datos a cada solicitud
// app.use((req, res, next) => {
//     req.db = pool; // Agrega la conexión a la base de datos al objeto req
//     next(); // Llama al siguiente middleware o ruta en la cadena
// });

// Routing
app.get('/', (req, res) => {
    res.send('Hello World! 🌍');
});

// Utiliza todas las rutas importadas desde el archivo /src/routes/index.js
app.use(routes);

// Inicialización del servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}... http://localhost:${PORT}`);
});
