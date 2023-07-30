import express from 'express';
import { obtenerCursos, obtenerCursoPorId } from '../controllers/cursosController.js';

const cursos = express.Router();

// Ruta para obtener todos los cursos
cursos.get('/', obtenerCursos);

//  Ruta para obtener un curso por su ID
// cursos.get('/:id', obtenerCursoPorId);

// Otros enpoints para crear, actualizar y eliminar cursos también pueden ser definidos aquí

export default cursos;
