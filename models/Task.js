const Sequilize = require('sequelize')
const sequelize = require('../database/db')
const { Sequelize } = require('sequelize')

module.exports = sequelize.define(
    'tbl_tasks',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task_name: {
            type: Sequelize.STRING 
        }
    },
    {
        timestamps: false
    }
)