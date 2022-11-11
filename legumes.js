const Sequelize = require('sequelize');
const databese = require('./db')

const legumes = databese.define('legumes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    preço: Sequelize.DECIMAL,
    descricao: Sequelize.STRING
})

module.exports = legumes;