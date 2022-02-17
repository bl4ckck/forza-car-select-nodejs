"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // User.belongsTo(models.Manufacture);
        }
    }
    User.init(
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
            },
            roles: {
                allowNull: false,
                type: DataTypes.ENUM,
                values: ["STUDENT", "ADMIN"],
            },
            email: {
                allowNull: false,
                unique: true,
                type: DataTypes.STRING(50),
            },
            password: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            createdAt: { type: DataTypes.DATE, allowNull: false },
            updatedAt: { type: DataTypes.DATE, allowNull: false },
        },
        {
            sequelize,
            timestamps: true,
            modelName: "User",
        }
    );
    return User;
};
