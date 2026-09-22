const sequelize = require('../db/connection');
const { DataTypes } = require('sequelize');

const Producto = sequelize.define('Producto', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },

    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    estado: {
        type: DataTypes.ENUM('Disponible', 'No disponible'),
        allowNull: false
    },

    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },

    fotografia_url: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    tableName: 'productos',
    timestamps: false
});

module.exports = Producto