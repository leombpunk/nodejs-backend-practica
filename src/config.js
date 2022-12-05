import { config } from 'dotenv'
config()
//process variable global de node
//env almacena todas las variables de entorno (para este archivo todos los valores son string)
//PORT lo encontras en el archivo .env que lo administra 'dotenv'
//console.log(process.env.PORT)

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'developer1924'
export const DB_DATABASE = process.env.DB_DATABASE || 'nodejs_practica_fazt'
export const DB_PORT = process.env.DB_PORT || 3306