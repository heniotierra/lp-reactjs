module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("properties", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.DOUBLE
        },
        baths: {
            type: Sequelize.DOUBLE
        },
        beds: {
            type: Sequelize.INTEGER
        },
        neighborhood: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        zipcode: {
            type: Sequelize.STRING
        },
        available: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        yearBuilt: {
            type: Sequelize.INTEGER
        },
        heating: {
            type: Sequelize.STRING
        },
        parking: {
            type: Sequelize.STRING
        },
        lot: {
            type: Sequelize.STRING
        },
        stories: {
            type: Sequelize.INTEGER
        },
        anualTax: {
            type: Sequelize.DOUBLE
        },
        hasGarage: {
            type: Sequelize.BOOLEAN
        },
        pool: {
            type: Sequelize.BOOLEAN
        },
        virtualTourLink: {
            type: Sequelize.STRING
        },
        parcelNumber: {
            type: Sequelize.INTEGER
        },
        lastSold: {
            type: Sequelize.DATE
        }, 
        totalVisits: {
            type: Sequelize.INTEGER
        },
        lastVisited: {
            type: Sequelize.DATEONLY
        },
        images: {
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable("properties");
  }
};
