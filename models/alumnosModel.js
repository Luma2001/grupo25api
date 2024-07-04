const db = require("../data/db.js")

const { DataTypes } = require("sequelize")

const alumnosModel = db.define("alumnos", {
    nombre: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    grupo: { type: DataTypes.INTEGER },
})

module.exports = alumnosModel
