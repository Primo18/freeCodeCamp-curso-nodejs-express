import express from 'express';
import cursos from './cursos.js';
import matematicas from './matematicas.js';
import programacion from './programacion.js';

const router = express.Router();

// Define todas las rutas en este archivo
router.use('/api/cursos', cursos);
router.use('/api/cursos/matematicas', matematicas);
router.use('/api/cursos/programacion', programacion);

// Otros routers para diferentes secciones de la aplicación también pueden ser importados y definidos aquí

export default router;
