'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
        },
        roles: {
            allowNull: false,
            type: Sequelize.ENUM,
            values: ["STUDENT", "ADMIN"],
        },
        email: {
            allowNull: false,
            unique: true,
            type: Sequelize.TEXT,
        },
        password: {
            allowNull: false,
            type: Sequelize.TEXT,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  }
};
