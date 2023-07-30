import { infoCursos } from "../models/cursoModel.js";
import { filtrarCursos, filtrarCursosPorDosParametros } from '../utils/utils.js';

// Controlador para obtener todos los cursos de programación
export async function getAllCourses(req, res) {
    const { programacion } = infoCursos;
    try {
        res.json(programacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los cursos de programación' });
    }
}

// Controlador para obtener todos los cursos de programación por lenguaje
export async function getCoursesByLanguage(req, res) {
    try {
        filtrarCursos(req, res, 'programacion', 'lenguaje');
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los cursos de programación por lenguaje' });
    }
}

// Controlador para obtener todos los cursos de programación por nivel
export async function getCoursesByLanguageAndLevel(req, res) {
    try {
        filtrarCursosPorDosParametros(req, res, 'programacion', 'lenguaje', 'nivel');
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los cursos de programación por nivel' });
        // res.status(500).end();
    }

}

// Controlador para crear un nuevo curso de programación
export async function postCourse(req, res) {
    const { programacion } = infoCursos;
    const { body } = req;
    const { titulo, lenguaje, vistas, nivel } = body;
    try {
        const id = programacion.length + 1;
        const newCourse = { id, titulo, lenguaje, vistas, nivel };
        programacion.push(newCourse);
        res.json(newCourse);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear un nuevo curso de programación' });
    }
}

// Controlador para actualizar un curso de programación
export async function updateCourse(req, res) {
    const { programacion } = infoCursos;
    const { id } = req.params;
    const { body } = req;
    const { titulo, lenguaje, vistas, nivel } = body;
    try {
        const courseToUpdate = programacion.find(course => course.id === parseInt(id));
        courseToUpdate.titulo = titulo;
        courseToUpdate.lenguaje = lenguaje;
        courseToUpdate.vistas = vistas;
        courseToUpdate.nivel = nivel;
        res.json(courseToUpdate);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar un curso de programación' });
    }
}

// Controlador para modificar un curso de programación con PATCH
export async function patchCourse(req, res) {
    const { programacion } = infoCursos;
    const { id } = req.params;
    const { body } = req;

    try {
        const courseToUpdate = programacion.find(course => course.id === parseInt(id));

        // Utilizar Object.assign() para actualizar solo los campos que se proporcionan en el body
        Object.assign(courseToUpdate, body);

        res.json(courseToUpdate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar un curso de programación' });
    }
}

// Controlador para eliminar un curso de programación
export async function deleteCourse(req, res) {
    const { programacion } = infoCursos;
    const { id } = req.params;
    try {
        const courseToDelete = programacion.find(course => course.id === parseInt(id));
        const index = programacion.indexOf(courseToDelete);
        programacion.splice(index, 1);
        res.json(courseToDelete);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar un curso de programación' });
    }
}



// // Controlador para modificar un curso de programación con PATCH
// export async function patchCourse(req, res) {
//     const { programacion } = infoCursos;
//     const { id } = req.params;
//     const { body } = req;
//     const { titulo, lenguaje, vistas, nivel } = body;
//     try {
//         const courseToUpdate = programacion.find(course => course.id === parseInt(id));
//         courseToUpdate.titulo = titulo ? titulo : courseToUpdate.titulo;
//         courseToUpdate.lenguaje = lenguaje ? lenguaje : courseToUpdate.lenguaje;
//         courseToUpdate.vistas = vistas ? vistas : courseToUpdate.vistas;
//         courseToUpdate.nivel = nivel ? nivel : courseToUpdate.nivel;
//         res.json(courseToUpdate);
//     }
//     catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error al actualizar un curso de programación' });
//     }
// }
