const { DataTypes } = require("sequelize")
const sequelize = require('../db/db');
const Workout = require('./workout')(sequelize, DataTypes);

module.exports = function(sequelize, Sequelize) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true,
        },
    },{
        timestamps: false,

    })

    User.hasMany(Workout, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    Workout.belongsTo(User);

    User.prototype.validPassword = function (password) {
        return this.password === password
    }


    return User
}