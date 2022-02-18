'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Peoples", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER,
        },
        UserId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: {
                    tableName: "Users",
                },
                key: "id",
            },
            onUpdate: "cascade",
            onDelete: "cascade",
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(255),
        },
        avatar: {
            defaultValue: "avatar1.png",
            type: Sequelize.TEXT,
        },
        phone: {
            unique: true,
            validate: {
                isInt: true,
            },
            type: Sequelize.STRING(15),
        },
        address: {
            allowNull: false,
            type: Sequelize.TEXT,
        },
        createdAt: { type: Sequelize.DATE, allowNull: false },
        updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Peoples");
  }
};
