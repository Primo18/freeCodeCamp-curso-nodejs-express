import { infoCursos } from "../models/cursoModel.js";
import { filtrarCursos } from '../utils/utils.js';



// Controlador para obtener todos los cursos de matematicas
export async function getAllCourses(req, res) {
    const { matematicas } = infoCursos;
    try {
        res.json(matematicas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los cursos de matematicas' });
    }
}

// Controlador para obtener todos los cursos de matematicas por tema
export async function getCoursesByTheme(req, res) {
    try {
        filtrarCursos(req, res, 'matematicas', 'lenguaje');
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los cursos de programación por lenguaje' });
    }
}


