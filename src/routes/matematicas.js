import express from 'express';
import { getAllCourses, getCoursesByTheme } from '../controllers/matematicasController.js';

const matematicas = express.Router();

// Ruta para obtener todos los cursos de programación
matematicas.get('/', getAllCourses);

// Ruta para obtener todos los cursos de programación por lenguaje
matematicas.get('/:lenguaje', getCoursesByTheme);

export default matematicas;
