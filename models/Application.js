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
        // Status options - Application submitted, Prep for phone interview, Phone interview complete, Prep for onsite interview, Onsite interview complete, Prep for proficiency test, Passed proficiency test, Failed proficiency test, Offer received, Accepted offer, Declined offer 
        application_status: {
            type: DataTypes.STRING,
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