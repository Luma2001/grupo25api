const express = require("express")
const router = express.Router()

const { registrarAlumno, traerAlumnos, traerUnAlumno, traerUnGrupo, actualizarAlumno, borrarAlumno } = require("../controllers/alumnosControllers.js")

router.post("/", registrarAlumno)
router.get("/", traerAlumnos) // 
router.get("/:id", traerUnAlumno) 
router.get("/grupo/:grupo", traerUnGrupo)
router.put("/:id", actualizarAlumno) // 
router.delete("/:id", borrarAlumno) //

module.exports = router
