const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://lymDatalabs:1234@localhost:5432/postgres');

module.exports = sequelize;