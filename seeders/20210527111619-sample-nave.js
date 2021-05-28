'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Naves', [
      {
        "nombre": "Mysql2",
         "modelo": "CBD",
         "codigo": "XML",
         "fabricacon": "2011-02-23",
         "tipo": "Carga",
         "origen": "Tierra",
         "aforo": 442,
         "reparaciones": 1,
         "emergencia": 0
     }
    ]

    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
