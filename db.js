const Sequelize = require('sequelize');
const sequelize = new Sequelize('CRUD', 'Hodavio', 'laura2000', {
    dialect: 'sqlite', 
    host: 'localhost',
    port: 8080
})

module.exports = sequelize;