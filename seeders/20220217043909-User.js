'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        "Users",
        [
            {
                roles: "STUDENT",
                email: "student@gmail.com",
                password: "$2a$10$8s/Tc6EZiqWX8SQYs.SJEO0u9VRqgYv7KwaqQAijZziTtBasjYuvO",
                createdAt: "2021-09-14T07:34:06 -07:00",
                updatedAt: "2021-09-14T07:34:06 -07:00",
            },
            {
                roles: "STUDENT",
                email: "student2@gmail.com",
                password: "$2a$10$8s/Tc6EZiqWX8SQYs.SJEO0u9VRqgYv7KwaqQAijZziTtBasjYuvO",
                createdAt: "2021-09-14T07:34:06 -07:00",
                updatedAt: "2021-09-14T07:34:06 -07:00",
            },
            {
                roles: "ADMIN",
                email: "admin@gmail.com",
                password: "$2a$10$8s/Tc6EZiqWX8SQYs.SJEO0u9VRqgYv7KwaqQAijZziTtBasjYuvO",
                createdAt: "2021-09-14T07:34:06 -07:00",
                updatedAt: "2021-09-14T07:34:06 -07:00",
            },
            {
                roles: "ADMIN",
                email: "admin2@gmail.com",
                password: "$2a$10$8s/Tc6EZiqWX8SQYs.SJEO0u9VRqgYv7KwaqQAijZziTtBasjYuvO",
                createdAt: "2021-09-14T07:34:06 -07:00",
                updatedAt: "2021-09-14T07:34:06 -07:00",
            },
        ],
        {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
