import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.addColumn("TicketTracking", "ratingAt", {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
      }),
      queryInterface.addColumn("TicketTracking", "rated", {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      })
    ]);
  },

  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeColumn("TicketTracking", "ratingAt"),
      queryInterface.removeColumn("TicketTracking", "rated")
    ]);
  }
};