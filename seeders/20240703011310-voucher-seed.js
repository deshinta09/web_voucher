"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Vouchers",
      [
        {
          name: "Discount 20%",
          image: "https://unsplash.com/photos/Uy8oL_-RlfI",
          category: "Food & Beverage",
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Free Coffee",
          image: "https://unsplash.com/photos/wP_Ys92NTAs",
          category: "Café",
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Buy 1 Get 1 Free",
          image: "https://unsplash.com/photos/N_y88TWmGwA",
          category: "Fashion",
          status: "Expired",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "10% Off on Electronics",
          image: "https://unsplash.com/photos/M7GddPqJowg",
          category: "Electronics",
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Free Dessert",
          image: "https://unsplash.com/photos/XGAZzyLzn18",
          category: "Restaurant",
          status: "Redeemed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "$5 Off",
          image: "https://unsplash.com/photos/TQB-KbWZSwE",
          category: "Groceries",
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "15% Off on Books",
          image: "https://unsplash.com/photos/hQZexWc8tWY",
          category: "Books & Stationery",
          status: "Expired",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Vouchers", null, {});
  },
};
