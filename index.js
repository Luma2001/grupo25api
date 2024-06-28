const express =  require("express");
const app = express();
const PORT = process.env.PORT || 3030; 
const cors = require("cors");
const gruposRoute = require("./backend/routers/gruposRouter.js")
const db = require("./backend/data/db.js")


app.use(cors());
app.use(express.json());

app.use("/grupos", gruposRoute)

//Conexion a la base de datos
const conexionDB = async ()=>{
    try {
        await db.authenticate();
        console.log("Genial, conectado ok a la base de datos")
    } catch (error) {
        console.error(`El error es:${error}`);
    }
}

app.listen(PORT,()=>{
    conexionDB();
    console.log(`Server ok en el puerto ${PORT}`);
});