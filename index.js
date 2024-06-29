const express =  require("express")
const app = express();
const PORT = process.env.PORT || 3030
const cors = require("cors")
const alumnosRoute = require("./routes/alumnosRouter.js")
const db = require("./data/db.js")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Codo a Codo 2024 - Comision 24127\n\nGrupo 25\nLuciana Quilcate\nVeronica\nDiego Quevedo\nLeonardo Mathot\n\nEste es el Server Home\n\nAgregar /alumnos a la url para ver la info\n\n(https://leom.alwaysdata.net/alumnos)")
}) 
app.use("/alumnos", alumnosRoute)

//Conexion a la base de datos
const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log("Conexion ok a la base de datos")
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

app.listen(PORT,()=>{
    conexionDB()
    console.log(`Server ok en el puerto ${PORT}`)
})
