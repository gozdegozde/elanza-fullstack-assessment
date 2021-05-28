'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('requests', 
      [
        {
          careType: "medical",
          startDate: "2021-05-30",
          endDate: "2021-05-30",
          clientName: "Gozde",
          extraInfo: "",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),

      },
       {
          careType: "household",
          startDate: "2021-05-31",
          endDate: "2021-05-31",
          clientName: "Mert",
          extraInfo: "No information",
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),

      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('requests', null, {});
     
  }
};
