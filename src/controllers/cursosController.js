import { infoCursos } from '../models/cursoModel.js';
import { findById } from '../utils/utils.js';

// Controlador para obtener todos los cursos
export async function obtenerCursos(req, res) {
    try {
        const cursos = await infoCursos; // Utiliza el modelo infoCursos para obtener todos los cursos desde la base de datos
        res.json(cursos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los cursos' });
    }
}

// Controlador para obtener un curso por su ID
export async function obtenerCursoPorId(req, res) {
    try {
        const { id } = req.params; // Obtiene el ID de los parámetros de la solicitud
        const curso = await findById(id); // Utiliza el método findById para obtener el curso desde la base de datos
        if (!curso) {
            res.status(404).json({ mensaje: 'No se encontró el curso!' });
            return;
        }
        res.json(curso);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener el curso' });
    }

}

// Otros controladores para crear, actualizar y eliminar cursos también pueden ser definidos aquí
