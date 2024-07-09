const alumnosModel = require("../models/alumnosModel.js")

// FUNCION QUE TRAE TODOS LOS ALUMNOS

//CREATE - POST
const registrarAlumno = async (req,res)=>{
    try {
        const alumno = await alumnosModel.create(req.body)
        res.json({"message":"Registro creado con éxito"})
    } catch (error) {
        res.json({message:error.message})
    }
}




// READ - GET
const traerAlumnos = async (req, res) => {
    try {
        const alumnos = await alumnosModel.findAll()
        res.json(alumnos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// READ - GET BY ID
const traerUnAlumno = async (req, res) => {
    try {
        const alunmo = await alumnosModel.findByPk(req.params.id)
        res.json(alunmo)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//READ - GET BY GRUPO
const traerUnGrupo = async (req,res)=>{
    try {
        const grupo = await alumnosModel.findAll({
            where:{grupo:req.params.grupo}
        })
        res.json(grupo)

    } catch (error) {
        res.json({message:error.message})
    }
}

//UPDATE - PUT
const actualizarAlumno = async (req,res) =>{
    try {
        await alumnosModel.update(req.body,{
            where: {id:req.params.id}
        }) 
        res.json ({"message":"Registro actualizado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}

//DELETE -DELETE
const borrarAlumno = async (req, res)=>{
    try {
        await alumnosModel.destroy({
            where:{id:req.params.id}
        })
        res.json({"message": `Alumno ID#${req.params.id} borrado correctamente.`})
    } catch (error) {
        res.json({message:error.message})
    }
}
module.exports = { registrarAlumno, traerAlumnos, traerUnAlumno, traerUnGrupo, borrarAlumno, actualizarAlumno}
