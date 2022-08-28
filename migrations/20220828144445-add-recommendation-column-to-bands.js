'use strict'
const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('bands', 'recommendation', {
        type: DataTypes.STRING
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bands', 'recommendation')
  }
};
