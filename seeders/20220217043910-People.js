'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        "Peoples",
        [
            {
                UserId: 1,
                name: "Nita Erickson",
                avatar: "avatar3.png",
                phone: "0839072121917",
                address: "833 Lafayette Avenue, Oretta, Tennessee, 6693",
                createdAt: "2021-09-14T07:34:06 -07:00",
                updatedAt: "2021-09-14T07:34:06 -07:00"
            },
            {
                UserId: 2,
                name: "Holman Medina",
                avatar: "avatar4.png",
                phone: "0810669689117",
                address: "415 Channel Avenue, Beyerville, Connecticut, 406",
                createdAt: "2021-09-14T07:34:06 -07:00",
                updatedAt: "2021-09-14T07:34:06 -07:00"
            },
            {
                UserId: 3,
                name: "Kirby Hoover",
                avatar: "avatar2.png",
                phone: "0808586008082",
                address: "358 Fay Court, Slovan, Michigan, 8283",
                createdAt: "2021-09-14T07:34:06 -07:00",
                updatedAt: "2021-09-14T07:34:06 -07:00"
            },
            {
                UserId: 4,
                name: "Therese Mejia",
                avatar: "avatar1.png",
                phone: "0859237587955",
                address: "176 Beayer Place, Lloyd, North Carolina, 9432",
                createdAt: "2021-09-14T07:34:06 -07:00",
                updatedAt: "2021-09-14T07:34:06 -07:00"
            },
        ],
        {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Peoples", null, {});
  }
};
