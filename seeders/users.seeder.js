const INSERT_CARS = `
  INSERT INTO "Users" (role, email, password, name) VALUES
    ('1', 'user1@gmail.com', '$2a$10$8s/Tc6EZiqWX8SQYs.SJEO0u9VRqgYv7KwaqQAijZziTtBasjYuvO', 'nama 1'),
    ('2', 'user2@gmail.com', '$2a$10$8s/Tc6EZiqWX8SQYs.SJEO0u9VRqgYv7KwaqQAijZziTtBasjYuvO', 'nama 2'),
    ('3', 'user3@gmail.com', '$2a$10$8s/Tc6EZiqWX8SQYs.SJEO0u9VRqgYv7KwaqQAijZziTtBasjYuvO', 'nama 3')`;

module.exports = INSERT_CARS;