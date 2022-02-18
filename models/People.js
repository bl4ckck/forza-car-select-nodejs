"use strict";
const { Model } = require("sequelize");
// const { User } = require("./");
module.exports = (sequelize, DataTypes) => {
    class People extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            People.belongsTo(models.User);
        }
    }
    People.init(
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
            },
            UserId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: {
                        tableName: "Users",
                    },
                    key: "id",
                },
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            avatar: {
                defaultValue: "avatar1.png",
                type: DataTypes.TEXT,
            },
            phone: {
                unique: true,
                validate: {
                    isInt: true,
                },
                type: DataTypes.STRING(15),
            },
            address: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            createdAt: { type: DataTypes.DATE, allowNull: false },
            updatedAt: { type: DataTypes.DATE, allowNull: false },
        },
        {
            sequelize,
            timestamps: true,
            tableName: "Peoples",
            modelName: "People",
        }
    );
    return People;
};
