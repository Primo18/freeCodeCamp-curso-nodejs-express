import express from 'express';
import {
    getAllCourses,
    getCoursesByLanguage,
    getCoursesByLanguageAndLevel,
    postCourse,
    updateCourse,
    patchCourse,
    deleteCourse
} from '../controllers/programacionController.js';

const programacion = express.Router();

// Ruta para obtener todos los cursos de programación
programacion.get('/', getAllCourses);

// Ruta para obtener todos los cursos de programación por nivel
programacion.get('/:lenguaje/:nivel', getCoursesByLanguageAndLevel);

// Ruta para obtener todos los cursos de programación por lenguaje
programacion.get('/:lenguaje', getCoursesByLanguage);

// Ruta para crear un nuevo curso de programación
programacion.post('/', postCourse);

// Ruta para actualizar un curso de programación
programacion.put('/:id', updateCourse);

// PATCH para actualizar un curso de programación
programacion.patch('/:id', patchCourse);

// Ruta para eliminar un curso de programación
programacion.delete('/:id', deleteCourse);



export default programacion;
