'use strict';

// const { SET_DEFERRED } = require("sequelize/types/lib/deferrable.d.ts");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("user", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: { 
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true, //duy nhất
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      password: Sequelize.STRING(10),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("user");
  }
};
