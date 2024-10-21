'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
       await queryInterface.createTable('todos', {
           id: {
               allowNull: false,
               autoIncrement: true,
               primaryKey: true,
               type: Sequelize.INTEGER,
           },
           title: {
               type: Sequelize.STRING,
               allowNull: false,
           },
           description: {
               type: Sequelize.STRING,
               allowNull: true,
           },
           completed: {
               type: Sequelize.BOOLEAN,
               defaultValue: false,
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
   down: async (queryInterface) => {
       await queryInterface.dropTable('todos');
   },
};
