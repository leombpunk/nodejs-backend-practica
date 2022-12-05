import { pool } from "../db.js";
export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados");
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "Algo malio sal" });
  }
};
export const getEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
      id,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.send(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Algo malio sal" });
  }
};
export const createEmpleados = async (req, res) => {
  try {
    //se deberian validar datos
    const { nombre, salario } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO empleados(nombre, salario) VALUES (? , ?)",
      [nombre, salario]
    );
    console.log(req.body);
    res.send({
      id: rows.insertId,
      nombre,
      salario,
    });
  } catch (error) {
    res.status(500).json({ message: "Algo malio sal" });
  }
};
export const updateEmpleados = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, salario } = req.body;
    const [result] = await pool.query(
      "UPDATE empleados SET nombre = IFNULL(?,nombre), salario = IFNULL(?,salario) WHERE id = ?",
      [nombre, salario, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    //devuelve el empleado actualizado
    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
      id,
    ]);
    res.send(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Algo malio sal" });
  }
};
export const deleteEmpleados = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [
      id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Algo malio sal" });
  }
};