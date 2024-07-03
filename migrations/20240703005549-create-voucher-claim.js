"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Voucher_Claims", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_voucher: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "Vouchers",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "Users",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Voucher_Claims");
  },
};
