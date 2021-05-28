'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Curriculums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPasajero: {
        type: Sequelize.INTEGER,
        references: {
          model: "Pasajeros",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      experiencia: {
        type: Sequelize.STRING
      },
      educacion: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Curriculums');
  }
};