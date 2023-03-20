const { DataTypes } = require("sequelize");
const sequelize = require('../db/db');


module.exports = function(sequelize, Sequelize) {
    const Workout = sequelize.define('Workout', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        videoUrl: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return Workout;
}
