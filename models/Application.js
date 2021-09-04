// This application model sets up the application table for the database


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Application extends Model {}

Application.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        company_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job_url: {
            type: DataTypes.STRING,
        },
        submission_date: {
            type: DataTypes.DATE,
        },
        date_found: {
            type: DataTypes.DATE,
        },
        application_status: {
            type: DataTypes.STRING,
        },
        research_company: {
            type: DataTypes.BOOLEAN,
        },
        follow_up_email: {
            type: DataTypes.BOOLEAN,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'application',
    }
);

module.exports = Application;