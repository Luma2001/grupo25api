const empleadosModel = require("../models/alumnosModel.js")

// FUNCION QUE TRAE TODOS LOS ALUMNOS
// READ - GET
const traerAlumnos = async (req, res) => {
    try {
        const alunmos = await empleadosModel.findAll()
        res.json(alunmos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = { traerAlumnos }