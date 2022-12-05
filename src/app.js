import express from "express" //importa el framework express
import indexRoutes from './routes/index.routes.js'
import empleadosRoutes from './routes/empleados.routes.js'

//npm run dev
const app = express()
app.use(express.json()) //va a convertir a json lo que reciba y se lo va pasar a los demas use
app.use(indexRoutes)
app.use('/api', empleadosRoutes)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found'})
})

export default app