require('dotenv').config()
const { Sequelize } = require("sequelize")

// nombre de la base datos - user - contraseña - { donde esta alojada la db, lenguaje, puerto }

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
})

module.exports = db
