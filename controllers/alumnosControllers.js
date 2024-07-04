const { where } = require("sequelize")
const alumnosModel = require("../models/alumnosModel.js")

// FUNCION QUE TRAE TODOS LOS ALUMNOS
// READ - GET
const traerAlumnos = async (req, res) => {
    try {
        const alunmos = await alumnosModel.findAll()
        res.json(alunmos)
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



//UPDATE
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
module.exports = { traerAlumnos, traerUnAlumno, borrarAlumno, actualizarAlumno}
