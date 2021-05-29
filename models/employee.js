'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Department}) {
      // define association here
      this.belongsTo(Department,{
        foreignKey: 'department_id',
        as: 'department'
      })
    }
  };
  Employee.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    department_id: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};