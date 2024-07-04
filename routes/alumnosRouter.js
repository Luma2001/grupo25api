const express = require("express")
const router = express.Router()

const { registrarAlumno, traerAlumnos, traerUnAlumno, borrarAlumno } = require("../controllers/alumnosControllers.js")

router.post("/", registrarAlumno)
router.get("/", traerAlumnos) // 
router.get("/:id", traerUnAlumno) // 
// router.post("/", crearAlumno) // 
router.put("/:id", actualizarAlumno) // 
router.delete("/:id", borrarAlumno) //

module.exports = router
