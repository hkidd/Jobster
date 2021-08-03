// This test model sets up the test table for the database


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Test extends Model {}

Test.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        test_date: {
            type: DataTypes.DATE,
        },
        concepts: {
            type: DataTypes.TEXT,
        },
        passed: {
            type: DataTypes.BOOLEAN,
        },
        application_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'application',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'test',
    }
);

module.exports = Test;