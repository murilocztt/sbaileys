import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("Users", "allHistoric", {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "enabled"
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("Users", "allHistoric");
  }
};