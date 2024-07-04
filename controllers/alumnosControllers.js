const { where } = require("sequelize")
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


// READ - GET BY ID
const traerUnAlumno = async (req, res) => {
    try {
        const alunmo = await empleadosModel.findByPk(req.params.id)
        res.json(alunmo)
    } catch (error) {
        res.json({ message: error.message })
    }
}



//UPDATE
const actualizarAlumno = async (req,res) =>{
    try {
        await empleadosModel.update(req.body,{
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
        await empleadosModel.destroy({
            where:{id:req.params.id}
        })
        res.json({"message": `Alumno ID#${req.params.id} borrado correctamente.`})
    } catch (error) {
        res.json({message:error.message})
    }
}
module.exports = { traerAlumnos, traerUnAlumno, borrarAlumno, actualizarAlumno}