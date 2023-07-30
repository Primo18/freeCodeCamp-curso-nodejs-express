// db.js
import { Pool } from 'pg';

// Configuración de la conexión a la base de datos
const pool = new Pool({
    user: 'tu_usuario',
    password: 'tu_contraseña',
    host: 'localhost',
    port: 5432,
    database: 'nombre_de_tu_base_de_datos',
});

// Verificar si la conexión a la base de datos fue exitosa
pool.connect((err, client, done) => {
    if (err) {
        console.error('Error al conectarse a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos!');
    }
});

export default pool;
