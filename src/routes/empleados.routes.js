import { Router } from 'express' //para poder agrupar todas las rutas y ponerles nombre
import { getEmpleados, createEmpleados, updateEmpleados, deleteEmpleados, getEmpleado } from '../controllers/empleados.controller.js'
const router = Router()
router.get('/empleados', getEmpleados)
router.get('/empleados/:id', getEmpleado)
router.post('/empleados', createEmpleados)
//se podria cambiar a patch por el tema de que se necesite actualizar parcialmente, prefiero el put
router.put('/empleados/:id', updateEmpleados)
router.delete('/empleados/:id', deleteEmpleados)
export default router