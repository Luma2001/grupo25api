const express =  require("express")
const app = express();
const PORT = process.env.PORT || 3030
const cors = require("cors")
const alumnosRoute = require("./routes/alumnosRouter.js")
const db = require("./data/db.js")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send(`<h1>Codo a Codo 2024 - Comision 24127</h1>
    <h2>Grupo 25</h2>
    <ul>
    <li>Luciana Quilcate</li>
    <li>Veronica</li>
    <li>Diego Quevedo</li>
    <li>Leonardo Mathot</li>
    </ul>
    <h3>Este es el Server Home</h3>
    <p>Agregar <strong><code>/alumnos</code></strong> a la url para ver la info</p>
    <p>(<code>https://leom.alwaysdata.net/alumnos</code>)</p>`)
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
