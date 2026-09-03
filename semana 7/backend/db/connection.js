const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'universidad',
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
    .catch(err => {
        console.error('Error de conexion: ', err);
    });

module.exports = sequelize;