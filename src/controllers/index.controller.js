import { pool } from '../db.js'//importar el archivo de conexion de la base de datos
export const ping = async (req, res) => { 
    // const result = await pool.query("SELECT 1+1 AS result")
    const [result] = await pool.query("SELECT 1+1 AS result")
    // res.json(result)
    res.send(result[0])
}