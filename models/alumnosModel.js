const db = require("../data/db.js")

const { DataTypes } = require("sequelize")

const empleadosModel = db.define("alumnos", {
    nombre: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    grupo: { type: DataTypes.INTEGER },
})

module.exports = empleadosModel
