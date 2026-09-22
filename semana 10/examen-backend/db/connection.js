const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'examen_productos',
    'root',
    'root',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
    }
);

sequelize.authenticate()
    .then(() => console.log('conexion exitosa'))
    .catch( err => {
        console.log('Error de conexion ', err);
    });

module.exports = sequelize;