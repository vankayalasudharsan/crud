'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING
    },
    age:{
       type:DataTypes.INTEGER
    },
    gender:{
       type:DataTypes.ENUM('Male','Female')
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt:{
      type:DataTypes.DATE
    }
  }, {
    sequelize,
    paranoid:true,
    modelName: 'Users',
  });
  return Users;
};