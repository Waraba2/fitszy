'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class workouts extends Model {

    static associate(models) {  //{ user }
      // this.belongsTo(user)
    }
  }

  workouts.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    textBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'workouts',
  });

  return workouts;
};