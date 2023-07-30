import { infoCursos } from '../models/cursoModel.js';

// Método genérico para filtrar los cursos por un parámetro dado y enviar la respuesta adecuada
export const filtrarCursos = (req, res, categoria, parametro) => {
    const valor = req.params[parametro];
    const cursos = infoCursos[categoria].filter(
        (curso) => curso[parametro] === valor
    );
    if (cursos.length === 0) {
        res.status(404).send('No se encontró el curso!!');
        return;
    }
    res.json(cursos);
};

// Método genérico para filtrar los cursos por dos parámetros dados y enviar la respuesta adecuada
export const filtrarCursosPorDosParametros = (req, res, categoria, parametro1, parametro2) => {
    const valor1 = req.params[parametro1];
    const valor2 = req.params[parametro2];
    const cursos = infoCursos[categoria].filter(
        (curso) => curso[parametro1] === valor1 && curso[parametro2] === valor2
    );
    if (cursos.length === 0) {
        res.status(404).send('No se encontró el curso!!!!');
        return;
    }
    res.json(cursos);
};

// Método genérico para obtener un curso por su ID y enviar la respuesta adecuada
export const findById = (id) => {
    const curso = [...infoCursos.programacion, ...infoCursos.matematicas];
    return curso.find((curso) => curso.id === parseInt(id));
};